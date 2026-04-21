---
name: data_table
kind: component
lang: ts
domain: ui
version: "1.1.0"
purity: impure
signature: "DataTable(props: DataTableProps): JSX.Element"
description: "Tabla de datos con sticky header, overflow scroll, heatmap por columna, formato condicional (number/datetime/currency), hover rows y densidad configurable (compact/cozy/roomy). Auto-detecta columnas desde la primera fila si no se proveen."
tags: [table, data, heatmap, dashboard, component, ui, format, visualization]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: [react, "@mantine/core"]
output: "Componente DataTable que renderiza tabla con sticky header, heatmap condicional y formato automático de datos"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/data_table.tsx"
props:
  - name: data
    type: "Record<string, unknown>[]"
    required: true
    description: "Filas de datos. Cada objeto es una fila."
  - name: columns
    type: "ColumnDef[]"
    required: false
    description: "Definición de columnas con key, label, format y align. Si se omite, se auto-detectan desde la primera fila."
  - name: heatmapColumns
    type: "string[]"
    required: false
    description: "Keys de columnas numéricas que deben colorearse por intensidad (azul oscuro=bajo, azul claro=alto)."
  - name: maxHeight
    type: "number | string"
    required: false
    description: "Altura máxima antes de scroll. Default 500px."
  - name: loading
    type: "boolean"
    required: false
    description: "Estado de carga. Muestra spinner si data está vacía."
  - name: error
    type: "Error | null"
    required: false
    description: "Error a mostrar si la carga falló."
  - name: density
    type: "'compact' | 'cozy' | 'roomy'"
    required: false
    description: "Padding vertical y horizontal de filas. compact=4/xs, cozy=6/sm (default), roomy=10/md."
emits: []
has_state: false
framework: react
variant: [default, heatmap]
---

## Ejemplo

```tsx
// Tabla simple con auto-detección de columnas
<DataTable data={rows} />

// Con columnas definidas y heatmap
<DataTable
  data={metrics}
  columns={[
    { key: 'domain', label: 'Domain' },
    { key: 'count', label: 'Functions', format: ',' },
    { key: 'pure_pct', label: 'Pure %', format: '.1f' },
  ]}
  heatmapColumns={['count', 'pure_pct']}
/>

// Con formato moneda y fecha
<DataTable
  data={transactions}
  columns={[
    { key: 'date', label: 'Date', format: 'datetime' },
    { key: 'amount', label: 'Amount', format: '$,.2f', align: 'right' },
    { key: 'description', label: 'Description' },
  ]}
/>
```

## Formatos soportados (campo `format` en ColumnDef)

| format | Ejemplo input | Output |
|--------|--------------|--------|
| `','` | `1234567` | `1,234,567` |
| `',.2f'` | `1234.5` | `1,234.50` |
| `'$,.2f'` | `1234.5` | `$1,234.50` |
| `'.0f'` | `42.7` | `43` |
| `'datetime'` | `'2026-04-01T12:00:00Z'` | `4/1/2026, 12:00:00 PM` |

## Notas

Extraido y generalizado desde `apps/rapid_dashboards/frontend/src/components/widgets/TableWidget.tsx`. El heatmap usa `useMemo` para calcular min/max por columna solo cuando cambian `data` o `heatmapColumns`. La alineación de celdas numéricas es automática (derecha) cuando el valor es `typeof 'number'`; se puede sobreescribir con el campo `align` en ColumnDef.
