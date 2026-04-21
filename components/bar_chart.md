---
name: bar_chart
kind: component
lang: ts
domain: ui
version: "1.1.0"
purity: impure
signature: "BarChart(props: BarChartProps): JSX.Element"
description: "Gráfico de barras @mantine/charts con multi-series, orientación horizontal/vertical y tooltips."
tags: [chart, bar, visualization, mantine, component, ui]
uses_functions: [chart_container_ts_ui]
uses_types: [ChartSeries_ts_ui]
returns: []
returns_optional: false
error_type: ""
imports: ["@mantine/charts", "@mantine/core"]
output: "Componente JSX que renderiza un gráfico de barras vertical u horizontal con multi-series y tooltips"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/bar_chart.tsx"
props:
  - name: data
    type: "Record<string, unknown>[]"
    required: true
    description: "Array de datos"
  - name: xKey
    type: "string"
    required: true
    description: "Key del eje X/categoría"
  - name: horizontal
    type: "boolean"
    required: false
    description: "Orientación horizontal"
  - name: series
    type: "Series[]"
    required: false
    description: "Series de datos para multi-series"
emits: []
has_state: false
framework: react
variant: [vertical, horizontal]
source_repo: "https://gitea-dgg044oo04woo4ggcsws4gk0.organic-machine.com/Bl4cksmith/Frontend_Library"
source_license: "MIT"
source_file: "frontend/src/components/ui/charts/bar-chart.tsx"
---

## Ejemplo

```tsx
<BarChart data={data} xKey="category" yKey="sales" showLegend />
<BarChart data={data} xKey="name" series={series} horizontal />
```

## Notas

En modo `horizontal=true` se pasa `orientation="vertical"` a Mantine BarChart, que internamente intercambia los ejes.
