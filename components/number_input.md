---
name: number_input
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "FnNumberInput(props: FnNumberInputProps): JSX.Element"
description: "Input numerico con min/max, step, prefijo y sufijo. Wrapper sobre Mantine NumberInput."
tags: [mantine, input, number, form, component, ui]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: ["@mantine/core"]
framework: react
props:
  - name: value
    type: "number | string"
    required: false
    description: "Valor actual del input"
  - name: onChange
    type: "(value: number | string) => void"
    required: false
    description: "Callback cuando cambia el valor"
  - name: min
    type: "number"
    required: false
    description: "Valor minimo permitido"
  - name: max
    type: "number"
    required: false
    description: "Valor maximo permitido"
  - name: step
    type: "number"
    required: false
    description: "Incremento/decremento por click"
  - name: label
    type: "string"
    required: false
    description: "Etiqueta del input"
  - name: description
    type: "string"
    required: false
    description: "Texto descriptivo debajo del input"
  - name: error
    type: "string"
    required: false
    description: "Mensaje de error"
  - name: placeholder
    type: "string"
    required: false
    description: "Placeholder del input"
  - name: prefix
    type: "string"
    required: false
    description: "Texto prefijo dentro del input (ej: $)"
  - name: suffix
    type: "string"
    required: false
    description: "Texto sufijo dentro del input (ej: kg)"
output: "Input numerico con controles de incremento, validacion y decoradores de texto"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/number_input.tsx"
emits: []
has_state: false
variant: []
---

## Ejemplo

```tsx
import { FnNumberInput } from '@fn_library'

<FnNumberInput
  label="Precio"
  value={price}
  onChange={setPrice}
  min={0}
  max={10000}
  step={0.01}
  prefix="$"
  description="Precio unitario en USD"
/>
```

## Notas

Wrapper sobre Mantine `NumberInput`. Soporta prefix/suffix para decorar el valor visualmente. Los controles de incremento/decremento respetan min/max/step.
