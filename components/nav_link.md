---
name: nav_link
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "FnNavLink(props: FnNavLinkProps): JSX.Element"
description: "Link de navegacion con icono, descripcion y anidamiento. Wrapper sobre Mantine NavLink."
tags: [mantine, navigation, link, sidebar, menu, component, ui]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: ["@mantine/core"]
framework: react
props:
  - name: label
    type: "string"
    required: true
    description: "Texto principal del link"
  - name: description
    type: "string"
    required: false
    description: "Texto secundario debajo del label"
  - name: icon
    type: "ReactNode"
    required: false
    description: "Icono a la izquierda del label"
  - name: active
    type: "boolean"
    required: false
    description: "Estado activo/seleccionado"
  - name: onClick
    type: "MouseEventHandler"
    required: false
    description: "Callback al hacer click"
  - name: href
    type: "string"
    required: false
    description: "URL para navegacion como anchor"
  - name: children
    type: "ReactNode"
    required: false
    description: "NavLinks hijos para crear arbol anidado"
  - name: opened
    type: "boolean"
    required: false
    description: "Controla si los hijos estan expandidos"
  - name: defaultOpened
    type: "boolean"
    required: false
    description: "Estado inicial de expansion de hijos"
output: "Link de navegacion con highlight activo, icono y soporte para sub-items colapsables"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/nav_link.tsx"
emits: []
has_state: false
variant: []
---

## Ejemplo

```tsx
import { FnNavLink } from '@fn_library'
import { IconHome, IconSettings } from '@tabler/icons-react'

<FnNavLink label="Home" icon={<IconHome size={16} />} active />
<FnNavLink label="Settings" icon={<IconSettings size={16} />} defaultOpened>
  <FnNavLink label="General" />
  <FnNavLink label="Seguridad" />
</FnNavLink>
```

## Notas

Wrapper sobre Mantine `NavLink`. Soporta anidamiento -- pasar `FnNavLink` como children crea un arbol colapsable. El `icon` se mapea a `leftSection` internamente. Ideal para uso dentro de `FnAppShell` navbar.
