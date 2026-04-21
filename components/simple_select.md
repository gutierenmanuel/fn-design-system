---
name: simple_select
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "SimpleSelect(props: SimpleSelectProps): JSX.Element"
description: "Select simplificado que acepta un array plano o agrupado de opciones. Wrapper sobre Select con API declarativa."
tags: [select, dropdown, form, component, ui, simple]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: ["@mantine/core"]
output: "Componente SimpleSelect que renderiza dropdown simplificado con soporte para opciones planas o agrupadas"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/simple_select.tsx"
props:
  - name: value
    type: "string"
    required: true
    description: "Valor seleccionado actualmente"
  - name: onValueChange
    type: "(value: string) => void"
    required: true
    description: "Callback cuando cambia la seleccion"
  - name: options
    type: "SimpleSelectOption[] | SimpleSelectGroup[]"
    required: true
    description: "Opciones planas o agrupadas"
  - name: placeholder
    type: "string"
    required: false
    description: "Texto cuando no hay seleccion"
  - name: disabled
    type: "boolean"
    required: false
    description: "Deshabilita el select"
  - name: size
    type: "'sm' | 'default'"
    required: false
    description: "Tamano del trigger"
  - name: className
    type: "string"
    required: false
    description: "Clases CSS adicionales"
emits: []
has_state: false
framework: react
variant: [default, sm]
---

## Ejemplo

```tsx
import { SimpleSelect } from '@fn_library'

// Opciones planas
const options = [
  { value: 'a', label: 'Opcion A' },
  { value: 'b', label: 'Opcion B' },
]

<SimpleSelect value={selected} onValueChange={setSelected} options={options} />

// Opciones agrupadas
const grouped = [
  { group: 'Frutas', items: [{ value: 'apple', label: 'Manzana' }] },
  { group: 'Verduras', items: [{ value: 'carrot', label: 'Zanahoria' }] },
]

<SimpleSelect value={selected} onValueChange={setSelected} options={grouped} />
```

## Notas

- Detecta automaticamente si las opciones son planas o agrupadas via type guard `isGrouped`.
- Wrapper sobre `Select` del registry — toda la logica de Base-UI y accesibilidad viene del componente base.
- Soporta items deshabilitados individualmente con `disabled: true` en cada opcion.
