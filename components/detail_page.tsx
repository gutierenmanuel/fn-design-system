import * as React from 'react'
import { Stack, Group, Title, Text, ActionIcon, Box, Tabs, Badge, Timeline, SimpleGrid } from '@mantine/core'
import { IconChevronLeft } from '@tabler/icons-react'

interface DetailField {
  label: string
  value: React.ReactNode
  span?: 1 | 2
}

interface DetailTab {
  label: string
  value: string
  content: React.ReactNode
  count?: number
}

interface TimelineEvent {
  id: string
  title: string
  description?: string
  timestamp: string
  icon?: React.ReactNode
  variant?: 'default' | 'success' | 'warning' | 'error'
}

interface DetailPageProps {
  title: string
  subtitle?: string
  badge?: React.ReactNode
  avatar?: React.ReactNode
  actions?: React.ReactNode
  onBack?: () => void
  fields: DetailField[]
  tabs?: DetailTab[]
  activeTab?: string
  onTabChange?: (value: string) => void
  timeline?: TimelineEvent[]
  className?: string
}

const variantColors: Record<string, string> = {
  default: 'blue',
  success: 'green',
  warning: 'yellow',
  error: 'red',
}

export function detailPage({
  title, subtitle, badge, avatar, actions, onBack,
  fields, tabs, activeTab, onTabChange, timeline,
}: DetailPageProps): React.ReactElement {
  return (
    <Stack gap="lg">
      {/* Header */}
      <Group justify="space-between" align="flex-start" pb="md" style={{ borderBottom: '1px solid var(--mantine-color-default-border)' }}>
        <Group align="flex-start" gap="md">
          {onBack && (
            <ActionIcon variant="subtle" size="sm" onClick={onBack} mt={4}>
              <IconChevronLeft size={16} />
            </ActionIcon>
          )}
          {avatar && (
            <Box
              w={48}
              h={48}
              style={{ flexShrink: 0, overflow: 'hidden', borderRadius: '50%', backgroundColor: 'var(--mantine-color-default)' }}
            >
              {avatar}
            </Box>
          )}
          <Stack gap={4}>
            <Group gap="sm" align="center">
              <Title order={2}>{title}</Title>
              {badge}
            </Group>
            {subtitle && <Text size="sm" c="dimmed">{subtitle}</Text>}
          </Stack>
        </Group>
        {actions && <Group gap="xs">{actions}</Group>}
      </Group>

      {/* Fields grid */}
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="md">
        {fields.map((field, i) => (
          <Box key={i} style={field.span === 2 ? { gridColumn: 'span 2' } : undefined}>
            <Stack gap={4}>
              <Text size="sm" c="dimmed">{field.label}</Text>
              <Text size="sm" fw={500}>{field.value}</Text>
            </Stack>
          </Box>
        ))}
      </SimpleGrid>

      {/* Tabs */}
      {tabs && tabs.length > 0 && (
        <Stack gap="md">
          <Tabs value={activeTab} onChange={(v) => v && onTabChange?.(v)}>
            <Tabs.List>
              {tabs.map((tab) => (
                <Tabs.Tab
                  key={tab.value}
                  value={tab.value}
                  rightSection={tab.count !== undefined ? <Badge size="xs" variant="filled" circle>{tab.count}</Badge> : undefined}
                >
                  {tab.label}
                </Tabs.Tab>
              ))}
            </Tabs.List>
          </Tabs>
          {tabs.find(t => t.value === activeTab)?.content}
        </Stack>
      )}

      {/* Timeline */}
      {timeline && timeline.length > 0 && (
        <Stack gap="sm">
          <Text size="sm" fw={500} c="dimmed">Activity</Text>
          <Timeline active={timeline.length - 1} bulletSize={12} lineWidth={2}>
            {timeline.map((event) => (
              <Timeline.Item
                key={event.id}
                color={variantColors[event.variant || 'default']}
                title={<Text size="sm" fw={500}>{event.title}</Text>}
              >
                {event.description && <Text size="xs" c="dimmed">{event.description}</Text>}
                <Text size="xs" c="dimmed" opacity={0.7}>{event.timestamp}</Text>
              </Timeline.Item>
            ))}
          </Timeline>
        </Stack>
      )}
    </Stack>
  )
}

export type { DetailPageProps, DetailField, DetailTab, TimelineEvent }
