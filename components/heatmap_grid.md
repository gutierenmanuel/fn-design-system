---
name: heatmap_grid
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "HeatmapGrid(props: HeatmapGridProps): JSX.Element"
description: "Matriz rows × columns con intensidad de color proporcional al valor. Genérico — casos típicos: day×hour, cohort retention, matriz de correlación, heatmap geográfico."
tags: [heatmap, matrix, dashboard, component, ui, chart, retention, cohort]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: ["@mantine/core", react]
output: "Componente HeatmapGrid que renderiza una tabla de celdas coloreadas por intensidad con labels formateados."
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/heatmap_grid.tsx"
props:
  - name: rows
    type: "Record<string, unknown>[]"
    required: true
    description: "Filas de datos. Cada objeto contiene el label de fila (bajo rowKey) y los valores (bajo las keys de columns)."
  - name: rowKey
    type: "string"
    required: true
    description: "Key en cada row donde está el label de la fila (ej. 'day', 'cohort')."
  - name: columns
    type: "HeatmapColumn[]"
    required: true
    description: "Columnas a visualizar, en orden. Cada una: { key, label? }."
  - name: valueFormatter
    type: "(v: number) => string"
    required: false
    description: "Formateador del valor numérico. Default: int o 2 decimales."
  - name: rowLabelFormatter
    type: "(row: Record<string, unknown>) => string"
    required: false
    description: "Formatear el label de fila. Default: String(row[rowKey])."
  - name: tooltip
    type: "(row, column, value) => string"
    required: false
    description: "Generador del tooltip (title HTML nativo)."
  - name: cellLabelThreshold
    type: "number"
    required: false
    description: "Mostrar el valor dentro de la celda solo si |v| ≥ threshold. Default: siempre mostrar."
  - name: cellSize
    type: "number"
    required: false
    description: "Tamaño de cada celda en px. Default 22."
  - name: colLabelEvery
    type: "number"
    required: false
    description: "Mostrar label de columna cada N columnas (grids densos). Default 1."
  - name: intensityRange
    type: "[number, number]"
    required: false
    description: "Min/max % del baseColor aplicado vía color-mix. Default [6, 84]."
  - name: baseColor
    type: "string"
    required: false
    description: "Color base. Default 'var(--mantine-primary-color-filled)'."
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
import { HeatmapGrid } from '@fn_library'

// CTR por día × hora (caso del export original)
const hours = Array.from({ length: 24 }, (_, i) => ({ key: 'h' + i, label: String(i).padStart(2, '0') }))
const rows = [
  { day: 'Mon', h0: 0.8, h1: 0.7, /* ... */ h23: 1.4 },
  { day: 'Tue', h0: 0.9, h1: 0.8, /* ... */ h23: 1.3 },
  // ...
]

<HeatmapGrid
  rows={rows}
  rowKey="day"
  columns={hours}
  colLabelEvery={2}
  valueFormatter={(v) => v.toFixed(2)}
  cellLabelThreshold={1.7}
  tooltip={(r, c, v) => `${r.day} ${c.label}:00 — CTR ${v}%`}
/>

// Cohort retention (semana 0-12)
const cohortCols = Array.from({ length: 13 }, (_, i) => ({ key: 'w' + i, label: 'W' + i }))

<HeatmapGrid
  rows={cohorts}
  rowKey="cohort"
  columns={cohortCols}
  valueFormatter={(v) => v.toFixed(0) + '%'}
  intensityRange={[10, 90]}
/>

// Matriz de correlación
<HeatmapGrid
  rows={correlationMatrix}
  rowKey="variable"
  columns={variables.map(v => ({ key: v, label: v }))}
  valueFormatter={(v) => v.toFixed(2)}
  cellSize={40}
  baseColor="var(--mantine-color-cyan-6)"
/>
```

## Notas

- El color de cada celda es `color-mix(in oklab, baseColor N%, transparent)` donde N interpola linealmente entre `intensityRange[0]` y `intensityRange[1]` según el valor normalizado en `[min, max]`.
- El color del texto en la celda cambia automáticamente a blanco si `v > mid` (mid-point del rango) para contraste.
- Para grids densos (ej. 24 horas × 7 días) usar `colLabelEvery={2}` o mayor para que los headers no se solapen.
- Extraído de un export de Claude Design (Ads Analytics Dashboard). El `Heatmap` original hardcodeaba `h0..h23`; aquí se generaliza aceptando cualquier array de columnas.
