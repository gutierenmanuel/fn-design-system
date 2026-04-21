---
name: timeline
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "FnTimeline(props: FnTimelineProps): JSX.Element"
description: "Timeline vertical con items, iconos y colores. Wrapper sobre Mantine Timeline."
tags: [mantine, timeline, history, events, component, ui]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: ["@mantine/core"]
framework: react
props:
  - name: items
    type: "{ title: string; description?: string; icon?: ReactNode; color?: string; time?: string }[]"
    required: true
    description: "Items de la timeline con titulo, descripcion, icono, color y timestamp"
  - name: active
    type: "number"
    required: false
    description: "Indice del item activo, default -1 (ninguno)"
  - name: bulletSize
    type: "number"
    required: false
    description: "Tamano del bullet en px, default 20"
output: "Timeline vertical con bullets, titulos, timestamps y descripciones"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/timeline.tsx"
emits: []
has_state: false
variant: []
---

## Ejemplo

```tsx
import { FnTimeline } from '@fn_library'

<FnTimeline
  active={1}
  items={[
    { title: 'Creado', time: '2024-01-01', icon: <IconCheck size={12} /> },
    { title: 'En progreso', description: 'Pipeline ejecutando', color: 'blue' },
    { title: 'Completado' },
  ]}
/>
```

## Notas

Wrapper sobre Mantine `Timeline`. Recibe array declarativo de items. El `time` se muestra como texto dimmed debajo del titulo. Items despues de `active` se muestran como inactivos.
