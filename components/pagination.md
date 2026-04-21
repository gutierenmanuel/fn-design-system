---
name: pagination
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "Pagination(props: PaginationProps): JSX.Element"
description: "Controles de navegacion de paginas autocontenido. Mantine Pagination."
tags: [pagination, navigation, component, ui, mantine]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: ["@mantine/core"]
output: "Componente Pagination autocontenido que renderiza controles de navegacion de paginas"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/pagination.tsx"
props:
  - name: total
    type: "number"
    required: true
    description: "Numero total de paginas"
  - name: value
    type: "number"
    required: false
    description: "Pagina actual (controlado)"
  - name: defaultValue
    type: "number"
    required: false
    description: "Pagina inicial (no controlado)"
  - name: onChange
    type: "(page: number) => void"
    required: false
    description: "Callback al cambiar de pagina"
  - name: siblings
    type: "number"
    required: false
    description: "Paginas visibles a cada lado de la actual"
  - name: boundaries
    type: "number"
    required: false
    description: "Paginas visibles al inicio y final"
  - name: withEdges
    type: "boolean"
    required: false
    description: "Mostrar botones first/last page"
  - name: className
    type: "string"
    required: false
    description: "Clases CSS adicionales"
emits: [onChange]
has_state: false
framework: react
variant: []
---

## Ejemplo

```tsx
// Basico
<Pagination total={10} defaultValue={1} />

// Controlado
<Pagination total={20} value={page} onChange={setPage} />

// Con botones first/last
<Pagination total={50} withEdges siblings={2} />
```

## Notas

Usa Mantine Pagination autocontenido. Previous/Next, numeros de pagina y elipsis se generan automaticamente. La API anterior con sub-componentes (PaginationContent, PaginationItem, PaginationLink, etc.) fue reemplazada por un unico componente con props declarativas. Export: Pagination y PaginationProps.
