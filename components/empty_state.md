---
name: empty_state
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "EmptyState(props: EmptyStateProps): JSX.Element"
description: "Placeholder para listas y tablas vacías con icono, título, descripción y acción opcional. Tabler Icons por defecto."
tags: [empty-state, placeholder, no-data, component, ui, mantine]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: ["@mantine/core", "@tabler/icons-react"]
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/empty_state.tsx"
framework: react
has_state: false
emits: [onAction]
props:
  - name: icon
    type: "React.ReactNode"
    required: false
    description: "Icono a mostrar. Default: IconInbox de @tabler/icons-react."
  - name: title
    type: "string"
    required: false
    description: "Título del empty state. Default: 'No data found'."
  - name: description
    type: "string"
    required: false
    description: "Descripción explicativa. Default: 'There are no items to display yet.'."
  - name: actionLabel
    type: "string"
    required: false
    description: "Texto del botón de acción. Se muestra solo si también hay onAction."
  - name: onAction
    type: "() => void"
    required: false
    description: "Callback del botón de acción. Se muestra solo si también hay actionLabel."
  - name: size
    type: "MantineSize"
    required: false
    description: "Tamaño general del componente. Afecta el icono, texto y botón. Default: 'md'."
  - name: children
    type: "React.ReactNode"
    required: false
    description: "Contenido custom renderizado debajo de la descripción y antes del botón."
output: "Componente EmptyState centrado con icono, mensaje y botón de acción para estados sin datos"
params:
  - name: props
    desc: "Props del componente EmptyState"
---

## Ejemplo

```tsx
import { EmptyState } from '@fn_library/empty_state'

// Default — sin datos
<EmptyState />

// Con acción
<EmptyState
  title="No functions found"
  description="Try adjusting your search or create a new function."
  actionLabel="Create function"
  onAction={() => navigate('/new')}
/>

// Con icono custom
import { IconDatabase } from '@tabler/icons-react'

<EmptyState
  icon={<IconDatabase size={48} stroke={1.5} />}
  title="No databases connected"
  description="Connect a database to start querying data."
  size="lg"
/>

// Dentro de una Card
import { Card } from '@mantine/core'
import { EmptyState } from '@fn_library/empty_state'

<Card withBorder p="xl">
  <EmptyState
    title="No results"
    description="Your query returned no rows."
    size="sm"
  />
</Card>
```

## Notas

El tamaño del icono escala con `size`: xs=32, sm=40, md=48, lg=64, xl=80.
El orden del heading (`Title order`) es 5 para xs/sm y 4 para md/lg/xl.
El botón usa `variant="light"` de Mantine — hereda el color primario del tema.
`children` se renderiza entre la descripción y el botón, útil para filtros o links adicionales.
