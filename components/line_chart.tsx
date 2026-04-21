import { LineChart as MantineLineChart } from '@mantine/charts'
import { Paper } from '@mantine/core'
import { type Series, getSeriesColor } from './chart_container'

type CurveType = 'linear' | 'monotone' | 'step' | 'stepBefore' | 'stepAfter'

interface LineChartProps {
  data: Record<string, unknown>[]
  xKey: string
  yKey?: string
  series?: Series[]
  curveType?: CurveType
  showGrid?: boolean
  showLegend?: boolean
  showDots?: boolean
  height?: number
  xAxisFormatter?: (value: unknown) => string
  yAxisFormatter?: (value: unknown) => string
  valueFormatter?: (value: number) => string
  referenceLines?: Array<{ y: number; label?: string; color?: string }>
}

function LineChartComponent({
  data, xKey, yKey, series, curveType = 'monotone', showGrid = true, showLegend = false,
  showDots = true, height = 300, xAxisFormatter, yAxisFormatter,
  valueFormatter = (v) => v.toLocaleString(), referenceLines = [],
}: LineChartProps) {
  const chartSeries = series
    ? series.map((s, i) => ({ name: s.key, label: s.name, color: getSeriesColor(i, s.color) }))
    : yKey ? [{ name: yKey, label: yKey, color: getSeriesColor(0) }] : []

  const refLines = referenceLines.map((ref) => ({
    y: ref.y,
    label: ref.label || '',
    color: ref.color || 'gray.6',
  }))

  return (
    <Paper p="md">
      <MantineLineChart
        h={height}
        data={data}
        dataKey={xKey}
        series={chartSeries}
        curveType={curveType}
        gridAxis={showGrid ? 'xy' : 'none'}
        withLegend={showLegend}
        withTooltip
        withDots={showDots}
        valueFormatter={valueFormatter}
        referenceLines={refLines}
        xAxisProps={xAxisFormatter ? { tickFormatter: xAxisFormatter } : undefined}
        yAxisProps={yAxisFormatter ? { tickFormatter: yAxisFormatter } : undefined}
      />
    </Paper>
  )
}

export const LineChart = LineChartComponent
export type { LineChartProps, CurveType }
