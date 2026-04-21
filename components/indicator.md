---
name: indicator
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "FnIndicator(props: FnIndicatorProps): JSX.Element"
description: "Badge indicador posicionado sobre un elemento hijo. Wrapper sobre Mantine Indicator."
tags: [mantine, indicator, badge, notification, dot, component, ui]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: ["@mantine/core"]
framework: react
props:
  - name: children
    type: "ReactNode"
    required: true
    description: "Elemento sobre el cual se posiciona el indicador"
  - name: color
    type: "MantineColor"
    required: false
    description: "Color del indicador, default red"
  - name: size
    type: "number"
    required: false
    description: "Tamano del dot en px, default 10"
  - name: position
    type: "'top-start' | 'top-center' | 'top-end' | 'middle-start' | 'middle-center' | 'middle-end' | 'bottom-start' | 'bottom-center' | 'bottom-end'"
    required: false
    description: "Posicion del indicador, default top-end"
  - name: processing
    type: "boolean"
    required: false
    description: "Animacion de pulso, default false"
  - name: disabled
    type: "boolean"
    required: false
    description: "Oculta el indicador, default false"
  - name: label
    type: "ReactNode"
    required: false
    description: "Contenido dentro del indicador (numero, texto)"
output: "Elemento hijo con un dot/badge indicador posicionado en una esquina"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/indicator.tsx"
emits: []
has_state: false
variant: []
---

## Ejemplo

```tsx
import { FnIndicator } from '@fn_library'
import { FnActionIcon } from '@fn_library'
import { IconBell } from '@tabler/icons-react'

{/* Dot simple */}
<FnIndicator processing>
  <FnActionIcon icon={<IconBell size={18} />} />
</FnIndicator>

{/* Con contador */}
<FnIndicator label={5} size={16} color="blue">
  <Avatar src="user.png" />
</FnIndicator>
```

## Notas

Wrapper sobre Mantine `Indicator`. El `processing` prop agrega una animacion de pulso al dot. Si se provee `label`, el indicador se agranda para mostrar contenido. `disabled` oculta el indicador sin desmontar el componente.
