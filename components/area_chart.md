---
name: area_chart
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "AreaChart(props: AreaChartProps): JSX.Element"
description: "Gráfico de área @mantine/charts con gradientes automáticos, multi-series, stacking y tooltips."
tags: [chart, area, visualization, mantine, gradient, component, ui]
uses_functions: [chart_container_ts_ui]
uses_types: [ChartSeries_ts_ui]
returns: []
returns_optional: false
error_type: ""
imports: ["@mantine/charts", "@mantine/core"]
output: "Componente JSX que renderiza un gráfico de área con gradientes, multi-series y tooltips"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/area_chart.tsx"
props:
  - name: data
    type: "Record<string, unknown>[]"
    required: true
    description: "Array de datos"
  - name: xKey
    type: "string"
    required: true
    description: "Key del eje X"
  - name: stacked
    type: "boolean"
    required: false
    description: "Apilar áreas"
  - name: gradient
    type: "GradientConfig | boolean"
    required: false
    description: "Gradiente (true por defecto)"
  - name: series
    type: "Series[]"
    required: false
    description: "Series de datos para multi-series"
emits: []
has_state: false
framework: react
variant: [default, stacked]
source_repo: "https://gitea-dgg044oo04woo4ggcsws4gk0.organic-machine.com/Bl4cksmith/Frontend_Library"
source_license: "MIT"
source_file: "frontend/src/components/ui/charts/area-chart.tsx"
---

## Ejemplo

```tsx
<AreaChart data={data} xKey="date" yKey="revenue" gradient />
<AreaChart data={data} xKey="date" series={series} stacked showLegend />
```
