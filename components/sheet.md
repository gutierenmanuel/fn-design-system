---
name: sheet
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "Sheet(props: SheetProps): JSX.Element"
description: "Panel lateral deslizante (drawer) accesible con variantes de lado y animaciones. Mantine Drawer."
tags: [sheet, drawer, panel, component, ui, interactive, overlay, mantine]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: ["@mantine/core", react]
output: "Componente Sheet que renderiza panel deslizante lateral accesible con animaciones via Mantine Drawer"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/sheet.tsx"
props:
  - name: side
    type: "'top' | 'bottom' | 'left' | 'right'"
    required: false
    description: "Lado desde el que aparece el panel (default: right)"
  - name: showCloseButton
    type: "boolean"
    required: false
    description: "Muestra el boton de cierre (default: true)"
  - name: open
    type: "boolean"
    required: false
    description: "Estado controlado de apertura"
  - name: onOpenChange
    type: "(open: boolean) => void"
    required: false
    description: "Callback cuando cambia el estado"
emits: [onOpenChange]
has_state: false
framework: react
variant: [top, bottom, left, right]
---

## Ejemplo

```tsx
<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Abrir panel</Button>
  </SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>Editar perfil</SheetTitle>
      <SheetDescription>Realiza cambios en tu perfil.</SheetDescription>
    </SheetHeader>
    <div className="py-4">
      {/* contenido del panel */}
    </div>
    <SheetFooter>
      <SheetClose asChild>
        <Button variant="outline">Cancelar</Button>
      </SheetClose>
      <Button>Guardar</Button>
    </SheetFooter>
  </SheetContent>
</Sheet>
```

## Notas

Reutiliza Mantine Drawer para el comportamiento modal y animaciones. SheetPortal y SheetOverlay son no-ops mantenidos por compatibilidad. Exports: Sheet, SheetTrigger, SheetContent, SheetClose, SheetPortal, SheetOverlay, SheetHeader, SheetFooter, SheetTitle, SheetDescription.
