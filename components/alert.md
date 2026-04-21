---
name: alert
kind: component
lang: ts
domain: ui
version: "1.1.0"
purity: impure
signature: "Alert(props: { variant?: 'default' | 'destructive' | 'success' | 'warning' | 'info' }): JSX.Element"
description: "Alerta accesible con 5 variantes semánticas (default, destructive, success, warning, info). Mantine Alert con slots para título, descripción y acción."
tags: [alert, feedback, component, ui, notification, mantine]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: ["@mantine/core", react]
output: "Componente Alert que renderiza una alerta accesible via Mantine Alert con slots para título, descripción y acción"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/alert.tsx"
props:
  - name: variant
    type: "'default' | 'destructive' | 'success' | 'warning' | 'info'"
    required: false
    description: "Variante visual semántica."
emits: []
has_state: false
framework: react
variant: [default, destructive, success, warning, info]
source_repo: "https://gitea-dgg044oo04woo4ggcsws4gk0.organic-machine.com/Bl4cksmith/Frontend_Library"
source_license: "MIT"
source_file: "frontend/src/components/ui/alert.tsx"
---

## Ejemplo

```tsx
<Alert variant="destructive">
  <AlertCircle />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Something went wrong.</AlertDescription>
</Alert>
```

## Notas

Exporta 4 subcomponentes composables via data-slot: Alert, AlertTitle, AlertDescription, AlertAction.
AlertAction se posiciona absolute top-right para acciones secundarias (ej: boton cerrar).
alertVariants se exporta como objeto vacio por compatibilidad (Mantine gestiona variantes via color prop).
