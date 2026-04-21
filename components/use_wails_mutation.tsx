import { useCallback, useRef, useState } from 'react'
import { useWailsContext } from './wails_provider'
import type { MutationOptions } from '../../types/ui/wails_ipc'

export interface UseWailsMutationOptions<TData, TVariables> extends MutationOptions {
  /** Función que ejecuta la mutación */
  mutationFn: (variables: TVariables) => Promise<TData>
  /** Callback antes de la mutación (optimistic update) */
  onMutate?: (variables: TVariables) => Promise<unknown> | unknown
  /** Callback en éxito */
  onSuccess?: (data: TData, variables: TVariables, context: unknown) => void
  /** Callback en error */
  onError?: (error: Error, variables: TVariables, context: unknown) => void
  /** Callback siempre (éxito o error) */
  onSettled?: (data: TData | undefined, error: Error | null, variables: TVariables, context: unknown) => void
  /** Query keys a invalidar en éxito */
  invalidateQueries?: string[][]
}

export interface UseWailsMutationResult<TData, TVariables> {
  /** Ejecutar la mutación */
  mutate: (variables: TVariables) => void
  /** Ejecutar la mutación (async) */
  mutateAsync: (variables: TVariables) => Promise<TData>
  /** Estado de carga */
  isLoading: boolean
  /** Datos del resultado */
  data: TData | undefined
  /** Error si ocurrió */
  error: Error | null
  /** Resetear estado */
  reset: () => void
  /** Si fue exitoso */
  isSuccess: boolean
  /** Si hubo error */
  isError: boolean
  /** Si está idle */
  isIdle: boolean
}

export function useWailsMutation<TData, TVariables = void>({
  mutationFn,
  onMutate,
  onSuccess,
  onError,
  onSettled,
  invalidateQueries,
  retry = false,
  retryDelay = 1000,
}: UseWailsMutationOptions<TData, TVariables>): UseWailsMutationResult<TData, TVariables> {
  const { cache } = useWailsContext()

  const [state, setState] = useState<{
    status: 'idle' | 'loading' | 'success' | 'error'
    data: TData | undefined
    error: Error | null
  }>({
    status: 'idle',
    data: undefined,
    error: null,
  })

  const retryCountRef = useRef(0)

  const executeMutation = useCallback(
    async (variables: TVariables): Promise<TData> => {
      setState((s) => ({ ...s, status: 'loading', error: null }))

      let context: unknown

      try {
        // Optimistic update
        if (onMutate) {
          context = await onMutate(variables)
        }

        const data = await mutationFn(variables)

        // Reset retry count on success
        retryCountRef.current = 0

        setState({
          status: 'success',
          data,
          error: null,
        })

        // Invalidate queries
        if (invalidateQueries) {
          invalidateQueries.forEach((queryKey) => {
            cache.invalidate(queryKey)
          })
        }

        onSuccess?.(data, variables, context)
        onSettled?.(data, null, variables, context)

        return data
      } catch (error) {
        const maxRetries = typeof retry === 'number' ? retry : retry ? 3 : 0

        if (retryCountRef.current < maxRetries) {
          retryCountRef.current += 1
          await new Promise((resolve) => setTimeout(resolve, retryDelay))
          return executeMutation(variables)
        }

        setState((s) => ({
          ...s,
          status: 'error',
          error: error as Error,
        }))

        onError?.(error as Error, variables, context)
        onSettled?.(undefined, error as Error, variables, context)

        throw error
      }
    },
    [mutationFn, onMutate, onSuccess, onError, onSettled, invalidateQueries, cache, retry, retryDelay]
  )

  const mutate = useCallback(
    (variables: TVariables) => {
      executeMutation(variables).catch(() => {})
    },
    [executeMutation]
  )

  const reset = useCallback(() => {
    setState({
      status: 'idle',
      data: undefined,
      error: null,
    })
    retryCountRef.current = 0
  }, [])

  return {
    mutate,
    mutateAsync: executeMutation,
    isLoading: state.status === 'loading',
    data: state.data,
    error: state.error,
    reset,
    isSuccess: state.status === 'success',
    isError: state.status === 'error',
    isIdle: state.status === 'idle',
  }
}
