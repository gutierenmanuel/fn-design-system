---
name: card
kind: component
lang: ts
domain: ui
version: "1.1.0"
purity: impure
signature: "Card(props: { size?: 'default' | 'sm'; variant?: 'default' | 'borderless' | 'ghost'; className?: string; children: ReactNode }): JSX.Element"
description: "Contenedor card con header, title, description, action, content y footer. Sistema de slots composable. Variantes default, borderless y ghost para dashboards dark."
tags: [card, container, layout, component, ui, dashboard, dark]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: ["react"]
output: "Componente Card que renderiza un contenedor con slots composables (header, content, footer) y 3 variantes visuales"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/card.tsx"
props:
  - name: size
    type: "'default' | 'sm'"
    required: false
    description: "Tamaño del card"
  - name: variant
    type: "'default' | 'borderless' | 'ghost'"
    required: false
    description: "Variante visual. borderless quita borde/shadow, ghost además hace bg transparente"
  - name: className
    type: "string"
    required: false
    description: "Clases CSS adicionales"
emits: []
has_state: false
framework: react
variant: [default, sm, borderless, ghost]
source_repo: "https://gitea-dgg044oo04woo4ggcsws4gk0.organic-machine.com/Bl4cksmith/Frontend_Library"
source_license: "MIT"
source_file: "frontend/src/components/ui/card.tsx"
---

## Ejemplo

```tsx
<Card>
  <CardHeader>
    <CardTitle>Título</CardTitle>
    <CardDescription>Descripción</CardDescription>
  </CardHeader>
  <CardContent>Contenido</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>

{/* Dashboard dark — sin bordes */}
<Card variant="borderless">
  <CardContent>Widget sin marco</CardContent>
</Card>

{/* Completamente transparente */}
<Card variant="ghost">
  <CardContent>Sin fondo ni borde</CardContent>
</Card>
```

## Notas

Sistema de slots via data-slot attributes. Card detecta automáticamente la presencia de CardFooter y ajusta el padding. Exporta 7 subcomponentes composables.

Las variantes `borderless` y `ghost` eliminan el `ring-1` del borde por defecto. `ghost` además hace el fondo transparente. Alternativa con CSS global: `[data-slot="card"] { --tw-ring-opacity: 0; }` o `[data-variant="borderless"] { ring: 0 }` via `data-variant` attribute expuesto.
