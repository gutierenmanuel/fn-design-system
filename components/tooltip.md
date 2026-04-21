---
name: tooltip
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "Tooltip(props: TooltipRootProps): JSX.Element"
description: "Tooltip accesible con posicionamiento automático. Mantine Tooltip con delay configurable."
tags: [tooltip, overlay, component, ui, help, mantine]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: ["@mantine/core", react]
output: "Componente Tooltip que renderiza tooltip accesible con posicionamiento automático y delay configurable via Mantine Tooltip"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/tooltip.tsx"
props:
  - name: delayDuration
    type: "number"
    required: false
    description: "Delay en ms antes de mostrar el tooltip (default 300)"
emits: []
has_state: true
framework: react
variant: [default]
source_repo: "https://gitea-dgg044oo04woo4ggcsws4gk0.organic-machine.com/Bl4cksmith/Frontend_Library"
source_license: "MIT"
source_file: "frontend/src/components/ui/tooltip.tsx"
---

## Ejemplo

```tsx
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>Hover me</TooltipTrigger>
    <TooltipContent>Tooltip text</TooltipContent>
  </Tooltip>
</TooltipProvider>
```

## Notas

Exporta 5 subcomponentes: TooltipProvider, Tooltip, TooltipTrigger, TooltipPortal, TooltipContent.
TooltipProvider y Tooltip son wrappers de compatibilidad (Mantine gestiona delay internamente).
TooltipPortal es un no-op mantenido por compatibilidad.
