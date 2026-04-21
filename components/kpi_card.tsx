import * as React from 'react'
import { Paper, Text, Group, Stack, Box } from '@mantine/core'

type KPICardSize = 'sm' | 'default' | 'lg'

interface Delta {
  value: number
  isPositive: boolean
  label?: string
  suffix?: string
}

interface KPICardProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string
  value: string | number
  unit?: string
  delta?: Delta
  icon?: React.ReactNode
  action?: React.ReactNode
  chart?: React.ReactNode
  subtitle?: string
  size?: KPICardSize
}

const valueSizes: Record<KPICardSize, string> = {
  sm: '1.5rem',
  default: '1.875rem',
  lg: '2.25rem',
}

const unitSizes: Record<KPICardSize, string> = {
  sm: 'md',
  default: 'lg',
  lg: 'xl',
}

const labelSizes: Record<KPICardSize, string> = {
  sm: 'xs',
  default: 'sm',
  lg: 'md',
}

const KPICard = React.forwardRef<HTMLDivElement, KPICardProps>(
  ({ label, value, unit, delta, icon, action, chart, subtitle, size = 'default', className, ...props }, ref) => {
    const deltaColor = delta
      ? delta.value === 0 ? 'dimmed'
        : delta.isPositive ? 'teal'
        : 'red'
      : undefined

    return (
      <Paper ref={ref} withBorder shadow="xs" radius="md" p="md" className={className} {...props}>
        <Group justify="space-between" align="flex-start">
          <Group gap="xs" align="center">
            {icon && <Box c="dimmed">{icon}</Box>}
            <Stack gap={2}>
              <Text size={labelSizes[size]} c="dimmed">{label}</Text>
              {subtitle && <Text size="xs" c="dimmed" opacity={0.8}>{subtitle}</Text>}
            </Stack>
          </Group>
          {action && <Box c="dimmed">{action}</Box>}
        </Group>

        <Group justify="space-between" align="flex-end" mt="md" gap="lg">
          <Stack gap={4}>
            <Group gap={4} align="baseline">
              <Text fw={700} style={{ fontSize: valueSizes[size], lineHeight: 1, letterSpacing: '-0.025em' }}>
                {value}
              </Text>
              {unit && <Text size={unitSizes[size]} c="dimmed" fw={500}>{unit}</Text>}
            </Group>
            {delta && (
              <Group gap={4} align="center">
                {delta.label && <Text size="xs" c="dimmed">{delta.label}</Text>}
                <Text size="xs" fw={500} c={deltaColor}>
                  {delta.isPositive ? '\u25B2' : '\u25BC'} {delta.value > 0 ? '+' : ''}{delta.value}{delta.label ? '' : '%'}
                </Text>
                {delta.suffix && <Text size="xs" c="dimmed">{delta.suffix}</Text>}
              </Group>
            )}
          </Stack>
          {chart && <Box style={{ flexShrink: 0 }}>{chart}</Box>}
        </Group>
      </Paper>
    )
  }
)
KPICard.displayName = 'KPICard'

export { KPICard }
export type { KPICardProps, Delta, KPICardSize }
