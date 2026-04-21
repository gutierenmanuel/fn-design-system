---
name: button
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "Button(props: ButtonProps & VariantProps<typeof buttonVariants>): JSX.Element"
description: "Botón accesible con 6 variantes (default, outline, secondary, ghost, destructive, link) y 8 tamaños. Mantine Button."
tags: [button, component, ui, interactive, mantine]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: ["@mantine/core"]
output: "JSX.Element: botón renderizado con los estilos y comportamientos configurados"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/button.tsx"
props:
  - name: variant
    type: "'default' | 'outline' | 'secondary' | 'ghost' | 'destructive' | 'link'"
    required: false
    description: "Estilo visual del botón"
  - name: size
    type: "'default' | 'xs' | 'sm' | 'lg' | 'icon' | 'icon-xs' | 'icon-sm' | 'icon-lg'"
    required: false
    description: "Tamaño del botón"
  - name: className
    type: "string"
    required: false
    description: "Clases CSS adicionales"
emits: [onClick]
has_state: false
framework: react
variant: [default, outline, secondary, ghost, destructive, link]
source_repo: "https://gitea-dgg044oo04woo4ggcsws4gk0.organic-machine.com/Bl4cksmith/Frontend_Library"
source_license: "MIT"
source_file: "frontend/src/components/ui/button.tsx"
---

## Ejemplo

```tsx
<Button variant="outline" size="sm">Click me</Button>
<Button variant="destructive">Delete</Button>
<Button variant="ghost" size="icon"><TrashIcon /></Button>
```

## Notas

Componente base del sistema. Usa Mantine Button para accesibilidad completa (keyboard, ARIA). Las variantes se mapean a Mantine: default->filled, outline->outline, secondary->light, ghost->subtle, destructive->filled(red), link->transparent.
