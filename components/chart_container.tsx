import { Paper } from '@mantine/core'

export const defaultColors = ['#3b82f6', '#22c55e', '#f59e0b', '#8b5cf6', '#ec4899']

export interface Series {
  key: string
  name: string
  color?: string
}

export function getSeriesColor(index: number, color?: string): string {
  return color || defaultColors[index % defaultColors.length]!
}

interface ChartContainerProps {
  children: React.ReactNode
  height?: number | string
}

export function ChartContainer({ children, height = 300 }: ChartContainerProps) {
  return (
    <Paper p="md" style={{ height, minWidth: 100, minHeight: typeof height === 'number' ? Math.min(height, 100) : 100 }}>
      {children}
    </Paper>
  )
}

/** @deprecated Mantine charts handle tooltips internally. Kept for index.ts compat. */
export function ChartTooltipContent() { return null }
/** @deprecated Mantine charts handle tooltips internally. Kept for index.ts compat. */
export function ChartTooltip() { return null }
/** @deprecated Mantine charts handle legends internally. Kept for index.ts compat. */
export function ChartLegend() { return null }
