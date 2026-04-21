import { useCallback, useEffect, useRef, useState } from 'react'
import { useWailsContext } from './wails_provider'
import { DEFAULT_QUERY_OPTIONS, type QueryOptions, type QueryState } from '../../types/ui/wails_ipc'

export interface UseWailsQueryOptions<T> extends QueryOptions {
  /** Key única para identificar esta query en el cache */
  queryKey: string[]
  /** Función que ejecuta la llamada a Wails */
  queryFn: () => Promise<T>
  /** Callback en éxito */
  onSuccess?: (data: T) => void
  /** Callback en error */
  onError?: (error: Error) => void
}

export interface UseWailsQueryResult<T> extends QueryState<T> {
  /** Re-ejecutar la query manualmente */
  refetch: () => Promise<T>
  /** Invalidar cache de esta query */
  invalidate: () => void
}

export function useWailsQuery<T>({
  queryKey,
  queryFn,
  onSuccess,
  onError,
  ...options
}: UseWailsQueryOptions<T>): UseWailsQueryResult<T> {
  const { cache, defaultQueryOptions } = useWailsContext()

  // Merge options with defaults
  const opts = {
    ...DEFAULT_QUERY_OPTIONS,
    ...defaultQueryOptions,
    ...options,
  }

  const {
    enabled,
    staleTime,
    refetchInterval,
    refetchOnFocus,
    retry,
    retryDelay,
  } = opts

  const [state, setState] = useState<QueryState<T>>(() => ({
    data: cache.get<T>(queryKey),
    loading: !cache.has(queryKey) && enabled,
    error: null,
    isStale: cache.isStale(queryKey, staleTime),
    lastUpdated: cache.getTimestamp(queryKey),
  }))

  const retryCountRef = useRef(0)
  const mountedRef = useRef(true)

  const fetch = useCallback(async (): Promise<T> => {
    if (!mountedRef.current) throw new Error('Component unmounted')

    setState((s) => ({ ...s, loading: true, error: null }))

    try {
      const data = await queryFn()

      if (!mountedRef.current) throw new Error('Component unmounted')

      cache.set(queryKey, data)
      retryCountRef.current = 0

      setState({
        data,
        loading: false,
        error: null,
        isStale: false,
        lastUpdated: new Date(),
      })

      onSuccess?.(data)
      return data
    } catch (error) {
      if (!mountedRef.current) throw error

      const maxRetries = typeof retry === 'number' ? retry : retry ? 3 : 0

      if (retryCountRef.current < maxRetries) {
        retryCountRef.current += 1
        await new Promise((resolve) => setTimeout(resolve, retryDelay))
        return fetch()
      }

      setState((s) => ({
        ...s,
        loading: false,
        error: error as Error,
      }))

      onError?.(error as Error)
      throw error
    }
  }, [queryKey.join(':'), queryFn, cache, staleTime, retry, retryDelay, onSuccess, onError])

  // Initial fetch
  useEffect(() => {
    mountedRef.current = true

    if (enabled && (!cache.has(queryKey) || cache.isStale(queryKey, staleTime))) {
      fetch().catch(() => {})
    }

    return () => {
      mountedRef.current = false
    }
  }, [enabled, queryKey.join(':'), staleTime])

  // Refetch interval
  useEffect(() => {
    if (!refetchInterval || !enabled) return

    const interval = setInterval(() => {
      fetch().catch(() => {})
    }, refetchInterval)

    return () => clearInterval(interval)
  }, [refetchInterval, enabled, fetch])

  // Refetch on window focus
  useEffect(() => {
    if (!refetchOnFocus || !enabled) return

    const handleFocus = () => {
      if (cache.isStale(queryKey, staleTime)) {
        fetch().catch(() => {})
      }
    }

    window.addEventListener('focus', handleFocus)
    return () => window.removeEventListener('focus', handleFocus)
  }, [refetchOnFocus, enabled, queryKey.join(':'), staleTime, fetch])

  // Subscribe to cache changes
  useEffect(() => {
    return cache.subscribe(queryKey, () => {
      setState((s) => ({
        ...s,
        data: cache.get<T>(queryKey),
        isStale: cache.isStale(queryKey, staleTime),
        lastUpdated: cache.getTimestamp(queryKey),
      }))
    })
  }, [queryKey.join(':'), staleTime])

  const invalidate = useCallback(() => {
    cache.invalidate(queryKey)
  }, [queryKey.join(':')])

  return {
    ...state,
    refetch: fetch,
    invalidate,
  }
}
