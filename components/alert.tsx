import * as React from 'react'
import { Alert as MantineAlert, Box, Text } from '@mantine/core'

type AlertVariant = 'default' | 'destructive' | 'success' | 'warning' | 'info'

const variantColorMap: Record<AlertVariant, string | undefined> = {
  default: undefined,
  destructive: 'red',
  success: 'green',
  warning: 'yellow',
  info: 'blue',
}

function Alert({
  className,
  variant = 'default',
  children,
  ...props
}: React.ComponentProps<'div'> & { variant?: AlertVariant }) {
  return (
    <MantineAlert
      data-slot="alert"
      color={variantColorMap[variant]}
      radius="md"
      variant="light"
      className={className}
      {...props}
    >
      {children}
    </MantineAlert>
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <Text
      component="div"
      data-slot="alert-title"
      fw={500}
      size="sm"
      className={className}
      {...props}
    />
  )
}

function AlertDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <Text
      component="div"
      data-slot="alert-description"
      size="sm"
      c="dimmed"
      className={className}
      {...props}
    />
  )
}

function AlertAction({ className, style, ...props }: React.ComponentProps<'div'>) {
  return (
    <Box
      data-slot="alert-action"
      style={{ position: 'absolute', top: 'var(--mantine-spacing-xs)', right: 'var(--mantine-spacing-xs)', ...style }}
      className={className}
      {...props}
    />
  )
}

const alertVariants = {} as const

export { Alert, AlertTitle, AlertDescription, AlertAction, alertVariants }
