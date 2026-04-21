---
name: chart_container
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "ChartContainer(props: { children: ReactNode; height?: number | string }): JSX.Element"
description: "Thin wrapper Paper y utilidades de colores/series para los charts @mantine/charts."
tags: [chart, container, mantine, base, visualization, component, ui]
uses_functions: []
uses_types: [ChartSeries_ts_ui]
returns: []
returns_optional: false
error_type: ""
imports: ["@mantine/core"]
output: "Componente ChartContainer Paper wrapper y utilidades getSeriesColor/Series para charts Mantine"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/chart_container.tsx"
props:
  - name: height
    type: "number | string"
    required: false
    description: "Altura del chart (default 300)"
  - name: className
    type: "string"
    required: false
    description: "Clases CSS adicionales"
emits: []
has_state: false
framework: react
variant: [default]
source_repo: "https://gitea-dgg044oo04woo4ggcsws4gk0.organic-machine.com/Bl4cksmith/Frontend_Library"
source_license: "MIT"
source_file: "frontend/src/components/ui/charts/chart-base.tsx"
---

## Ejemplo

```tsx
import { ChartContainer, getSeriesColor, type Series } from './chart_container'

<ChartContainer height={400}>
  <MantineLineChart ... />
</ChartContainer>
```

## Notas

Exporta: ChartContainer, defaultColors, getSeriesColor, Series. Wrapper fino sobre Mantine Paper para layout uniforme de charts.
