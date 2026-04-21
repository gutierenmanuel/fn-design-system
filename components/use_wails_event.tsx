import { useCallback, useEffect, useRef, useState } from 'react'

// Types for Wails runtime (will be available when running in Wails)
declare global {
  interface Window {
    runtime?: {
      EventsOn: (eventName: string, callback: (...args: unknown[]) => void) => () => void
      EventsOff: (eventName: string, ...additionalEventNames: string[]) => void
      EventsOnce: (eventName: string, callback: (...args: unknown[]) => void) => () => void
      EventsOnMultiple: (eventName: string, callback: (...args: unknown[]) => void, maxCallbacks: number) => () => void
      EventsEmit: (eventName: string, ...data: unknown[]) => void
    }
  }
}

export interface UseWailsEventOptions<T> {
  /** Nombre del evento a escuchar */
  eventName: string
  /** Callback cuando llega el evento */
  onEvent?: (data: T) => void
  /** Si está habilitado */
  enabled?: boolean
  /** Solo escuchar una vez */
  once?: boolean
  /** Número máximo de veces a escuchar */
  maxCallbacks?: number
}

export interface UseWailsEventResult<T> {
  /** Último dato recibido */
  lastData: T | undefined
  /** Número de eventos recibidos */
  eventCount: number
  /** Emitir un evento */
  emit: (data?: T) => void
  /** Resetear estado */
  reset: () => void
}

/**
 * Hook para suscribirse a eventos de Wails
 */
export function useWailsEvent<T = unknown>({
  eventName,
  onEvent,
  enabled = true,
  once = false,
  maxCallbacks,
}: UseWailsEventOptions<T>): UseWailsEventResult<T> {
  const [lastData, setLastData] = useState<T | undefined>(undefined)
  const [eventCount, setEventCount] = useState(0)
  const callbackRef = useRef(onEvent)

  // Keep callback ref updated
  useEffect(() => {
    callbackRef.current = onEvent
  }, [onEvent])

  useEffect(() => {
    if (!enabled || !window.runtime) return

    const handleEvent = (...args: unknown[]) => {
      const data = args[0] as T
      setLastData(data)
      setEventCount((c) => c + 1)
      callbackRef.current?.(data)
    }

    let unsubscribe: (() => void) | undefined

    if (once) {
      unsubscribe = window.runtime.EventsOnce(eventName, handleEvent)
    } else if (maxCallbacks !== undefined) {
      unsubscribe = window.runtime.EventsOnMultiple(eventName, handleEvent, maxCallbacks)
    } else {
      unsubscribe = window.runtime.EventsOn(eventName, handleEvent)
    }

    return () => {
      unsubscribe?.()
    }
  }, [eventName, enabled, once, maxCallbacks])

  const emit = useCallback(
    (data?: T) => {
      if (window.runtime) {
        window.runtime.EventsEmit(eventName, data)
      }
    },
    [eventName]
  )

  const reset = useCallback(() => {
    setLastData(undefined)
    setEventCount(0)
  }, [])

  return {
    lastData,
    eventCount,
    emit,
    reset,
  }
}

/**
 * Hook para emitir eventos a Wails (sin suscripción)
 */
export function useWailsEmit() {
  return useCallback((eventName: string, ...data: unknown[]) => {
    if (window.runtime) {
      window.runtime.EventsEmit(eventName, ...data)
    }
  }, [])
}
