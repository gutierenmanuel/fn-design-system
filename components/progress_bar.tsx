import { Progress, Box } from "@mantine/core"

export interface ProgressBarProps {
  value: number
  max?: number
  buffer?: number
  showValue?: boolean
  animated?: boolean
  indeterminate?: boolean
  label?: string
  size?: "sm" | "md" | "lg"
  color?: "primary" | "success" | "warning" | "destructive"
  className?: string
}

const colorMap: Record<NonNullable<ProgressBarProps["color"]>, string> = {
  primary: "blue",
  success: "green",
  warning: "yellow",
  destructive: "red",
}

const sizeMap: Record<NonNullable<ProgressBarProps["size"]>, number> = {
  sm: 4,
  md: 8,
  lg: 12,
}

export function ProgressBar({
  value,
  max = 100,
  buffer,
  showValue = false,
  animated = false,
  indeterminate = false,
  size = "md",
  color = "primary",
  label,
  className,
}: ProgressBarProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100))
  const bufferPercentage = buffer ? Math.min(100, Math.max(0, (buffer / max) * 100)) : undefined
  const mantineColor = colorMap[color]
  const mantineSize = sizeMap[size]

  if (bufferPercentage !== undefined) {
    return (
      <Box data-slot="progress-bar" pos="relative" className={className}>
        <Progress.Root size={mantineSize} aria-label={label}>
          <Progress.Section value={bufferPercentage} color={mantineColor} style={{ opacity: 0.3 }} />
        </Progress.Root>
        <Box pos="absolute" top={0} left={0} right={0}>
          <Progress.Root size={mantineSize} bg="transparent" aria-label={label}>
            <Progress.Section
              value={indeterminate ? 100 : percentage}
              color={mantineColor}
              animated={animated || indeterminate}
            >
              {showValue && !indeterminate && (
                <Progress.Label>{Math.round(percentage)}%</Progress.Label>
              )}
            </Progress.Section>
          </Progress.Root>
        </Box>
      </Box>
    )
  }

  return (
    <Progress.Root
      data-slot="progress-bar"
      size={mantineSize}
      aria-label={label}
      className={className}
    >
      <Progress.Section
        value={indeterminate ? 100 : percentage}
        color={mantineColor}
        animated={animated || indeterminate}
      >
        {showValue && !indeterminate && (
          <Progress.Label>{Math.round(percentage)}%</Progress.Label>
        )}
      </Progress.Section>
    </Progress.Root>
  )
}
