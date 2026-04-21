import * as React from 'react'
import { Stack, Group, Title, Text, Paper, SimpleGrid } from '@mantine/core'

interface MetricConfig {
  label: string
  value: string | number
  delta?: { value: number; isPositive: boolean }
  sparklineData?: number[]
}

interface ChartConfig {
  id: string
  title: string
  type: 'line' | 'bar' | 'area'
  span?: 1 | 2
  height?: number
  content: React.ReactNode
}

interface AnalyticsPageProps {
  title: string
  subtitle?: string
  dateRange?: React.ReactNode
  metrics: MetricConfig[]
  charts: ChartConfig[]
  actions?: React.ReactNode
  className?: string
}

export function analyticsPage({
  title,
  subtitle,
  dateRange,
  metrics,
  charts,
  actions,
}: AnalyticsPageProps): React.ReactElement {
  const metricCols = metrics.length <= 2 ? { base: 1, md: 2 } : metrics.length <= 3 ? { base: 1, md: 3 } : { base: 1, md: 2, lg: 4 }

  return (
    <Stack gap="lg">
      {/* Header */}
      <Group justify="space-between" pb="md" style={{ borderBottom: '1px solid var(--mantine-color-default-border)' }}>
        <Stack gap={4}>
          <Title order={2}>{title}</Title>
          {subtitle && <Text size="sm" c="dimmed">{subtitle}</Text>}
        </Stack>
        <Group gap="xs">
          {dateRange}
          {actions}
        </Group>
      </Group>

      {/* KPI Row */}
      <SimpleGrid cols={metricCols} spacing="md">
        {metrics.map((metric, i) => (
          <Paper key={i} p="md" withBorder shadow="xs">
            <Text size="sm" c="dimmed">{metric.label}</Text>
            <Group mt="xs" justify="space-between" align="flex-end" gap="md">
              <Stack gap={4}>
                <Text fz={30} fw={700} lh={1}>{metric.value}</Text>
                {metric.delta && (
                  <Text
                    size="sm"
                    fw={500}
                    c={metric.delta.value === 0 ? 'dimmed' : metric.delta.isPositive ? 'green' : 'red'}
                  >
                    {metric.delta.value > 0 ? '+' : ''}{metric.delta.value}%
                  </Text>
                )}
              </Stack>
            </Group>
          </Paper>
        ))}
      </SimpleGrid>

      {/* Charts Grid */}
      <SimpleGrid cols={{ base: 1, lg: 2 }} spacing="md">
        {charts.map((chart) => (
          <Paper
            key={chart.id}
            p="md"
            withBorder
            shadow="xs"
            radius="md"
            style={chart.span === 2 ? { gridColumn: 'span 2' } : undefined}
          >
            <Text size="sm" fw={500} c="dimmed" mb="sm">{chart.title}</Text>
            {chart.content}
          </Paper>
        ))}
      </SimpleGrid>
    </Stack>
  )
}

export type { AnalyticsPageProps, MetricConfig, ChartConfig }
