---
name: tags_input
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "TagsInput(props: TagsInputProps): JSX.Element"
description: "Input de tags libre con sugerencias opcionales. Permite crear valores custom a diferencia de MultiSelect. Wrapper sobre Mantine TagsInput."
tags: [tags, input, form, pills, component, ui, interactive, mantine]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: ["@mantine/core"]
output: "Componente TagsInput que renderiza input de tags con creación libre y sugerencias"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/tags_input.tsx"
props:
  - name: data
    type: "string[]"
    required: false
    description: "Lista de sugerencias para autocompletar"
  - name: value
    type: "string[]"
    required: false
    description: "Valor controlado: array de tags activos"
  - name: onChange
    type: "(value: string[]) => void"
    required: false
    description: "Callback cuando cambia la lista de tags"
  - name: maxTags
    type: "number"
    required: false
    description: "Número máximo de tags permitidos"
  - name: allowDuplicates
    type: "boolean"
    required: false
    description: "Permite tags duplicados. Por defecto false"
  - name: splitChars
    type: "string[]"
    required: false
    description: "Caracteres que dividen la entrada en tags. Por defecto [',']"
  - name: clearable
    type: "boolean"
    required: false
    description: "Muestra botón para limpiar todos los tags"
  - name: placeholder
    type: "string"
    required: false
    description: "Texto placeholder cuando no hay tags"
  - name: label
    type: "string"
    required: false
    description: "Etiqueta visible sobre el input"
  - name: disabled
    type: "boolean"
    required: false
    description: "Deshabilita el input"
  - name: size
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'"
    required: false
    description: "Tamaño del componente"
emits: [onChange]
has_state: true
framework: react
---

## Ejemplo

```tsx
import { TagsInput } from '@fn_library'

// Tags libres sin sugerencias
<TagsInput
  label="Tecnologías"
  placeholder="Añade una tecnología y presiona Enter"
  onChange={(tags) => console.log(tags)}
/>

// Con sugerencias y límite de tags
<TagsInput
  label="Categorías"
  placeholder="Selecciona o escribe"
  data={['Frontend', 'Backend', 'DevOps', 'QA', 'Diseño']}
  maxTags={3}
  clearable
  onChange={(tags) => setSelectedTags(tags)}
/>
```

## Notas

A diferencia de MultiSelect, TagsInput permite crear valores que no están en la lista `data`. El usuario escribe libremente y confirma con Enter o con los caracteres definidos en `splitChars`. Útil para campos de etiquetas, habilidades o keywords donde el conjunto no es cerrado.
