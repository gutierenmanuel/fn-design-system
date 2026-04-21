import { createContext, useContext, useMemo, type ReactNode } from 'react'
import { WailsCache, wailsCache } from '../core/wails_cache'
import type { QueryOptions, MutationOptions } from '../../types/ui/wails_ipc'

interface WailsContextValue {
  cache: WailsCache
  defaultQueryOptions: Partial<QueryOptions>
  defaultMutationOptions: Partial<MutationOptions>
}

const WailsContext = createContext<WailsContextValue | null>(null)

export interface WailsProviderProps {
  children: ReactNode
  /** Usar un cache custom en lugar del singleton */
  cache?: WailsCache
  /** Opciones por defecto para queries */
  defaultQueryOptions?: Partial<QueryOptions>
  /** Opciones por defecto para mutations */
  defaultMutationOptions?: Partial<MutationOptions>
}

export function WailsProvider({
  children,
  cache,
  defaultQueryOptions = {},
  defaultMutationOptions = {},
}: WailsProviderProps) {
  const value = useMemo<WailsContextValue>(
    () => ({
      cache: cache ?? wailsCache,
      defaultQueryOptions,
      defaultMutationOptions,
    }),
    [cache, defaultQueryOptions, defaultMutationOptions]
  )

  return (
    <WailsContext.Provider value={value}>
      {children}
    </WailsContext.Provider>
  )
}

export function useWailsContext(): WailsContextValue {
  const context = useContext(WailsContext)
  if (!context) {
    // Fallback to singleton cache if no provider
    return {
      cache: wailsCache,
      defaultQueryOptions: {},
      defaultMutationOptions: {},
    }
  }
  return context
}

export function useWailsCache(): WailsCache {
  return useWailsContext().cache
}
