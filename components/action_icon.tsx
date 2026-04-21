import * as React from 'react'
import { ActionIcon, Tooltip } from '@mantine/core'
import type { MantineSize, MantineColor } from '@mantine/core'

interface FnActionIconProps {
  icon: React.ReactNode
  variant?: 'filled' | 'light' | 'outline' | 'transparent' | 'default' | 'subtle'
  size?: MantineSize | number
  color?: MantineColor
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  loading?: boolean
  disabled?: boolean
  tooltip?: string
}

function FnActionIcon({
  icon,
  variant = 'default',
  size = 'md',
  color,
  onClick,
  loading,
  disabled,
  tooltip,
}: FnActionIconProps) {
  const button = (
    <ActionIcon
      variant={variant}
      size={size}
      color={color}
      onClick={onClick}
      loading={loading}
      disabled={disabled}
    >
      {icon}
    </ActionIcon>
  )

  if (tooltip) {
    return <Tooltip label={tooltip}>{button}</Tooltip>
  }

  return button
}

export { FnActionIcon }
export type { FnActionIconProps }
