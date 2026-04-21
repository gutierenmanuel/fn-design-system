---
name: search_bar
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "SearchBar(props: SearchBarProps): JSX.Element"
description: "Search input with debounce, search icon, and clear button"
tags: [component, ui, search, input, debounce]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: ["@mantine/core", "@tabler/icons-react"]
params:
  - name: onSearch
    desc: "Callback que se ejecuta con la query debounceada"
  - name: placeholder
    desc: "Placeholder del input (por defecto 'Search...')"
  - name: debounceMs
    desc: "Delay en milisegundos para el debounce (por defecto 300)"
output: "Componente SearchBar que renderiza input de búsqueda con icono y botón de limpiar"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/search_bar.tsx"
props:
  - name: onSearch
    type: "(query: string) => void"
    required: true
    description: "Called with the debounced search query"
  - name: placeholder
    type: "string"
    required: false
    description: "Placeholder text (default: Search...)"
  - name: debounceMs
    type: "number"
    required: false
    description: "Debounce delay in ms (default: 300)"
  - name: className
    type: "string"
    required: false
    description: "Additional CSS classes"
emits: []
has_state: true
framework: react
variant: []
---

## Ejemplo

```tsx
import { SearchBar } from '@fn_library'

function MyPage() {
  return (
    <SearchBar
      onSearch={(query) => console.log('search:', query)}
      placeholder="Search entities..."
      debounceMs={300}
    />
  )
}
```

## Notas

- Debounce usa ref para evitar re-renders innecesarios del callback
- El icono de clear solo aparece cuando hay texto
- Usa CSS variables del tema para colores (border, input, foreground, muted-foreground)
