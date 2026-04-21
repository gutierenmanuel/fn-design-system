import * as React from 'react'
import { Table, Text, Center, Loader } from '@mantine/core'

interface ColumnDef {
  key: string
  label: string
  /** Format string: ',.2f' | '$,.2f' | 'datetime' | ',' */
  format?: string
  /** Alignment override. Numbers default to right, strings to left. */
  align?: 'left' | 'right' | 'center'
}

interface DataTableProps {
  data: Record<string, unknown>[]
  columns?: ColumnDef[]
  /** Column keys that should be colored by value intensity (heatmap). */
  heatmapColumns?: string[]
  maxHeight?: number | string
  loading?: boolean
  error?: Error | null
}

function formatCell(value: unknown, format?: string): string {
  if (value == null) return '—'
  if (!format) return String(value)

  if (format === 'datetime' && !isNaN(Date.parse(String(value)))) {
    return new Date(String(value)).toLocaleString()
  }

  const num = Number(value)
  if (!isNaN(num)) {
    if (format.includes('f')) {
      const match = format.match(/\.(\d+)f/)
      const d = match ? parseInt(match[1]!) : 0
      let str = num.toFixed(d)
      if (format.includes(',')) {
        str = Number(str).toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d })
      }
      if (format.startsWith('$')) str = '$' + str
      return str
    }
    if (format === ',') return num.toLocaleString()
  }
  return String(value)
}

function DataTableComponent({
  data,
  columns,
  heatmapColumns = [],
  maxHeight = 500,
  loading = false,
  error = null,
}: DataTableProps) {
  // Auto-detect columns from first row if not provided
  const effectiveColumns: ColumnDef[] = (columns && columns.length > 0)
    ? columns
    : (data && data.length > 0)
      ? Object.keys(data[0]!).map(k => ({ key: k, label: k }))
      : []

  // Compute heatmap ranges per column
  const heatmapRanges = React.useMemo(() => {
    const ranges: Record<string, { min: number; max: number }> = {}
    if (heatmapColumns.length > 0 && data && data.length > 0) {
      for (const key of heatmapColumns) {
        const values = data.map(r => Number(r[key])).filter(n => !isNaN(n))
        if (values.length > 0) {
          ranges[key] = { min: Math.min(...values), max: Math.max(...values) }
        }
      }
    }
    return ranges
  }, [data, heatmapColumns])

  function heatmapStyle(key: string, value: unknown): React.CSSProperties | undefined {
    const range = heatmapRanges[key]
    if (!range || range.max === range.min) return undefined
    const num = Number(value)
    if (isNaN(num)) return undefined
    const t = (num - range.min) / (range.max - range.min)
    const alpha = 0.1 + t * 0.55
    return { backgroundColor: `rgba(59, 130, 246, ${alpha})` }
  }

  if (loading && (!data || data.length === 0)) {
    return (
      <Center h={200}>
        <Loader size="sm" />
      </Center>
    )
  }

  if (error) {
    return (
      <Center h={200}>
        <Text size="sm" c="red">{error.message}</Text>
      </Center>
    )
  }

  return (
    <Table.ScrollContainer minWidth={0} mah={maxHeight} type="scrollarea">
      <Table striped={false} highlightOnHover withTableBorder={false} withColumnBorders={false}>
        <Table.Thead style={{ position: 'sticky', top: 0, zIndex: 10, backgroundColor: 'var(--mantine-color-body)' }}>
          <Table.Tr>
            {effectiveColumns.map(col => (
              <Table.Th
                key={col.key}
                style={{ whiteSpace: 'nowrap' }}
                fz="xs"
                fw={500}
                c="dimmed"
                tt="uppercase"
                py={6}
                px="sm"
              >
                {col.label}
              </Table.Th>
            ))}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {(data ?? []).map((row, i) => (
            <Table.Tr key={i}>
              {effectiveColumns.map(col => {
                const align = col.align ?? (typeof row[col.key] === 'number' ? 'right' : 'left')
                return (
                  <Table.Td
                    key={col.key}
                    style={{ textAlign: align, fontFamily: 'var(--mantine-font-family-monospace)', ...heatmapStyle(col.key, row[col.key]) }}
                    fz="xs"
                    py={6}
                    px="sm"
                  >
                    {formatCell(row[col.key], col.format)}
                  </Table.Td>
                )
              })}
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
      {(!data || data.length === 0) && (
        <Center py="xl">
          <Text size="sm" c="dimmed">No data</Text>
        </Center>
      )}
    </Table.ScrollContainer>
  )
}

export const DataTable = DataTableComponent
export type { DataTableProps, ColumnDef }
