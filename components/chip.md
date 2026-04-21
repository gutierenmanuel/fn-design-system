---
name: chip
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "Chip(props: ChipProps): JSX.Element"
description: "Chip seleccionable con variantes filled/outline/light. ChipGroup para selección simple o múltiple. Wrapper sobre Mantine Chip."
tags: [chip, toggle, selection, component, ui, mantine]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: ["@mantine/core"]
output: "Componente Chip que renderiza un elemento seleccionable tipo badge, con ChipGroup para gestionar selección simple o múltiple entre varios chips"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/chip.tsx"
props:
  - name: checked
    type: "boolean"
    required: false
    description: "Estado seleccionado del chip (controlled)"
  - name: onChange
    type: "(checked: boolean) => void"
    required: false
    description: "Callback al cambiar el estado del chip"
  - name: variant
    type: "'filled' | 'outline' | 'light'"
    required: false
    description: "Estilo visual del chip"
  - name: color
    type: "string"
    required: false
    description: "Color del chip cuando está seleccionado"
  - name: size
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'"
    required: false
    description: "Tamaño del chip"
  - name: children
    type: "React.ReactNode"
    required: true
    description: "Contenido del chip — texto o elemento"
emits: [onChange]
has_state: true
framework: react
variant: [filled, outline, light]
---

## Ejemplo

```tsx
import { Chip, ChipGroup } from '@fn_library'

// Chip individual controlado
<Chip checked={active} onChange={setActive}>
  Activo
</Chip>

// ChipGroup selección simple (una sola opción)
<ChipGroup value={selected} onChange={setSelected}>
  <Chip value="react">React</Chip>
  <Chip value="vue">Vue</Chip>
  <Chip value="svelte">Svelte</Chip>
</ChipGroup>

// ChipGroup selección múltiple
<ChipGroup multiple value={tags} onChange={setTags}>
  <Chip value="frontend">Frontend</Chip>
  <Chip value="backend">Backend</Chip>
  <Chip value="devops">DevOps</Chip>
</ChipGroup>

// Con variante y color custom
<Chip variant="outline" color="teal" size="lg">
  Destacado
</Chip>
```

## Notas

- Wrapper directo sobre `Chip` de `@mantine/core` v9. Todas las props de Mantine Chip son válidas.
- `ChipGroup` es un alias de `MantineChip.Group` — gestiona el estado de selección entre chips hijos.
- En `ChipGroup` sin `multiple`, `value` es `string`. Con `multiple`, `value` es `string[]`.
- Internamente cada `Chip` renderiza un checkbox/radio accesible oculto con label visual.
