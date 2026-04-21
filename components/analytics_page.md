---
name: analytics_page
kind: function
lang: ts
domain: ui
version: "1.0.0"
purity: pure
signature: "analyticsPage(props: AnalyticsPageProps): ReactElement"
description: "Genera un dashboard de analytics completo con header, fila de KPIs con deltas y grid de charts configurables."
tags: [analytics, dashboard, kpi, charts, factory, composition, ui]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: [react, "@mantine/core"]
params:
  - name: props
    desc: "Configuración del dashboard: título, métricas con deltas, y lista de charts con span"
output: "Componente ReactElement que renderiza un dashboard de analytics completo con header, KPIs y grid de charts"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/analytics_page.tsx"
source_repo: "https://gitea-dgg044oo04woo4ggcsws4gk0.organic-machine.com/Bl4cksmith/Frontend_Library"
source_license: "MIT"
source_file: ""
---

## Ejemplo

```tsx
analyticsPage({
  title: 'Sales Analytics',
  metrics: [
    { label: 'Revenue', value: '$124,500', delta: { value: 12.5, isPositive: true } },
    { label: 'Orders', value: '1,234', delta: { value: -3.2, isPositive: false } },
    { label: 'Avg Order', value: '$101', delta: { value: 0, isPositive: true } },
    { label: 'Customers', value: '892' },
  ],
  charts: [
    { id: 'revenue', title: 'Revenue Over Time', type: 'area', span: 2, content: <AreaChart data={revenueData} xKey="month" yKey="revenue" /> },
    { id: 'orders', title: 'Orders by Category', type: 'bar', content: <BarChart data={orderData} xKey="category" yKey="count" /> },
    { id: 'trends', title: 'Customer Trends', type: 'line', content: <LineChart data={trendData} xKey="week" yKey="customers" /> },
  ],
})
```

## Notas

Layout inteligente: los KPIs se ajustan automáticamente a 2/3/4 columnas según cantidad. Los charts soportan span para ancho completo.
