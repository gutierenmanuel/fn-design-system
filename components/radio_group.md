---
name: radio_group
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "RadioGroup(props: RadioGroupProps): JSX.Element"
description: "Grupo de opciones exclusivas accesible. Mantine Radio.Group + Radio."
tags: [radio, radio-group, component, ui, interactive, form, mantine]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: ["@mantine/core"]
output: "Componente RadioGroup que renderiza grupo de opciones exclusivas accesible"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/radio_group.tsx"
props:
  - name: value
    type: "string"
    required: false
    description: "Valor seleccionado (controlado)"
  - name: defaultValue
    type: "string"
    required: false
    description: "Valor inicial (no controlado)"
  - name: onValueChange
    type: "(value: string) => void"
    required: false
    description: "Callback al cambiar seleccion"
  - name: disabled
    type: "boolean"
    required: false
    description: "Deshabilita todo el grupo"
  - name: orientation
    type: "'horizontal' | 'vertical'"
    required: false
    description: "Orientacion del grupo"
emits: [onValueChange]
has_state: false
framework: react
variant: []
---

## Ejemplo

```tsx
<RadioGroup defaultValue="option-a">
  <RadioGroupItem value="option-a" label="Opcion A" />
  <RadioGroupItem value="option-b" label="Opcion B" />
  <RadioGroupItem value="option-c" label="Opcion C" disabled />
</RadioGroup>
```

## Notas

RadioGroup es el contenedor (Mantine Radio.Group). RadioGroupItem es cada opcion individual (Mantine Radio). Soporta orientacion horizontal y vertical.
