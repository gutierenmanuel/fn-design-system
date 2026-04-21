import * as React from 'react'
import { Sparkline as MantineSparkline } from '@mantine/charts'

type SparklineVariant = 'line' | 'area' | 'bar'

interface SparklineProps {
  data: number[]
  variant?: SparklineVariant
  color?: string
  colors?: string[]
  width?: number
  height?: number
  strokeWidth?: number
  showLastPoint?: boolean
  className?: string
}

const Sparkline = React.forwardRef<HTMLDivElement, SparklineProps>(
  ({ data, variant = 'line', color, colors, width = 80, height = 24, strokeWidth = 1.5, className, ...props }, ref) => {
    if (data.length === 0) {
      return <div ref={ref} style={{ width, height }} className={className} />
    }

    // Bar variant: use custom SVG (Mantine Sparkline only supports area)
    if (variant === 'bar') {
      const min = Math.min(...data, 0)
      const max = Math.max(...data)
      const range = max - min || 1
      const p = 2
      const eh = height - p * 2
      const bw = (width - p * 2) / data.length - 1
      const barColor = color ?? 'currentColor'
      return (
        <div ref={ref} className={className} {...props}>
          <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
            {data.map((value, index) => {
              const bh = ((value - min) / range) * eh
              const x = p + index * ((width - p * 2) / data.length) + 0.5
              const y = p + eh - bh
              const fill = colors ? colors[index % colors.length] : barColor
              return <rect key={index} x={x} y={y} width={Math.max(bw, 1)} height={Math.max(bh, 1)} fill={fill} rx={1} opacity={0.85} />
            })}
          </svg>
        </div>
      )
    }

    // Line/area: use Mantine Sparkline
    return (
      <div ref={ref} className={className} {...props}>
        <MantineSparkline
          data={data}
          color={color ?? 'blue'}
          w={width}
          h={height}
          strokeWidth={strokeWidth}
          curveType="natural"
          withGradient={variant === 'area'}
          fillOpacity={variant === 'area' ? 0.3 : 0}
        />
      </div>
    )
  }
)
Sparkline.displayName = 'Sparkline'

export { Sparkline, type SparklineProps, type SparklineVariant }
