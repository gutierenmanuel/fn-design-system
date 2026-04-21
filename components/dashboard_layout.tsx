import * as React from 'react'
import { SimpleGrid, Paper, Text } from '@mantine/core'

interface DashboardWidget {
  id: string
  title?: string
  span?: 1 | 2 | 3 | 4
  rowSpan?: 1 | 2
  content: React.ReactNode
}

interface DashboardLayoutProps {
  widgets: DashboardWidget[]
  columns?: 1 | 2 | 3 | 4
  gap?: 'sm' | 'md' | 'lg'
  className?: string
}

const gapMap = { sm: 'xs', md: 'md', lg: 'lg' } as const

export function dashboardLayout({
  widgets,
  columns = 4,
  gap = 'md',
}: DashboardLayoutProps): React.ReactElement {
  return (
    <SimpleGrid
      cols={{ base: 1, md: Math.min(columns, 2), lg: columns }}
      spacing={gapMap[gap]}
    >
      {widgets.map((widget) => (
        <Paper
          key={widget.id}
          p="md"
          withBorder
          shadow="xs"
          radius="md"
          style={{
            gridColumn: widget.span && widget.span > 1 ? `span ${widget.span}` : undefined,
            gridRow: widget.rowSpan === 2 ? 'span 2' : undefined,
          }}
        >
          {widget.title && (
            <Text size="sm" fw={500} c="dimmed" mb="sm">{widget.title}</Text>
          )}
          {widget.content}
        </Paper>
      ))}
    </SimpleGrid>
  )
}

export type { DashboardWidget, DashboardLayoutProps }
