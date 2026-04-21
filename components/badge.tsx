import * as React from 'react'
import { Badge as MantineBadge } from '@mantine/core'

type BadgeVariant = 'default' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'link' | 'success' | 'warning' | 'error' | 'info'
type BadgeSize = 'default' | 'sm'

const variantMap: Record<BadgeVariant, { variant: string; color?: string }> = {
  default: { variant: 'filled' },
  secondary: { variant: 'light' },
  destructive: { variant: 'light', color: 'red' },
  outline: { variant: 'outline' },
  ghost: { variant: 'subtle' },
  link: { variant: 'transparent' },
  success: { variant: 'light', color: 'green' },
  warning: { variant: 'light', color: 'yellow' },
  error: { variant: 'light', color: 'red' },
  info: { variant: 'light', color: 'blue' },
}

/** Kept for backwards compatibility */
const badgeVariants = variantMap

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant
  size?: BadgeSize
}

function Badge({ className, variant = 'default', size = 'default', children, ...props }: BadgeProps) {
  const mv = variantMap[variant]

  return (
    <MantineBadge
      data-slot="badge"
      variant={mv.variant}
      color={mv.color}
      size={size === 'sm' ? 'xs' : 'sm'}
      radius="xl"
      className={className}
      {...props}
    >
      {children}
    </MantineBadge>
  )
}

export { Badge, badgeVariants }
export type { BadgeProps, BadgeVariant, BadgeSize }
