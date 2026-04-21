"use client"

import * as React from "react"
import { Group, Stack, Title, Text, ActionIcon, Tabs, Box } from "@mantine/core"
import { IconChevronLeft } from "@tabler/icons-react"

interface TabItem {
  label: string
  value: string
  icon?: React.ReactNode
  disabled?: boolean
}

interface PageHeaderProps {
  title: string
  subtitle?: string
  actions?: React.ReactNode
  onBack?: () => void
  tabs?: TabItem[]
  activeTab?: string
  onTabChange?: (value: string) => void
  badge?: React.ReactNode
  sticky?: boolean
}

function PageHeader({
  title, subtitle, actions, onBack, tabs, activeTab, onTabChange,
  badge, sticky = false,
}: PageHeaderProps) {
  return (
    <Box
      data-slot="page-header"
      pb="md"
      style={{
        borderBottom: '1px solid var(--mantine-color-default-border)',
        backgroundColor: 'var(--mantine-color-body)',
        ...(sticky ? { position: 'sticky', top: 0, zIndex: 20 } : {}),
      }}
    >
      <Stack gap="md">
        <Group justify="space-between" align="flex-start" gap="md">
          <Group align="flex-start" gap="sm">
            {onBack && (
              <ActionIcon variant="subtle" size="sm" onClick={onBack} mt={4}>
                <IconChevronLeft size={16} />
              </ActionIcon>
            )}
            <Stack gap={4}>
              <Group gap="sm" align="center">
                <Title order={2}>{title}</Title>
                {badge}
              </Group>
              {subtitle && <Text size="sm" c="dimmed">{subtitle}</Text>}
            </Stack>
          </Group>
          {actions && <Group gap="xs" style={{ flexShrink: 0 }}>{actions}</Group>}
        </Group>
        {tabs && tabs.length > 0 && (
          <Tabs value={activeTab} onChange={(v) => v && onTabChange?.(v)} style={{ marginBottom: 'calc(-1 * var(--mantine-spacing-md))' }}>
            <Tabs.List>
              {tabs.map((tab) => (
                <Tabs.Tab key={tab.value} value={tab.value} disabled={tab.disabled} leftSection={tab.icon}>
                  {tab.label}
                </Tabs.Tab>
              ))}
            </Tabs.List>
          </Tabs>
        )}
      </Stack>
    </Box>
  )
}

interface SimplePageHeaderProps {
  title: string
  description?: string
  children?: React.ReactNode
}

function SimplePageHeader({ title, description, children }: SimplePageHeaderProps) {
  return (
    <Group justify="space-between" pb="md" style={{ borderBottom: '1px solid var(--mantine-color-default-border)' }}>
      <Stack gap={4}>
        <Title order={2}>{title}</Title>
        {description && <Text size="sm" c="dimmed">{description}</Text>}
      </Stack>
      {children && <Group gap="xs">{children}</Group>}
    </Group>
  )
}

export { PageHeader, SimplePageHeader }
