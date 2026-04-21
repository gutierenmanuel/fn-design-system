---
name: skeleton
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "Skeleton(props: HTMLAttributes<HTMLDivElement>): JSX.Element"
description: "Sistema de loading skeletons: base, text, card, avatar, button, table. Variantes preconfiguradas para estados de carga. Mantine Skeleton."
tags: [skeleton, loading, placeholder, component, ui, mantine]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: ["@mantine/core"]
output: "Componente Skeleton que renderiza placeholder de carga con 6 variantes preconfiguradas (text, card, avatar, button, table)"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/skeleton.tsx"
props:
  - name: className
    type: "string"
    required: false
    description: "Clases CSS adicionales"
  - name: lines
    type: "number"
    required: false
    description: "Número de líneas (SkeletonText, default 3)"
  - name: rows
    type: "number"
    required: false
    description: "Filas de tabla (SkeletonTable, default 5)"
  - name: columns
    type: "number"
    required: false
    description: "Columnas de tabla (SkeletonTable, default 4)"
  - name: size
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'"
    required: false
    description: "Tamaño del avatar (SkeletonAvatar, default md)"
emits: []
has_state: false
framework: react
variant: [base, text, card, avatar, button, table]
source_repo: "https://gitea-dgg044oo04woo4ggcsws4gk0.organic-machine.com/Bl4cksmith/Frontend_Library"
source_license: "MIT"
source_file: "frontend/src/components/ui/skeleton.tsx"
---

## Ejemplo

```tsx
<SkeletonCard />
<SkeletonText lines={4} />
<SkeletonTable rows={10} columns={5} />
<SkeletonAvatar size="lg" />
<SkeletonButton />
```

## Notas

Exporta 6 variantes preconfiguradas. Todas componen sobre Mantine Skeleton con animacion nativa.
La ultima linea de SkeletonText se acorta a 80% para simular texto real.
SkeletonCard incluye imagen (180px) + dos lineas de texto. SkeletonAvatar usa circle para forma redonda.
