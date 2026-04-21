import * as React from 'react'
import { Button as MantineButton } from '@mantine/core'

type ButtonVariant = 'default' | 'outline' | 'secondary' | 'ghost' | 'destructive' | 'link'
type ButtonSize = 'default' | 'xs' | 'sm' | 'lg' | 'icon' | 'icon-xs' | 'icon-sm' | 'icon-lg'

const variantMap: Record<ButtonVariant, { variant: string; color?: string }> = {
  default: { variant: 'filled' },
  outline: { variant: 'outline' },
  secondary: { variant: 'light' },
  ghost: { variant: 'subtle' },
  destructive: { variant: 'filled', color: 'red' },
  link: { variant: 'transparent' },
}

const sizeMap: Record<ButtonSize, { size: string; style?: React.CSSProperties }> = {
  default: { size: 'sm' },
  xs: { size: 'xs' },
  sm: { size: 'xs' },
  lg: { size: 'md' },
  icon: { size: 'sm', style: { width: 32, height: 32, padding: 0 } },
  'icon-xs': { size: 'xs', style: { width: 24, height: 24, padding: 0 } },
  'icon-sm': { size: 'xs', style: { width: 28, height: 28, padding: 0 } },
  'icon-lg': { size: 'md', style: { width: 36, height: 36, padding: 0 } },
}

/** Kept for backwards compatibility — maps variant names to Mantine equivalents */
const buttonVariants = variantMap

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: ButtonVariant
  size?: ButtonSize
  children?: React.ReactNode
}

function Button({
  className,
  variant = 'default',
  size = 'default',
  style,
  children,
  ...props
}: ButtonProps) {
  const mv = variantMap[variant]
  const ms = sizeMap[size]

  return (
    <MantineButton
      data-slot="button"
      variant={mv.variant}
      color={mv.color}
      size={ms.size}
      radius="md"
      className={className}
      style={{ ...ms.style, ...style }}
      {...props}
    >
      {children}
    </MantineButton>
  )
}

export { Button, buttonVariants }
export type { ButtonProps, ButtonVariant, ButtonSize }
