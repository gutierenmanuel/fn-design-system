---
name: sparkline
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "Sparkline(props: SparklineProps): JSX.Element"
description: "Mini gráfico inline SVG puro (sin Recharts) con variantes line, area y bar. Para KPI cards y tablas."
tags: [sparkline, chart, inline, svg, component, ui, visualization]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: [react]
output: "Componente Sparkline que renderiza mini gráfico SVG inline con variantes line, area y bar"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/sparkline.tsx"
props:
  - name: data
    type: "number[]"
    required: true
    description: "Array de valores numéricos"
  - name: variant
    type: "'line' | 'area' | 'bar'"
    required: false
    description: "Tipo de visualización"
  - name: color
    type: "string"
    required: false
    description: "Color del gráfico"
  - name: colors
    type: "string[]"
    required: false
    description: "Colores por barra para variant 'bar'. Cicla si es más corto que data."
  - name: width
    type: "number"
    required: false
    description: "Ancho en px (default 80)"
  - name: height
    type: "number"
    required: false
    description: "Alto en px (default 24)"
emits: []
has_state: false
framework: react
variant: [line, area, bar]
source_repo: "https://gitea-dgg044oo04woo4ggcsws4gk0.organic-machine.com/Bl4cksmith/Frontend_Library"
source_license: "MIT"
source_file: "frontend/src/components/ui/sparkline.tsx"
---

## Ejemplo

```tsx
<Sparkline data={[10, 25, 15, 40, 30, 55]} variant="area" color="#22c55e" />
<Sparkline data={[5, 3, 8, 1, 9]} variant="bar" width={60} height={20} />
```

## Notas

SVG puro — sin dependencia de Recharts. Ideal para inline en tablas y cards.
