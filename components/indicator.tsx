import * as React from 'react'
import { Indicator } from '@mantine/core'
import type { MantineColor } from '@mantine/core'

interface FnIndicatorProps {
  children: React.ReactNode
  color?: MantineColor
  size?: number
  position?: 'top-start' | 'top-center' | 'top-end' | 'middle-start' | 'middle-center' | 'middle-end' | 'bottom-start' | 'bottom-center' | 'bottom-end'
  processing?: boolean
  disabled?: boolean
  label?: React.ReactNode
}

function FnIndicator({
  children,
  color = 'red',
  size = 10,
  position = 'top-end',
  processing = false,
  disabled = false,
  label,
}: FnIndicatorProps) {
  return (
    <Indicator
      color={color}
      size={size}
      position={position}
      processing={processing}
      disabled={disabled}
      label={label}
    >
      {children}
    </Indicator>
  )
}

export { FnIndicator }
export type { FnIndicatorProps }
