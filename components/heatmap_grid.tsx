import * as React from 'react'
import { Box } from '@mantine/core'

interface HeatmapColumn {
  key: string
  label?: string
}

interface HeatmapGridProps {
  /** Row data. Each row is an object that contains values under the column keys and the row label under `rowKey`. */
  rows: Record<string, unknown>[]
  /** Key in each row that holds the row label (e.g. 'day', 'cohort'). */
  rowKey: string
  /** Columns to visualize, in order. Each entry has the value key and an optional display label. */
  columns: HeatmapColumn[]
  /** Formatter for numeric values inside cells and tooltip. */
  valueFormatter?: (v: number) => string
  /** Formatter for row labels (left column). Defaults to String(row[rowKey]). */
  rowLabelFormatter?: (row: Record<string, unknown>) => string
  /** Tooltip text generator (native HTML title). */
  tooltip?: (row: Record<string, unknown>, column: HeatmapColumn, value: number) => string
  /** Render the numeric label inside the cell only if |value| ≥ threshold. Default: always render. */
  cellLabelThreshold?: number
  /** Cell size in px. Default 22. */
  cellSize?: number
  /** Render a column header label every N columns (keeps the grid compact for hourly grids). Default 1. */
  colLabelEvery?: number
  /** Min/Max percent of primary color applied via color-mix. Default [6, 84]. */
  intensityRange?: [number, number]
  /** Override the base color. Default is `var(--mantine-primary-color-filled)`. */
  baseColor?: string
  className?: string
}

function defaultValueFormatter(v: number): string {
  return Number.isInteger(v) ? String(v) : v.toFixed(2)
}

function HeatmapGrid({
  rows,
  rowKey,
  columns,
  valueFormatter = defaultValueFormatter,
  rowLabelFormatter,
  tooltip,
  cellLabelThreshold,
  cellSize = 22,
  colLabelEvery = 1,
  intensityRange = [6, 84],
  baseColor = 'var(--mantine-primary-color-filled)',
  className,
}: HeatmapGridProps) {
  const { min, max, mid } = React.useMemo(() => {
    const vals: number[] = []
    for (const row of rows) {
      for (const col of columns) {
        const n = Number(row[col.key])
        if (!isNaN(n)) vals.push(n)
      }
    }
    if (vals.length === 0) return { min: 0, max: 0, mid: 0 }
    const mn = Math.min(...vals)
    const mx = Math.max(...vals)
    return { min: mn, max: mx, mid: (mn + mx) / 2 }
  }, [rows, columns])

  const [lo, hi] = intensityRange

  function cellBg(v: number): string {
    if (max === min) return `color-mix(in oklab, ${baseColor} ${lo}%, transparent)`
    const t = (v - min) / (max - min)
    const pct = lo + t * (hi - lo)
    return `color-mix(in oklab, ${baseColor} ${pct.toFixed(0)}%, transparent)`
  }

  return (
    <Box style={{ overflow: 'auto' }} className={className}>
      <table style={{ borderCollapse: 'separate', borderSpacing: 2, width: '100%' }}>
        <thead>
          <tr>
            <th />
            {columns.map((col, i) => {
              if (colLabelEvery > 1 && i % colLabelEvery !== 0) return <th key={col.key} />
              const span = Math.min(colLabelEvery, columns.length - i)
              return (
                <th
                  key={col.key}
                  colSpan={span}
                  style={{
                    fontSize: 10,
                    color: 'var(--mantine-color-dimmed)',
                    fontWeight: 500,
                    textAlign: 'left',
                  }}
                >
                  {col.label ?? col.key}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIdx) => {
            const label = rowLabelFormatter ? rowLabelFormatter(row) : String(row[rowKey] ?? '')
            return (
              <tr key={String(row[rowKey] ?? rowIdx)}>
                <td
                  style={{
                    fontSize: 11,
                    color: 'var(--mantine-color-dimmed)',
                    paddingRight: 8,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {label}
                </td>
                {columns.map(col => {
                  const raw = Number(row[col.key])
                  const v = isNaN(raw) ? 0 : raw
                  const showLabel =
                    cellLabelThreshold == null ? true : Math.abs(v) >= cellLabelThreshold
                  const title = tooltip
                    ? tooltip(row, col, v)
                    : `${label} · ${col.label ?? col.key} — ${valueFormatter(v)}`
                  return (
                    <td
                      key={col.key}
                      title={title}
                      style={{
                        width: cellSize,
                        height: cellSize,
                        background: cellBg(v),
                        borderRadius: 3,
                        fontSize: 9,
                        textAlign: 'center',
                        color: v > mid ? 'white' : 'var(--mantine-color-dimmed)',
                      }}
                    >
                      {showLabel ? valueFormatter(v) : ''}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </Box>
  )
}

export { HeatmapGrid }
export type { HeatmapGridProps, HeatmapColumn }
