import * as React from 'react'
import { Button, Container, Group, Stack, Text, Title } from '@mantine/core'

interface ErrorPageConfig {
  /** Código de error (404, 500, 403, etc.) */
  code?: number | string
  /** Título del error */
  title?: string
  /** Descripción del error */
  description?: string
  /** Texto del botón de acción */
  actionLabel?: string
  /** Callback del botón */
  onAction?: () => void
  /** Acciones extra además del botón principal */
  extraActions?: React.ReactNode
}

function ErrorPage({
  code = 404,
  title = 'Page not found',
  description = 'The page you are looking for does not exist. You may have mistyped the address, or the page has been moved to another URL.',
  actionLabel = 'Go back to home',
  onAction,
  extraActions,
}: ErrorPageConfig) {
  return (
    <Container py={80}>
      <Stack align="center" gap="md">
        <Text
          fz={120}
          fw={900}
          c="dimmed"
          style={{ lineHeight: 1, opacity: 0.25 }}
        >
          {code}
        </Text>
        <Title order={2} ta="center">
          {title}
        </Title>
        <Text c="dimmed" size="lg" ta="center" maw={500}>
          {description}
        </Text>
        <Group mt="md">
          <Button size="md" onClick={onAction}>
            {actionLabel}
          </Button>
          {extraActions}
        </Group>
      </Stack>
    </Container>
  )
}

export { ErrorPage }
export type { ErrorPageConfig }
