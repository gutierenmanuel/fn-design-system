---
name: pie_chart
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "PieChart(props: PieChartProps): JSX.Element"
description: "Gráfico de torta/dona @mantine/charts con colores automáticos, labels y tooltip. Usa DonutChart para dona, PieChart para torta."
tags: [chart, pie, donut, visualization, mantine, component, ui, dashboard]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: ["@mantine/charts", "@mantine/core"]
output: "Componente PieChart que renderiza gráfico de torta o dona con labels y tooltip"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/pie_chart.tsx"
props:
  - name: data
    type: "Record<string, unknown>[]"
    required: true
    description: "Array de datos. Los valores de valueKey se convierten a number automáticamente."
  - name: nameKey
    type: "string"
    required: true
    description: "Key del campo que contiene el nombre/etiqueta de cada segmento"
  - name: valueKey
    type: "string"
    required: true
    description: "Key del campo numérico que determina el tamaño de cada segmento"
  - name: colors
    type: "string[]"
    required: false
    description: "Paleta de colores hex. Default: 8 colores accesibles. Se repite cíclicamente."
  - name: donut
    type: "boolean"
    required: false
    description: "Modo dona. innerRadius pasa a 50 por defecto cuando donut=true."
  - name: showLegend
    type: "boolean"
    required: false
    description: "Mostrar leyenda. Default true."
  - name: showLabels
    type: "boolean"
    required: false
    description: "Mostrar labels nombre+% en cada segmento. Default true."
  - name: height
    type: "number | string"
    required: false
    description: "Altura del contenedor. Default 300."
  - name: valueFormatter
    type: "(value: number) => string"
    required: false
    description: "Formateador de valores para el tooltip. Default toLocaleString."
emits: []
has_state: false
framework: react
variant: [pie, donut]
---

## Ejemplo

```tsx
// Pie simple
<PieChart
  data={[{ lang: 'Go', count: 42 }, { lang: 'Python', count: 28 }, { lang: 'Bash', count: 15 }]}
  nameKey="lang"
  valueKey="count"
/>

// Dona sin labels
<PieChart
  data={distributions}
  nameKey="domain"
  valueKey="functions"
  donut
  showLabels={false}
  valueFormatter={(v) => `${v} fns`}
/>
```

## Notas

Los valores de `valueKey` se convierten a `Number()` antes de pasarlos al chart. Cuando `donut=true` se usa `DonutChart` de Mantine, de lo contrario `PieChart`.
