---
name: line_chart
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "LineChart(props: LineChartProps): JSX.Element"
description: "Gráfico de líneas @mantine/charts con multi-series, 5 tipos de curva, líneas de referencia y tooltips."
tags: [chart, line, visualization, mantine, component, ui]
uses_functions: [chart_container_ts_ui]
uses_types: [ChartSeries_ts_ui]
returns: []
returns_optional: false
error_type: ""
imports: ["@mantine/charts", "@mantine/core"]
output: "Componente LineChart que renderiza gráfico de líneas multi-series con curvas customizables y líneas de referencia"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/line_chart.tsx"
props:
  - name: data
    type: "Record<string, unknown>[]"
    required: true
    description: "Array de datos"
  - name: xKey
    type: "string"
    required: true
    description: "Key del eje X"
  - name: series
    type: "Series[]"
    required: false
    description: "Series de datos"
  - name: curveType
    type: "'linear' | 'monotone' | 'step' | 'stepBefore' | 'stepAfter'"
    required: false
    description: "Tipo de curva (default monotone)"
  - name: referenceLines
    type: "Array<{ y: number; label?: string; color?: string }>"
    required: false
    description: "Líneas de referencia horizontales"
emits: []
has_state: false
framework: react
variant: [default]
source_repo: "https://gitea-dgg044oo04woo4ggcsws4gk0.organic-machine.com/Bl4cksmith/Frontend_Library"
source_license: "MIT"
source_file: "frontend/src/components/ui/charts/line-chart.tsx"
---

## Ejemplo

```tsx
<LineChart
  data={salesData}
  xKey="month"
  series={[
    { key: "revenue", name: "Revenue", color: "#3b82f6" },
    { key: "cost", name: "Cost", color: "#ef4444" },
  ]}
  zoomable
  showLegend
/>
```
