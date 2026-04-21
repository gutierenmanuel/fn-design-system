import * as React from 'react'
import { Stack, Group, Text, Box } from '@mantine/core'
import { Badge } from './badge'

interface FunnelStage {
  stage: string
  value: number
}

interface FunnelChartProps {
  data: FunnelStage[]
  /** Format function for the absolute value shown next to each stage. */
  valueFormatter?: (value: number) => string
  /** Show the inter-stage conversion rate as a badge. Default true. */
  showConversion?: boolean
  /** Height of each bar. Default 28. */
  barHeight?: number
  /** Conversion rate (%) above which the badge is `success`. Default 30. */
  goodThreshold?: number
  /** Conversion rate (%) above which the badge is `info` (below → `warning`). Default 5. */
  warnThreshold?: number
  /** Label shown inside each bar. `(stage, pctOfMax) => string`. Default empty. */
  barLabel?: (stage: FunnelStage, pctOfMax: number) => string
  /** Override the default gradient. Pass a single color or CSS gradient string. */
  barColor?: string
  className?: string
}

function defaultFormatter(n: number): string {
  const abs = Math.abs(n)
  if (abs >= 1e9) return (n / 1e9).toFixed(1).replace(/\.0$/, '') + 'B'
  if (abs >= 1e6) return (n / 1e6).toFixed(1).replace(/\.0$/, '') + 'M'
  if (abs >= 1e3) return (n / 1e3).toFixed(1).replace(/\.0$/, '') + 'K'
  return String(Math.round(n))
}

const DEFAULT_BAR_GRADIENT =
  'linear-gradient(90deg, var(--mantine-primary-color-filled), color-mix(in oklab, var(--mantine-color-cyan-4) 70%, var(--mantine-primary-color-filled)))'

function FunnelChart({
  data,
  valueFormatter = defaultFormatter,
  showConversion = true,
  barHeight = 28,
  goodThreshold = 30,
  warnThreshold = 5,
  barLabel,
  barColor,
  className,
}: FunnelChartProps) {
  if (!data || data.length === 0) return null

  const max = Math.max(...data.map(d => d.value))

  return (
    <Stack gap="xs" className={className}>
      {data.map((s, i) => {
        const pct = max === 0 ? 0 : s.value / max
        const convRate = i > 0 ? (s.value / (data[i - 1]!.value || 1)) * 100 : 100
        const conversionVariant =
          convRate > goodThreshold ? 'success' : convRate > warnThreshold ? 'info' : 'warning'
        const label = barLabel?.(s, pct)

        return (
          <div key={s.stage}>
            <Group justify="space-between" mb={4}>
              <Text size="xs" c="dimmed">
                {s.stage}
              </Text>
              <Group gap={8}>
                <Text size="xs" fw={600}>
                  {valueFormatter(s.value)}
                </Text>
                {showConversion && i > 0 && (
                  <Badge size="sm" variant={conversionVariant}>
                    {convRate.toFixed(1)}%
                  </Badge>
                )}
              </Group>
            </Group>
            <Box
              style={{
                height: barHeight,
                width: `${pct * 100}%`,
                background: barColor ?? DEFAULT_BAR_GRADIENT,
                borderRadius: 4,
                display: 'flex',
                alignItems: 'center',
                paddingLeft: 10,
                fontSize: 11,
                fontWeight: 600,
                color: 'white',
                transition: 'width 400ms ease',
              }}
            >
              {label}
            </Box>
          </div>
        )
      })}
    </Stack>
  )
}

export { FunnelChart }
export type { FunnelChartProps, FunnelStage }
