---
name: popover
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "Popover(props: PopoverProps): JSX.Element"
description: "Contenido flotante posicionado accesible con animaciones. Mantine Popover."
tags: [popover, component, ui, interactive, overlay, mantine]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: ["@mantine/core", react]
output: "Componente Popover que renderiza contenido flotante accesible posicionado automáticamente via Mantine Popover"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/popover.tsx"
props:
  - name: open
    type: "boolean"
    required: false
    description: "Estado controlado de apertura"
  - name: defaultOpen
    type: "boolean"
    required: false
    description: "Estado inicial de apertura (no controlado)"
  - name: onOpenChange
    type: "(open: boolean) => void"
    required: false
    description: "Callback cuando cambia el estado de apertura"
  - name: sideOffset
    type: "number"
    required: false
    description: "Distancia en px entre trigger y popover (default: 4)"
emits: [onOpenChange]
has_state: false
framework: react
variant: []
---

## Ejemplo

```tsx
<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Abrir</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverHeader>
      <PopoverTitle>Configuracion</PopoverTitle>
      <PopoverDescription>Ajusta tus preferencias.</PopoverDescription>
    </PopoverHeader>
    <div className="mt-4">
      {/* contenido */}
    </div>
  </PopoverContent>
</Popover>
```

## Notas

Compuesto de: Popover (root), PopoverTrigger, PopoverContent, PopoverClose, PopoverHeader, PopoverTitle, PopoverDescription. El posicionamiento automatico lo maneja Mantine Popover. PopoverPortal es un no-op mantenido por compatibilidad.
