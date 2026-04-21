import { BarChart as MantineBarChart } from '@mantine/charts'
import { Paper } from '@mantine/core'
import { type Series, getSeriesColor } from './chart_container'

interface BarChartProps {
  data: Record<string, unknown>[]
  xKey: string
  yKey?: string
  series?: Series[]
  horizontal?: boolean
  showGrid?: boolean
  showLegend?: boolean
  height?: number
  xAxisFormatter?: (value: unknown) => string
  yAxisFormatter?: (value: unknown) => string
  valueFormatter?: (value: number) => string
}

function BarChartComponent({
  data, xKey, yKey, series, horizontal = false, showGrid = true, showLegend = false,
  height = 300, xAxisFormatter, yAxisFormatter, valueFormatter = (v) => v.toLocaleString(),
}: BarChartProps) {
  const chartSeries = series
    ? series.map((s, i) => ({ name: s.key, label: s.name, color: getSeriesColor(i, s.color) }))
    : yKey ? [{ name: yKey, label: yKey, color: getSeriesColor(0) }] : []

  return (
    <Paper p="md">
      <MantineBarChart
        h={height}
        data={data}
        dataKey={xKey}
        series={chartSeries}
        orientation={horizontal ? 'vertical' : 'horizontal'}
        gridAxis={showGrid ? 'xy' : 'none'}
        withLegend={showLegend}
        withTooltip
        valueFormatter={valueFormatter}
        xAxisProps={xAxisFormatter ? { tickFormatter: xAxisFormatter } : undefined}
        yAxisProps={yAxisFormatter ? { tickFormatter: yAxisFormatter } : undefined}
      />
    </Paper>
  )
}

export const BarChart = BarChartComponent
export type { BarChartProps }
