---
name: dialog
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "Dialog(props: DialogRootProps): JSX.Element"
description: "Diálogo modal accesible con close button y sistema de slots (header, footer, title, description). Mantine Modal."
tags: [dialog, modal, overlay, component, ui, interactive, mantine]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: ["@mantine/core", react]
output: "Componente Dialog que renderiza modal accesible con focus trap y sistema de slots composables via Mantine Modal"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/dialog.tsx"
props:
  - name: showCloseButton
    type: "boolean"
    required: false
    description: "Mostrar botón de cerrar (default true)"
emits: [onOpenChange]
has_state: true
framework: react
variant: [default]
source_repo: "https://gitea-dgg044oo04woo4ggcsws4gk0.organic-machine.com/Bl4cksmith/Frontend_Library"
source_license: "MIT"
source_file: "frontend/src/components/ui/dialog.tsx"
---

## Ejemplo

```tsx
<Dialog>
  <DialogTrigger asChild><Button>Open</Button></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Título</DialogTitle>
      <DialogDescription>Descripción</DialogDescription>
    </DialogHeader>
    <p>Contenido</p>
    <DialogFooter>
      <Button>Confirmar</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

## Notas

10 subcomponentes exportados. Mantine Modal para accesibilidad completa (focus trap, escape, click outside). DialogPortal y DialogOverlay son no-ops mantenidos por compatibilidad.
