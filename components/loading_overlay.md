---
name: loading_overlay
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "FnLoadingOverlay(props: FnLoadingOverlayProps): JSX.Element"
description: "Overlay de carga con blur y opacidad configurable. Wrapper sobre Mantine LoadingOverlay."
tags: [mantine, loading, overlay, spinner, component, ui]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: ["@mantine/core"]
framework: react
props:
  - name: visible
    type: "boolean"
    required: true
    description: "Controla visibilidad del overlay"
  - name: loaderSize
    type: "number | string"
    required: false
    description: "Tamano del loader/spinner"
  - name: overlayBlur
    type: "number"
    required: false
    description: "Intensidad del blur del fondo, default 2"
  - name: overlayOpacity
    type: "number"
    required: false
    description: "Opacidad del overlay, default 0.5"
output: "Overlay semi-transparente con spinner centrado que cubre el contenedor padre"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/loading_overlay.tsx"
emits: []
has_state: false
variant: []
---

## Ejemplo

```tsx
import { FnLoadingOverlay } from '@fn_library'

<Box pos="relative">
  <FnLoadingOverlay visible={loading} overlayBlur={3} />
  <DataTable data={rows} />
</Box>
```

## Notas

Wrapper sobre Mantine `LoadingOverlay`. El contenedor padre necesita `position: relative` para que el overlay se posicione correctamente. Usa `loaderProps` y `overlayProps` internamente para mapear las props simplificadas.
