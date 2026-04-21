---
name: dashboard_layout
kind: function
lang: ts
domain: ui
version: "1.0.0"
purity: pure
signature: "dashboardLayout(props: DashboardLayoutProps): ReactElement"
description: "Genera un grid responsive de dashboard a partir de un array de widgets con span configurable. 1-4 columnas con auto-responsive."
tags: [dashboard, layout, grid, factory, composition, ui]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: [react, "@mantine/core"]
params:
  - name: props
    desc: "Configuración de layout: número de columnas y array de widgets con id, título, contenido y span"
output: "Componente ReactElement que renderiza grid responsive de dashboard con ancho adaptable por widget"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/dashboard_layout.tsx"
source_repo: "https://gitea-dgg044oo04woo4ggcsws4gk0.organic-machine.com/Bl4cksmith/Frontend_Library"
source_license: "MIT"
source_file: ""
---

## Ejemplo

```tsx
dashboardLayout({
  columns: 4,
  widgets: [
    { id: 'revenue', title: 'Revenue', content: <KPICard label="Revenue" value="$12k" /> },
    { id: 'users', title: 'Users', content: <KPICard label="Users" value={1234} /> },
    { id: 'chart', title: 'Trends', span: 2, content: <LineChart data={data} xKey="month" yKey="value" /> },
    { id: 'table', span: 4, content: <DataTable columns={cols} data={rows} /> },
  ]
})
```

## Notas

Factory pura — dado el mismo input siempre genera el mismo JSX. Un agente puede construir dashboards completos pasando widgets como configuración declarativa.
