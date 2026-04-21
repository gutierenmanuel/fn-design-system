---
name: progress_bar
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "ProgressBar(props: ProgressBarProps): JSX.Element"
description: "Barra de progreso con variantes de color y tamaño, buffer, animación, modo indeterminado y display de valor. Mantine Progress."
tags: [progress, loading, component, ui, feedback, mantine]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: ["@mantine/core"]
output: "Componente ProgressBar que renderiza barra de progreso con animaciones, buffer y modo indeterminado"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/progress_bar.tsx"
props:
  - name: value
    type: "number"
    required: true
    description: "Valor actual de progreso"
  - name: max
    type: "number"
    required: false
    description: "Valor máximo (default 100)"
  - name: buffer
    type: "number"
    required: false
    description: "Valor de buffer secundario (opcional)"
  - name: showValue
    type: "boolean"
    required: false
    description: "Mostrar porcentaje como texto superpuesto"
  - name: animated
    type: "boolean"
    required: false
    description: "Activar animación de rayas (stripes)"
  - name: indeterminate
    type: "boolean"
    required: false
    description: "Modo indeterminado sin valor conocido"
  - name: size
    type: "'sm' | 'md' | 'lg'"
    required: false
    description: "Altura de la barra (default md)"
  - name: color
    type: "'primary' | 'success' | 'warning' | 'destructive'"
    required: false
    description: "Color semántico (default primary)"
  - name: label
    type: "string"
    required: false
    description: "aria-label para accesibilidad"
emits: []
has_state: false
framework: react
variant: [primary, success, warning, destructive]
source_repo: "https://gitea-dgg044oo04woo4ggcsws4gk0.organic-machine.com/Bl4cksmith/Frontend_Library"
source_license: "MIT"
source_file: "frontend/src/components/ui/progress/progress-bar.tsx"
---

## Ejemplo

```tsx
<ProgressBar value={75} color="success" showValue />
<ProgressBar value={0} indeterminate />
<ProgressBar value={50} buffer={80} animated />
<ProgressBar value={30} size="lg" color="warning" />
```

## Notas

El porcentaje se clampea a [0, 100] internamente. El buffer se renderiza como capa semitransparente debajo del fill usando Progress.Root apilados. Los colores se mapean de semanticos (primary/success/warning/destructive) a colores Mantine. La animacion striped usa el prop animated nativo de Mantine.
