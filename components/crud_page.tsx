import * as React from 'react'
import { Stack, Group, Title, Text, Paper, Table, Button, ActionIcon, Center } from '@mantine/core'
import { IconPlus, IconPencil, IconTrash } from '@tabler/icons-react'

interface CrudField {
  key: string
  label: string
  type: 'text' | 'number' | 'email' | 'select' | 'textarea'
  required?: boolean
  options?: Array<{ label: string; value: string }>
  placeholder?: string
}

interface CrudPageProps<T extends Record<string, unknown>> {
  title: string
  subtitle?: string
  data: T[]
  fields: CrudField[]
  columns: Array<{
    key: keyof T
    label: string
    render?: (value: unknown, row: T) => React.ReactNode
  }>
  onAdd?: (item: Partial<T>) => void
  onEdit?: (item: T) => void
  onDelete?: (item: T) => void
  actions?: React.ReactNode
  className?: string
}

export function crudPage<T extends Record<string, unknown>>({
  title,
  subtitle,
  data,
  fields,
  columns,
  onAdd,
  onEdit,
  onDelete,
  actions,
}: CrudPageProps<T>): React.ReactElement {
  return (
    <Stack gap="lg">
      {/* Header */}
      <Group justify="space-between" pb="md" style={{ borderBottom: '1px solid var(--mantine-color-default-border)' }}>
        <Stack gap={4}>
          <Title order={2}>{title}</Title>
          {subtitle && <Text size="sm" c="dimmed">{subtitle}</Text>}
        </Stack>
        <Group gap="xs">
          {actions}
          {onAdd && (
            <Button size="xs" leftSection={<IconPlus size={16} />}>
              Add {title.replace(/s$/, '')}
            </Button>
          )}
        </Group>
      </Group>

      {/* Table */}
      <Paper withBorder radius="md">
        <Table highlightOnHover>
          <Table.Thead>
            <Table.Tr>
              {columns.map((col) => (
                <Table.Th key={String(col.key)} fz="sm" fw={500} c="dimmed" px="md" py="sm">
                  {col.label}
                </Table.Th>
              ))}
              {(onEdit || onDelete) && (
                <Table.Th ta="right" fz="sm" fw={500} c="dimmed" px="md" py="sm">Actions</Table.Th>
              )}
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {data.length === 0 ? (
              <Table.Tr>
                <Table.Td colSpan={columns.length + (onEdit || onDelete ? 1 : 0)}>
                  <Center h={96}>
                    <Text c="dimmed">No items yet.</Text>
                  </Center>
                </Table.Td>
              </Table.Tr>
            ) : (
              data.map((row, i) => (
                <Table.Tr key={i}>
                  {columns.map((col) => (
                    <Table.Td key={String(col.key)} px="md" py="sm" style={{ verticalAlign: 'middle' }}>
                      {col.render ? col.render(row[col.key], row) : String(row[col.key] ?? '')}
                    </Table.Td>
                  ))}
                  {(onEdit || onDelete) && (
                    <Table.Td px="md" py="sm" ta="right">
                      <Group gap={4} justify="flex-end">
                        {onEdit && (
                          <ActionIcon variant="subtle" size="sm" onClick={() => onEdit(row)}>
                            <IconPencil size={14} />
                          </ActionIcon>
                        )}
                        {onDelete && (
                          <ActionIcon variant="subtle" color="red" size="sm" onClick={() => onDelete(row)}>
                            <IconTrash size={14} />
                          </ActionIcon>
                        )}
                      </Group>
                    </Table.Td>
                  )}
                </Table.Tr>
              ))
            )}
          </Table.Tbody>
        </Table>
      </Paper>

      {/* Form fields definition (for agent use) */}
      <div style={{ display: 'none' }} data-slot="crud-form-schema" data-fields={JSON.stringify(fields)} />
    </Stack>
  )
}

export type { CrudPageProps, CrudField }
