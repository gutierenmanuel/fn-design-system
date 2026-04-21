import * as React from 'react'
import { Paper, Box, Text } from '@mantine/core'

type CardVariant = 'default' | 'borderless' | 'ghost'

function Card({
  className,
  size = 'default',
  variant = 'default',
  children,
  ...props
}: React.ComponentProps<'div'> & { size?: 'default' | 'sm'; variant?: CardVariant }) {
  return (
    <Paper
      data-slot="card"
      data-size={size}
      data-variant={variant}
      withBorder={variant === 'default'}
      shadow={variant === 'default' ? 'xs' : undefined}
      radius="md"
      p={size === 'sm' ? 'sm' : 'md'}
      bg={variant === 'ghost' ? 'transparent' : undefined}
      className={className}
      {...props}
    >
      {children}
    </Paper>
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <Box
      data-slot="card-header"
      pb="xs"
      className={className}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <Text
      component="div"
      data-slot="card-title"
      fw={600}
      size="sm"
      className={className}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <Text
      component="div"
      data-slot="card-description"
      size="sm"
      c="dimmed"
      className={className}
      {...props}
    />
  )
}

function CardAction({ className, style, ...props }: React.ComponentProps<'div'>) {
  return (
    <Box
      data-slot="card-action"
      style={{ position: 'absolute', top: 0, right: 0, ...style }}
      className={className}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <Box
      data-slot="card-content"
      className={className}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <Box
      data-slot="card-footer"
      pt="sm"
      mt="auto"
      style={{ borderTop: '1px solid var(--mantine-color-default-border)' }}
      className={className}
      {...props}
    />
  )
}

export { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent }
