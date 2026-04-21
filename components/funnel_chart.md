---
name: funnel_chart
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "FunnelChart(props: FunnelChartProps): JSX.Element"
description: "Visualiza un funnel de conversión con barras degradadas, valores formateados y tasa de conversión entre etapas como Badge semántico. Genérico — acepta cualquier array {stage,value}."
tags: [funnel, conversion, dashboard, component, ui, chart, acquisition, analytics]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: ["@mantine/core", react]
output: "Componente FunnelChart que renderiza un funnel vertical de conversión con porcentajes entre etapas."
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/funnel_chart.tsx"
props:
  - name: data
    type: "FunnelStage[]"
    required: true
    description: "Etapas del funnel. Cada etapa con { stage: string, value: number }."
  - name: valueFormatter
    type: "(value: number) => string"
    required: false
    description: "Formateador del valor absoluto. Default: compact (K/M/B)."
  - name: showConversion
    type: "boolean"
    required: false
    description: "Mostrar tasa de conversión entre etapas como Badge. Default true."
  - name: barHeight
    type: "number"
    required: false
    description: "Alto de cada barra en px. Default 28."
  - name: goodThreshold
    type: "number"
    required: false
    description: "Tasa de conversión (%) por encima de la cual el Badge es 'success'. Default 30."
  - name: warnThreshold
    type: "number"
    required: false
    description: "Tasa de conversión (%) por encima de la cual el Badge es 'info' (por debajo → 'warning'). Default 5."
  - name: barLabel
    type: "(stage: FunnelStage, pctOfMax: number) => string"
    required: false
    description: "Texto opcional dentro de cada barra."
  - name: barColor
    type: "string"
    required: false
    description: "Color o gradient CSS a aplicar a las barras. Default: gradient indigo→cyan."
emits: []
has_state: false
framework: react
variant: [default]
source_repo: "claude.ai/design"
source_license: ""
source_file: "sources/frontend_designs/Ads Analytics Dashboard _standalone_.html"
---

## Ejemplo

```tsx
import { FunnelChart } from '@fn_library'

const funnel = [
  { stage: 'Impressions', value: 12_400_000 },
  { stage: 'Clicks',      value: 214_807 },
  { stage: 'Sessions',    value: 186_904 },
  { stage: 'Add to cart', value: 24_113 },
  { stage: 'Checkout',    value: 9_642 },
  { stage: 'Conversions', value: 4_812 },
]

// Básico — conversión automática entre etapas
<FunnelChart data={funnel} />

// Moneda + altura mayor
<FunnelChart
  data={funnel}
  valueFormatter={(n) => '$' + n.toLocaleString()}
  barHeight={36}
/>

// Umbrales custom de conversión (ej. funnel de lead gen donde >10% ya es bueno)
<FunnelChart
  data={leadFunnel}
  goodThreshold={10}
  warnThreshold={2}
/>
```

## Notas

- La barra se dimensiona como porcentaje del valor máximo (primera etapa por defecto).
- La tasa de conversión se calcula contra la **etapa anterior**, no contra el máximo.
- Extraído de un export de Claude Design (Ads Analytics Dashboard). El `AdsFunnel` original estaba hardcodeado con gradient indigo→cyan; aquí se generaliza con `barColor` y `barLabel`.
- Los tres colores semánticos del Badge (`success`/`info`/`warning`) son configurables vía `goodThreshold` y `warnThreshold`.
