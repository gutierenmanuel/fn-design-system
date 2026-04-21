---
name: wails_provider
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "WailsProvider(props: { children: ReactNode; cache?: WailsCache; defaultQueryOptions?: QueryOptions }): JSX.Element"
description: "Provider React para IPC Wails con cache context, opciones default y fallback a singleton. Exporta useWailsContext y useWailsCache."
tags: [wails, provider, context, ipc, component, ui]
uses_functions: [wails_cache_ts_core]
uses_types: [WailsIPC_ts_ui]
returns: []
returns_optional: false
error_type: ""
imports: [react]
output: "Componente WailsProvider que proporciona context de cache y opciones default para hooks Wails"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/wails_provider.tsx"
props:
  - name: cache
    type: "WailsCache"
    required: false
    description: "Cache custom (default: singleton global)"
  - name: defaultQueryOptions
    type: "Partial<QueryOptions>"
    required: false
    description: "Opciones default para todas las queries"
  - name: children
    type: "ReactNode"
    required: true
    description: "App content"
emits: []
has_state: false
framework: react
variant: [default]
source_repo: "https://gitea-dgg044oo04woo4ggcsws4gk0.organic-machine.com/Bl4cksmith/Frontend_Library"
source_license: "MIT"
source_file: "frontend/src/lib/wails/wails-provider.tsx"
---

## Ejemplo

```tsx
<WailsProvider defaultQueryOptions={{ staleTime: 5000, retry: 2 }}>
  <App />
</WailsProvider>
```

## Notas

Sin provider, los hooks hacen fallback al singleton `wailsCache`. El provider solo es necesario para cache custom o opciones globales.
