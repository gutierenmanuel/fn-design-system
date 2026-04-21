---
name: select
kind: component
lang: ts
domain: ui
version: "2.0.0"
purity: impure
signature: "Select(props: SelectProps): JSX.Element"
description: "Select dropdown con búsqueda, grupos y accesibilidad. Wrapper sobre Mantine Select con API declarativa via prop data."
tags: [select, form, dropdown, component, ui, interactive, mantine]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: ["@mantine/core"]
output: "Componente Select que renderiza dropdown searchable con soporte para opciones planas, agrupadas y custom render"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/select.tsx"
props:
  - name: data
    type: "string[] | { value: string; label: string; disabled?: boolean }[] | { group: string; items: ... }[]"
    required: true
    description: "Opciones del select — strings, objetos {value,label}, o grupos"
  - name: value
    type: "string | null"
    required: false
    description: "Valor seleccionado (controlled)"
  - name: onChange
    type: "(value: string | null) => void"
    required: false
    description: "Callback al cambiar selección"
  - name: defaultValue
    type: "string | null"
    required: false
    description: "Valor inicial (uncontrolled)"
  - name: placeholder
    type: "string"
    required: false
    description: "Texto cuando no hay selección"
  - name: label
    type: "string"
    required: false
    description: "Label del campo"
  - name: searchable
    type: "boolean"
    required: false
    description: "Permite buscar entre opciones"
  - name: clearable
    type: "boolean"
    required: false
    description: "Permite limpiar la selección"
  - name: disabled
    type: "boolean"
    required: false
    description: "Deshabilitar el select"
  - name: size
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'"
    required: false
    description: "Tamaño del componente"
emits: [onChange]
has_state: true
framework: react
variant: [default]
---

## Ejemplo

```tsx
import { Select } from '@fn_library'

// Opciones simples (strings)
<Select
  label="Tu librería favorita"
  placeholder="Elige una"
  data={['React', 'Angular', 'Vue', 'Svelte']}
/>

// Opciones con value/label
<Select
  value={selected}
  onChange={setSelected}
  data={[
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
  ]}
/>

// Con grupos
<Select
  searchable
  data={[
    { group: 'Frontend', items: [{ value: 'react', label: 'React' }] },
    { group: 'Backend', items: [{ value: 'node', label: 'Node.js' }] },
  ]}
/>
```

## Notas

- Wrapper directo sobre `Select` de `@mantine/core` v9. Todas las props de Mantine Select son válidas.
- Soporta `searchable` para filtrar opciones, `clearable` para limpiar, `allowDeselect` para deseleccionar.
- Data acepta: `string[]`, `{ value, label }[]`, o `{ group, items }[]`.
- Reemplaza al antiguo `select.tsx` basado en NativeSelect con sub-componentes stub.
