---
name: multi_select
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "MultiSelect(props: MultiSelectProps): JSX.Element"
description: "Selector múltiple con búsqueda, pills y límite de selecciones. Wrapper sobre Mantine MultiSelect."
tags: [multi-select, form, dropdown, pills, component, ui, interactive, mantine]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: ["@mantine/core"]
output: "Componente MultiSelect que renderiza dropdown con selección múltiple, búsqueda y pills"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/multi_select.tsx"
props:
  - name: data
    type: "string[] | { value: string; label: string; disabled?: boolean }[]"
    required: true
    description: "Opciones del selector — strings o objetos {value, label}"
  - name: value
    type: "string[]"
    required: false
    description: "Valores seleccionados (controlled)"
  - name: onChange
    type: "(value: string[]) => void"
    required: false
    description: "Callback al cambiar la selección"
  - name: searchable
    type: "boolean"
    required: false
    description: "Permite buscar entre opciones"
  - name: clearable
    type: "boolean"
    required: false
    description: "Muestra botón para limpiar toda la selección"
  - name: maxValues
    type: "number"
    required: false
    description: "Número máximo de valores seleccionables"
  - name: placeholder
    type: "string"
    required: false
    description: "Texto cuando no hay selección"
  - name: label
    type: "string"
    required: false
    description: "Label del campo"
  - name: disabled
    type: "boolean"
    required: false
    description: "Deshabilitar el selector"
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
import { MultiSelect } from '@fn_library'

// Opciones simples
<MultiSelect
  label="Frameworks favoritos"
  placeholder="Elige uno o más"
  data={['React', 'Vue', 'Angular', 'Svelte']}
/>

// Con búsqueda y clearable
<MultiSelect
  label="Tecnologías"
  placeholder="Busca y selecciona"
  searchable
  clearable
  value={selected}
  onChange={setSelected}
  data={[
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'ts', label: 'TypeScript' },
  ]}
/>

// Máximo de selecciones
<MultiSelect
  label="Elige hasta 2"
  placeholder="Máximo 2"
  maxValues={2}
  data={['Opción A', 'Opción B', 'Opción C', 'Opción D']}
/>
```

## Notas

- Wrapper directo sobre `MultiSelect` de `@mantine/core` v9. Todas las props de Mantine MultiSelect son válidas.
- A diferencia de `Select`, `value` es `string[]` y `onChange` recibe `string[]`.
- Las selecciones se muestran como pills dentro del input, eliminables con clic.
- `maxValues` limita cuántos items pueden seleccionarse — el dropdown bloquea más selecciones al alcanzar el límite.
- Soporta `searchable` para filtrar opciones y `clearable` para un botón de limpiar todo.
