import { useCallback, useEffect, useRef, useState } from 'react'
import { useWailsEvent } from './use_wails_event'

export interface UseWailsStreamOptions<T> {
  /** Nombre del evento de stream */
  streamName: string
  /** Función para iniciar el stream en Go */
  startFn?: () => Promise<void>
  /** Función para detener el stream en Go */
  stopFn?: () => Promise<void>
  /** Transformar datos entrantes */
  transform?: (data: unknown) => T
  /** Callback por cada chunk */
  onData?: (data: T) => void
  /** Callback cuando el stream termina */
  onComplete?: () => void
  /** Callback en error */
  onError?: (error: Error) => void
  /** Tamaño máximo del buffer */
  bufferSize?: number
  /** Auto-iniciar el stream */
  autoStart?: boolean
}

export interface UseWailsStreamResult<T> {
  /** Datos acumulados */
  data: T[]
  /** Último dato recibido */
  lastChunk: T | undefined
  /** Si está activo */
  isStreaming: boolean
  /** Si está cargando (iniciando) */
  isLoading: boolean
  /** Error si ocurrió */
  error: Error | null
  /** Iniciar stream */
  start: () => Promise<void>
  /** Detener stream */
  stop: () => Promise<void>
  /** Limpiar buffer */
  clear: () => void
  /** Número de chunks recibidos */
  chunkCount: number
}

/**
 * Hook para manejar streams de datos desde Wails
 * Útil para datos en tiempo real como logs, métricas, etc.
 */
export function useWailsStream<T = unknown>({
  streamName,
  startFn,
  stopFn,
  transform,
  onData,
  onComplete,
  onError,
  bufferSize = 1000,
  autoStart = false,
}: UseWailsStreamOptions<T>): UseWailsStreamResult<T> {
  const [data, setData] = useState<T[]>([])
  const [isStreaming, setIsStreaming] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const [chunkCount, setChunkCount] = useState(0)

  const lastChunkRef = useRef<T | undefined>(undefined)
  const mountedRef = useRef(true)

  // Listen for stream data
  useWailsEvent<unknown>({
    eventName: streamName,
    enabled: isStreaming,
    onEvent: (rawData) => {
      if (!mountedRef.current) return

      const chunk = transform ? transform(rawData) : (rawData as T)
      lastChunkRef.current = chunk

      setData((prev) => {
        const newData = [...prev, chunk]
        // Mantener buffer limitado
        if (newData.length > bufferSize) {
          return newData.slice(-bufferSize)
        }
        return newData
      })

      setChunkCount((c) => c + 1)
      onData?.(chunk)
    },
  })

  // Listen for stream complete
  useWailsEvent({
    eventName: `${streamName}:complete`,
    enabled: isStreaming,
    onEvent: () => {
      if (!mountedRef.current) return
      setIsStreaming(false)
      onComplete?.()
    },
  })

  // Listen for stream error
  useWailsEvent<{ message: string }>({
    eventName: `${streamName}:error`,
    enabled: isStreaming,
    onEvent: (errorData) => {
      if (!mountedRef.current) return
      const err = new Error(errorData?.message || 'Stream error')
      setError(err)
      setIsStreaming(false)
      onError?.(err)
    },
  })

  const start = useCallback(async () => {
    if (isStreaming || isLoading) return

    setIsLoading(true)
    setError(null)

    try {
      if (startFn) {
        await startFn()
      }
      setIsStreaming(true)
    } catch (err) {
      const error = err as Error
      setError(error)
      onError?.(error)
    } finally {
      setIsLoading(false)
    }
  }, [isStreaming, isLoading, startFn, onError])

  const stop = useCallback(async () => {
    if (!isStreaming) return

    try {
      if (stopFn) {
        await stopFn()
      }
      setIsStreaming(false)
    } catch (err) {
      const error = err as Error
      setError(error)
      onError?.(error)
    }
  }, [isStreaming, stopFn, onError])

  const clear = useCallback(() => {
    setData([])
    setChunkCount(0)
    lastChunkRef.current = undefined
  }, [])

  // Auto-start
  useEffect(() => {
    if (autoStart) {
      start()
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // Cleanup
  useEffect(() => {
    mountedRef.current = true
    return () => {
      mountedRef.current = false
    }
  }, [])

  return {
    data,
    lastChunk: lastChunkRef.current,
    isStreaming,
    isLoading,
    error,
    start,
    stop,
    clear,
    chunkCount,
  }
}

/**
 * Hook simplificado para logs en tiempo real
 */
export function useWailsLogs(eventName: string = 'logs') {
  return useWailsStream<string>({
    streamName: eventName,
    transform: (data) => (typeof data === 'string' ? data : JSON.stringify(data)),
    bufferSize: 500,
  })
}
