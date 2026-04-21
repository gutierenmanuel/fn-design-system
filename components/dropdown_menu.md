---
name: dropdown_menu
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "DropdownMenu(props: DropdownMenuProps): JSX.Element"
description: "Menu de acciones y contexto accesible con items, checkboxes, radios, separadores y submenus. Base-UI Menu primitive."
tags: [dropdown, menu, component, ui, interactive, overlay, mantine]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: ["@mantine/core"]
output: "Componente DropdownMenu que renderiza menú desplegable accesible con items, checkboxes, radios y submenus"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/dropdown_menu.tsx"
props:
  - name: open
    type: "boolean"
    required: false
    description: "Estado controlado de apertura"
  - name: defaultOpen
    type: "boolean"
    required: false
    description: "Estado inicial de apertura"
  - name: onOpenChange
    type: "(open: boolean) => void"
    required: false
    description: "Callback cuando cambia el estado"
  - name: modal
    type: "boolean"
    required: false
    description: "Comportamiento modal (default: true)"
emits: [onOpenChange]
has_state: false
framework: react
variant: []
---

## Ejemplo

```tsx
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Acciones</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem onActivate={() => console.log("Perfil")}>
      Perfil
    </DropdownMenuItem>
    <DropdownMenuCheckboxItem checked={showBookmarks} onCheckedChange={setShowBookmarks}>
      Marcadores
    </DropdownMenuCheckboxItem>
    <DropdownMenuSeparator />
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>Mas opciones</DropdownMenuSubTrigger>
      <DropdownMenuSubContent>
        <DropdownMenuItem>Opcion A</DropdownMenuItem>
      </DropdownMenuSubContent>
    </DropdownMenuSub>
  </DropdownMenuContent>
</DropdownMenu>
```

## Notas

Exports: DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuCheckboxItem, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuGroup, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuSubContent, DropdownMenuPortal.
