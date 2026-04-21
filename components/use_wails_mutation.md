---
name: use_wails_mutation
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "useWailsMutation<TData, TVariables>(opts: UseWailsMutationOptions<TData, TVariables>): UseWailsMutationResult<TData, TVariables>"
description: "Hook para escrituras IPC Wails con optimistic updates, invalidación automática de queries, retry y callbacks completos."
tags: [wails, mutation, hook, ipc, optimistic, component, ui]
uses_functions: [wails_cache_ts_core, wails_provider_ts_ui]
uses_types: [WailsIPC_ts_ui]
returns: []
returns_optional: false
error_type: ""
imports: [react]
params:
  - name: opts
    desc: "Configuración: mutationFn, invalidateQueries, onMutate para optimistic updates"
output: "Hook que retorna mutate, mutateAsync, isLoading, error para ejecutar escrituras IPC con cache"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/use_wails_mutation.tsx"
props:
  - name: mutationFn
    type: "(variables: TVariables) => Promise<TData>"
    required: true
    description: "Función que ejecuta la mutación via IPC"
  - name: invalidateQueries
    type: "string[][]"
    required: false
    description: "Query keys a invalidar en éxito"
  - name: onMutate
    type: "(variables: TVariables) => unknown"
    required: false
    description: "Optimistic update antes de la mutación"
emits: [onSuccess, onError, onSettled]
has_state: true
framework: react
variant: [default]
source_repo: "https://gitea-dgg044oo04woo4ggcsws4gk0.organic-machine.com/Bl4cksmith/Frontend_Library"
source_license: "MIT"
source_file: "frontend/src/lib/wails/use-wails-mutation.tsx"
---

## Ejemplo

```tsx
const { mutate, isLoading } = useWailsMutation({
  mutationFn: (user: User) => CreateUser(user),
  invalidateQueries: [['users']],
  onMutate: (user) => {
    // Optimistic: añadir al cache antes de confirmar
    const prev = wailsCache.get<User[]>(['users', 'list'])
    wailsCache.set(['users', 'list'], [...(prev || []), user])
    return { prev }
  },
  onError: (_err, _vars, context) => {
    // Rollback
    wailsCache.set(['users', 'list'], context.prev)
  },
})
```

## Notas

`mutate()` es fire-and-forget, `mutateAsync()` retorna Promise. Estado: idle → loading → success/error.
