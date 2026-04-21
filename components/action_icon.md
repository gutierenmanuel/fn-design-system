---
name: action_icon
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "FnActionIcon(props: FnActionIconProps): JSX.Element"
description: "Boton de icono con variantes, loading y tooltip opcional. Wrapper sobre Mantine ActionIcon."
tags: [mantine, button, icon, action, tooltip, component, ui]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: ["@mantine/core"]
framework: react
props:
  - name: icon
    type: "ReactNode"
    required: true
    description: "Icono a renderizar dentro del boton"
  - name: variant
    type: "'filled' | 'light' | 'outline' | 'transparent' | 'default' | 'subtle'"
    required: false
    description: "Variante visual del boton, default 'default'"
  - name: size
    type: "MantineSize | number"
    required: false
    description: "Tamano del boton"
  - name: color
    type: "MantineColor"
    required: false
    description: "Color del boton"
  - name: onClick
    type: "MouseEventHandler"
    required: false
    description: "Callback al hacer click"
  - name: loading
    type: "boolean"
    required: false
    description: "Muestra spinner de carga"
  - name: disabled
    type: "boolean"
    required: false
    description: "Deshabilita el boton"
  - name: tooltip
    type: "string"
    required: false
    description: "Si se provee, envuelve el boton en un Tooltip"
output: "Boton de icono con tooltip opcional, estados loading/disabled y multiples variantes"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/action_icon.tsx"
emits: []
has_state: false
variant: [filled, light, outline, transparent, default, subtle]
---

## Ejemplo

```tsx
import { FnActionIcon } from '@fn_library'
import { IconSettings } from '@tabler/icons-react'

<FnActionIcon
  icon={<IconSettings size={18} />}
  tooltip="Configuracion"
  variant="light"
  onClick={() => openSettings()}
/>
```

## Notas

Wrapper sobre Mantine `ActionIcon`. Si se provee `tooltip`, envuelve automaticamente en Mantine `Tooltip`. Compatible con iconos de `@tabler/icons-react`.
