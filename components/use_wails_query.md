---
name: use_wails_query
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "useWailsQuery<T>(opts: UseWailsQueryOptions<T>): UseWailsQueryResult<T>"
description: "Hook React Query-like sobre IPC Wails. Cache automático, refetch por intervalo/foco, retry con backoff, invalidación."
tags: [wails, query, hook, ipc, cache, component, ui]
uses_functions: [wails_cache_ts_core, wails_provider_ts_ui]
uses_types: [WailsIPC_ts_ui]
returns: []
returns_optional: false
error_type: ""
imports: [react]
params:
  - name: opts
    desc: "Configuración: queryKey para cache, queryFn que ejecuta binding Wails, enabled, refetchInterval, staleTime"
output: "Hook que retorna data, loading, error, refetch, invalidate para queries cacheadas vía IPC"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/use_wails_query.tsx"
props:
  - name: queryKey
    type: "string[]"
    required: true
    description: "Key única para cache"
  - name: queryFn
    type: "() => Promise<T>"
    required: true
    description: "Función que llama al binding Wails"
  - name: enabled
    type: "boolean"
    required: false
    description: "Habilitar auto-fetch (default true)"
  - name: refetchInterval
    type: "number"
    required: false
    description: "Refetch cada N ms"
  - name: staleTime
    type: "number"
    required: false
    description: "Tiempo antes de considerar datos stale"
emits: [onSuccess, onError]
has_state: true
framework: react
variant: [default]
source_repo: "https://gitea-dgg044oo04woo4ggcsws4gk0.organic-machine.com/Bl4cksmith/Frontend_Library"
source_license: "MIT"
source_file: "frontend/src/lib/wails/use-wails-query.tsx"
---

## Ejemplo

```tsx
const { data, loading, refetch, invalidate } = useWailsQuery({
  queryKey: ['users', 'list'],
  queryFn: () => GetUsers(),       // Wails binding
  refetchInterval: 30000,          // Cada 30s
  staleTime: 5000,                 // Fresh por 5s
  onSuccess: (users) => console.log(`${users.length} users`),
})
```

## Notas

API inspirada en TanStack Query pero sobre IPC Wails (sin HTTP). Cache compartido via WailsProvider o singleton. Refetch automático en window focus.
