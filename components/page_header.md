---
name: page_header
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "PageHeader(props: PageHeaderProps): JSX.Element"
description: "Cabecera de página con título, subtítulo, acciones, back button, tabs integrados, badge y modo sticky. Incluye SimplePageHeader."
tags: [header, page, layout, navigation, component, ui]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: [react, "@mantine/core", "@tabler/icons-react"]
output: "Componente PageHeader que renderiza cabecera de página con título, acciones, tabs integrados y modo sticky"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/page_header.tsx"
props:
  - name: title
    type: "string"
    required: true
    description: "Título principal"
  - name: subtitle
    type: "string"
    required: false
    description: "Subtítulo"
  - name: actions
    type: "ReactNode"
    required: false
    description: "Botones de acción"
  - name: tabs
    type: "TabItem[]"
    required: false
    description: "Tabs de navegación integrados"
  - name: sticky
    type: "boolean"
    required: false
    description: "Header fijo al scroll"
emits: [onBack, onTabChange]
has_state: false
framework: react
variant: [full, simple]
source_repo: "https://gitea-dgg044oo04woo4ggcsws4gk0.organic-machine.com/Bl4cksmith/Frontend_Library"
source_license: "MIT"
source_file: "frontend/src/components/ui/page-header.tsx"
---

## Ejemplo

```tsx
<PageHeader
  title="Dashboard"
  subtitle="Vista general"
  actions={<Button>Export</Button>}
  tabs={[{ label: "Overview", value: "overview" }, { label: "Analytics", value: "analytics" }]}
  activeTab="overview"
  onTabChange={setTab}
/>
```
