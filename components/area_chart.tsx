import { AreaChart as MantineAreaChart } from '@mantine/charts'
import { Paper } from '@mantine/core'
import { type Series, getSeriesColor } from './chart_container'

interface AreaChartProps {
  data: Record<string, unknown>[]
  xKey: string
  yKey?: string
  series?: Series[]
  stacked?: boolean
  gradient?: boolean
  showGrid?: boolean
  showLegend?: boolean
  height?: number
  xAxisFormatter?: (value: unknown) => string
  yAxisFormatter?: (value: unknown) => string
  valueFormatter?: (value: number) => string
}

function AreaChartComponent({
  data, xKey, yKey, series, stacked = false, gradient = true, showGrid = true,
  showLegend = false, height = 300, xAxisFormatter, yAxisFormatter,
  valueFormatter = (v) => v.toLocaleString(),
}: AreaChartProps) {
  const chartSeries = series
    ? series.map((s, i) => ({ name: s.key, label: s.name, color: getSeriesColor(i, s.color) }))
    : yKey ? [{ name: yKey, label: yKey, color: getSeriesColor(0) }] : []

  return (
    <Paper p="md">
      <MantineAreaChart
        h={height}
        data={data}
        dataKey={xKey}
        series={chartSeries}
        type={stacked ? 'stacked' : 'default'}
        curveType="monotone"
        withGradient={gradient}
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

/** @deprecated Gradient is handled by Mantine's withGradient prop */
type GradientConfig = { from: string; to: string }

export const AreaChart = AreaChartComponent
export type { AreaChartProps, GradientConfig }
