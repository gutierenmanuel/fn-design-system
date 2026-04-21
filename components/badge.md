---
name: badge
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "Badge(props: BadgeProps & VariantProps<typeof badgeVariants>): JSX.Element"
description: "Badge con 10 variantes semánticas (default, secondary, destructive, outline, ghost, link, success, warning, error, info) y 2 tamaños. Mantine Badge."
tags: [badge, status, component, ui, indicator, mantine]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: ["@mantine/core"]
output: "Componente Badge que renderiza un indicador visual con 10 variantes semánticas de estado"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/badge.tsx"
props:
  - name: variant
    type: "'default' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'link' | 'success' | 'warning' | 'error' | 'info'"
    required: false
    description: "Variante visual"
  - name: size
    type: "'default' | 'sm'"
    required: false
    description: "Tamaño"
emits: []
has_state: false
framework: react
variant: [default, secondary, destructive, outline, ghost, link, success, warning, error, info]
source_repo: "https://gitea-dgg044oo04woo4ggcsws4gk0.organic-machine.com/Bl4cksmith/Frontend_Library"
source_license: "MIT"
source_file: "frontend/src/components/ui/badge.tsx"
---

## Ejemplo

```tsx
<Badge variant="success">Active</Badge>
<Badge variant="error" size="sm">Error</Badge>
```

## Notas

Usa Mantine Badge internamente. Las 10 variantes se mapean a combinaciones de variant+color de Mantine (filled, light, outline, subtle, transparent).
