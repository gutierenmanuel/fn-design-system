import { PieChart as MantinePieChart, DonutChart } from '@mantine/charts'
import { Paper } from '@mantine/core'

const DEFAULT_COLORS = [
  '#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6',
  '#ec4899', '#06b6d4', '#f97316',
]

interface PieChartProps {
  data: Record<string, unknown>[]
  nameKey: string
  valueKey: string
  colors?: string[]
  donut?: boolean
  showLegend?: boolean
  showLabels?: boolean
  height?: number
  valueFormatter?: (value: number) => string
}

function PieChartComponent({
  data,
  nameKey,
  valueKey,
  colors = DEFAULT_COLORS,
  donut = false,
  showLegend: _showLegend = true,
  showLabels = true,
  height = 300,
  valueFormatter = (v) => v.toLocaleString(),
}: PieChartProps) {
  const chartData = data.map((row, i) => ({
    name: String(row[nameKey] ?? ''),
    value: Number(row[valueKey]) || 0,
    color: colors[i % colors.length] as string,
  }))

  const Chart = donut ? DonutChart : MantinePieChart

  return (
    <Paper p="md">
      <Chart
        h={height}
        data={chartData}
        withLabels={showLabels}
        withLabelsLine={showLabels}
        withTooltip
        tooltipDataSource="segment"
        valueFormatter={valueFormatter}
      />
      {/* Mantine PieChart/DonutChart does not have a built-in legend prop;
          legend is handled via withLabels. showLegend kept for API compat. */}
    </Paper>
  )
}

export const PieChart = PieChartComponent
export type { PieChartProps }
