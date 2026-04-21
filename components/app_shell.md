---
name: app_shell
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "FnAppShell(props: FnAppShellProps): JSX.Element"
description: "Layout shell con header, navbar colapsable y area principal. Wrapper sobre Mantine AppShell."
tags: [mantine, layout, shell, navigation, component, ui]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: ["@mantine/core"]
framework: react
props:
  - name: header
    type: "ReactNode"
    required: false
    description: "Contenido del header superior"
  - name: navbar
    type: "ReactNode"
    required: false
    description: "Contenido del sidebar de navegacion"
  - name: navbarWidth
    type: "number"
    required: false
    description: "Ancho del navbar en px, default 250"
  - name: navbarCollapsed
    type: "boolean"
    required: false
    description: "Si el navbar esta colapsado"
  - name: children
    type: "ReactNode"
    required: true
    description: "Contenido principal del area main"
output: "Layout de aplicacion con header fijo, sidebar colapsable y area de contenido principal"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/app_shell.tsx"
emits: []
has_state: false
variant: []
---

## Ejemplo

```tsx
import { FnAppShell } from '@fn_library'

<FnAppShell
  header={<Group px="md">Logo</Group>}
  navbar={<NavLinks />}
  navbarCollapsed={collapsed}
>
  <MainContent />
</FnAppShell>
```

## Notas

Wrapper sobre Mantine `AppShell`. El header tiene altura fija de 60px. El navbar colapsa tanto en mobile como en desktop cuando `navbarCollapsed` es true. El breakpoint de responsive es `sm`.
