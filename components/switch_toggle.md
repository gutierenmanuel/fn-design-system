---
name: switch_toggle
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "SwitchToggle(props: SwitchToggleProps): JSX.Element"
description: "Toggle on/off accesible con label opcional a izquierda o derecha. Mantine Switch."
tags: [switch, toggle, component, ui, interactive, form, mantine]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: ["@mantine/core"]
output: "Componente SwitchToggle que renderiza switch on/off accesible con label opcional"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/switch_toggle.tsx"
props:
  - name: label
    type: "string"
    required: false
    description: "Texto de etiqueta visible junto al switch"
  - name: labelPosition
    type: "'left' | 'right'"
    required: false
    description: "Posicion del label respecto al switch (default: right)"
  - name: checked
    type: "boolean"
    required: false
    description: "Estado controlado del toggle"
  - name: defaultChecked
    type: "boolean"
    required: false
    description: "Estado inicial no controlado"
  - name: disabled
    type: "boolean"
    required: false
    description: "Deshabilita el toggle"
  - name: onCheckedChange
    type: "(checked: boolean) => void"
    required: false
    description: "Callback cuando cambia el estado"
emits: [onCheckedChange]
has_state: false
framework: react
variant: []
---

## Ejemplo

```tsx
// Label a la derecha (default)
<SwitchToggle label="Notificaciones" defaultChecked />

// Label a la izquierda
<SwitchToggle label="Modo oscuro" labelPosition="left" checked={dark} onCheckedChange={setDark} />

// Solo switch sin label
<SwitchToggle checked={enabled} onCheckedChange={setEnabled} />
```

## Notas

Usa Mantine Switch. Soporta labelPosition nativo de Mantine para posicionar el label a izquierda o derecha. El callback onCheckedChange se adapta desde el onChange nativo.
