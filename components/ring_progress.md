---
name: ring_progress
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "FnRingProgress(props: FnRingProgressProps): JSX.Element"
description: "Anillo de progreso con secciones coloreadas y label central. Wrapper sobre Mantine RingProgress."
tags: [mantine, progress, ring, chart, metrics, component, ui]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: ["@mantine/core"]
framework: react
props:
  - name: sections
    type: "RingProgressSection[]"
    required: true
    description: "Secciones del anillo con valor porcentual y color"
  - name: size
    type: "number"
    required: false
    description: "Tamano del anillo en px, default 120"
  - name: thickness
    type: "number"
    required: false
    description: "Grosor del trazo en px, default 12"
  - name: label
    type: "ReactNode"
    required: false
    description: "Contenido central del anillo (texto, icono, etc)"
  - name: rootColor
    type: "string"
    required: false
    description: "Color del fondo del anillo (parte sin llenar)"
output: "Anillo de progreso SVG con secciones coloreadas y slot central para label"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/ring_progress.tsx"
emits: []
has_state: false
variant: []
---

## Ejemplo

```tsx
import { FnRingProgress } from '@fn_library'
import { Text } from '@mantine/core'

<FnRingProgress
  sections={[
    { value: 40, color: 'cyan' },
    { value: 25, color: 'orange' },
    { value: 15, color: 'grape' },
  ]}
  label={<Text ta="center" fw={700}>80%</Text>}
/>
```

## Notas

Wrapper sobre Mantine `RingProgress`. Las secciones son aditivas -- la suma de `value` no deberia exceder 100. El `label` se renderiza centrado dentro del anillo.
