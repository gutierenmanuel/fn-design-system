---
name: segmented_control
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "FnSegmentedControl(props: FnSegmentedControlProps): JSX.Element"
description: "Control segmentado para seleccion unica entre opciones. Wrapper sobre Mantine SegmentedControl."
tags: [mantine, segmented, toggle, tabs, selection, component, ui]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: ["@mantine/core"]
framework: react
props:
  - name: data
    type: "{ value: string; label: string }[]"
    required: true
    description: "Opciones del control segmentado"
  - name: value
    type: "string"
    required: false
    description: "Valor seleccionado actualmente"
  - name: onChange
    type: "(value: string) => void"
    required: false
    description: "Callback cuando cambia la seleccion"
  - name: fullWidth
    type: "boolean"
    required: false
    description: "Ocupa todo el ancho disponible, default false"
  - name: size
    type: "MantineSize"
    required: false
    description: "Tamano del control, default sm"
  - name: color
    type: "MantineColor"
    required: false
    description: "Color del segmento activo"
output: "Control segmentado con animacion de slide entre opciones"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/segmented_control.tsx"
emits: []
has_state: false
variant: []
---

## Ejemplo

```tsx
import { FnSegmentedControl } from '@fn_library'

<FnSegmentedControl
  value={view}
  onChange={setView}
  data={[
    { value: 'table', label: 'Tabla' },
    { value: 'chart', label: 'Grafico' },
    { value: 'map', label: 'Mapa' },
  ]}
/>
```

## Notas

Wrapper sobre Mantine `SegmentedControl`. Alternativa a tabs para seleccion compacta entre pocas opciones. La animacion de slide es nativa de Mantine.
