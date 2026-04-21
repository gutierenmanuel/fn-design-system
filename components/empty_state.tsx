import * as React from 'react'
import { Button, Stack, Text, Title, type MantineSize } from '@mantine/core'
import { IconInbox } from '@tabler/icons-react'

interface EmptyStateProps {
  /** Icono a mostrar (default: IconInbox) */
  icon?: React.ReactNode
  /** Título */
  title?: string
  /** Descripción */
  description?: string
  /** Texto del botón de acción */
  actionLabel?: string
  /** Callback del botón */
  onAction?: () => void
  /** Tamaño general */
  size?: MantineSize
  /** Contenido custom debajo de la descripción */
  children?: React.ReactNode
}

function EmptyState({
  icon,
  title = 'No data found',
  description = 'There are no items to display yet.',
  actionLabel,
  onAction,
  size = 'md',
  children,
}: EmptyStateProps) {
  const iconSize = size === 'xs' ? 32 : size === 'sm' ? 40 : size === 'lg' ? 64 : size === 'xl' ? 80 : 48

  return (
    <Stack align="center" gap="sm" py="xl">
      <Text c="dimmed" style={{ opacity: 0.5 }}>
        {icon || <IconInbox size={iconSize} stroke={1.5} />}
      </Text>
      <Title order={size === 'xs' || size === 'sm' ? 5 : 4} ta="center">
        {title}
      </Title>
      <Text c="dimmed" size={size} ta="center" maw={400}>
        {description}
      </Text>
      {children}
      {actionLabel && onAction && (
        <Button variant="light" size={size} onClick={onAction} mt="xs">
          {actionLabel}
        </Button>
      )}
    </Stack>
  )
}

export { EmptyState }
export type { EmptyStateProps }
