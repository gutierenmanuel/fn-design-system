import * as React from 'react'
import { Stack, Group, Title, Text, Paper, TextInput, Textarea, Switch, NativeSelect, Button, Box, Anchor } from '@mantine/core'

interface SettingField {
  key: string
  label: string
  description?: string
  type: 'text' | 'number' | 'toggle' | 'select' | 'textarea'
  value?: unknown
  options?: Array<{ label: string; value: string }>
  placeholder?: string
}

interface SettingSection {
  id: string
  title: string
  description?: string
  fields: SettingField[]
}

interface SettingsPageProps {
  title?: string
  subtitle?: string
  sections: SettingSection[]
  onSave?: (values: Record<string, unknown>) => void
  className?: string
}

export function settingsPage({
  title = 'Settings',
  subtitle,
  sections,
  onSave,
}: SettingsPageProps): React.ReactElement {
  return (
    <Stack gap="lg">
      {/* Header */}
      <Box pb="md" style={{ borderBottom: '1px solid var(--mantine-color-default-border)' }}>
        <Title order={2}>{title}</Title>
        {subtitle && <Text size="sm" c="dimmed">{subtitle}</Text>}
      </Box>

      {/* Content with sidebar nav */}
      <Group align="flex-start" gap="xl">
        <Box w={192} visibleFrom="md" style={{ flexShrink: 0 }}>
          <Stack gap={4}>
            {sections.map((section) => (
              <Anchor
                key={section.id}
                href={`#${section.id}`}
                underline="never"
                size="sm"
                fw={500}
                c="dimmed"
                py={6}
                px="sm"
                style={{ display: 'block', borderRadius: 'var(--mantine-radius-sm)' }}
              >
                {section.title}
              </Anchor>
            ))}
          </Stack>
        </Box>

        {/* Sections */}
        <Stack gap="xl" style={{ flex: 1 }}>
          {sections.map((section) => (
            <Stack key={section.id} id={section.id} gap="md">
              <Box>
                <Text size="lg" fw={500}>{section.title}</Text>
                {section.description && <Text size="sm" c="dimmed">{section.description}</Text>}
              </Box>
              <Paper withBorder p="md" radius="md">
                <Stack gap="md">
                  {section.fields.map((field) => (
                    <Group key={field.key} justify="space-between" align="center" wrap="wrap" gap="md">
                      <Stack gap={2} style={{ flex: '1 1 auto' }}>
                        <Text size="sm" fw={500}>{field.label}</Text>
                        {field.description && <Text size="xs" c="dimmed">{field.description}</Text>}
                      </Stack>
                      <Box w={{ base: '100%', sm: 256 }}>
                        {field.type === 'toggle' ? (
                          <Switch defaultChecked={!!field.value} />
                        ) : field.type === 'select' ? (
                          <NativeSelect
                            data={field.options?.map(o => ({ label: o.label, value: o.value })) ?? []}
                            size="xs"
                          />
                        ) : field.type === 'textarea' ? (
                          <Textarea
                            rows={3}
                            placeholder={field.placeholder}
                            defaultValue={String(field.value ?? '')}
                            size="xs"
                          />
                        ) : (
                          <TextInput
                            type={field.type}
                            placeholder={field.placeholder}
                            defaultValue={String(field.value ?? '')}
                            size="xs"
                          />
                        )}
                      </Box>
                    </Group>
                  ))}
                </Stack>
              </Paper>
            </Stack>
          ))}

          {onSave && (
            <Group justify="flex-end" pt="md" style={{ borderTop: '1px solid var(--mantine-color-default-border)' }}>
              <Button size="xs">Save changes</Button>
            </Group>
          )}
        </Stack>
      </Group>
    </Stack>
  )
}

export type { SettingsPageProps, SettingSection, SettingField }
