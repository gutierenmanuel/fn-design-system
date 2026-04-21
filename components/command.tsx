import * as React from 'react'
import { TextInput, Text, Box, ScrollArea } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'

interface CommandItemData {
  value: string
  label: string
  description?: string
  icon?: React.ReactNode
  disabled?: boolean
  group?: string
}

interface CommandProps {
  items: CommandItemData[]
  value?: string
  onValueChange?: (value: string) => void
  placeholder?: string
  emptyMessage?: string
  className?: string
  inputClassName?: string
  listClassName?: string
}

function Command({ className, children, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  return <Box data-slot="command" className={className} {...props}>{children}</Box>
}

function CommandInput({ className, value, onChange, placeholder, ...props }: {
  className?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
}) {
  return (
    <TextInput
      data-slot="command-input"
      leftSection={<IconSearch size={16} />}
      className={className}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      styles={{ input: { border: 'none', borderBottom: '1px solid var(--mantine-color-default-border)' } }}
      {...props}
    />
  )
}

function CommandList({ className, children }: { className?: string; children?: React.ReactNode }) {
  return (
    <ScrollArea.Autosize mah={300} data-slot="command-list" className={className}>
      {children}
    </ScrollArea.Autosize>
  )
}

function CommandEmpty({ className, children }: { className?: string; children?: React.ReactNode }) {
  return (
    <Text ta="center" c="dimmed" size="sm" py="xl" data-slot="command-empty" className={className}>
      {children}
    </Text>
  )
}

function CommandGroup({ className, heading, children }: { className?: string; heading?: string; children?: React.ReactNode }) {
  return (
    <Box data-slot="command-group" p={4} className={className}>
      {heading && <Text size="xs" fw={500} c="dimmed" px="sm" py={6}>{heading}</Text>}
      <div>{children}</div>
    </Box>
  )
}

function CommandSeparator({ className }: { className?: string }) {
  return <Box data-slot="command-separator" h={1} bg="var(--mantine-color-default-border)" mx={-4} className={className} />
}

function CommandItem({ className, selected, disabled, onSelect, children }: {
  className?: string
  selected?: boolean
  disabled?: boolean
  onSelect?: () => void
  children?: React.ReactNode
}) {
  return (
    <Box
      data-slot="command-item"
      data-selected={selected}
      aria-disabled={disabled}
      role="option"
      aria-selected={selected}
      onClick={!disabled ? onSelect : undefined}
      px="sm"
      py={6}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        borderRadius: 'var(--mantine-radius-sm)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        backgroundColor: selected ? 'var(--mantine-color-default-hover)' : undefined,
        fontSize: 'var(--mantine-font-size-sm)',
      }}
      className={className}
    >
      {children}
    </Box>
  )
}

function CommandShortcut({ className, children }: { className?: string; children?: React.ReactNode }) {
  return <Text span size="xs" c="dimmed" ml="auto" className={className}>{children}</Text>
}

function CommandSearch({
  items,
  value,
  onValueChange,
  placeholder = 'Search...',
  emptyMessage = 'No results found.',
  className,
}: CommandProps) {
  const [query, setQuery] = React.useState('')
  const [selectedValue, setSelectedValue] = React.useState(value ?? '')

  const filtered = React.useMemo(() => {
    if (!query) return items
    const q = query.toLowerCase()
    return items.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        item.description?.toLowerCase().includes(q) ||
        item.value.toLowerCase().includes(q)
    )
  }, [items, query])

  const groups = React.useMemo(() => {
    const map = new Map<string, CommandItemData[]>()
    for (const item of filtered) {
      const key = item.group ?? ''
      if (!map.has(key)) map.set(key, [])
      map.get(key)!.push(item)
    }
    return map
  }, [filtered])

  const handleSelect = (val: string) => {
    setSelectedValue(val)
    onValueChange?.(val)
  }

  return (
    <Command className={className}>
      <CommandInput
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
      />
      <CommandList>
        {filtered.length === 0 ? (
          <CommandEmpty>{emptyMessage}</CommandEmpty>
        ) : (
          Array.from(groups.entries()).map(([group, groupItems]) => (
            <CommandGroup key={group} heading={group || undefined}>
              {groupItems.map((item) => (
                <CommandItem
                  key={item.value}
                  selected={selectedValue === item.value}
                  disabled={item.disabled}
                  onSelect={() => handleSelect(item.value)}
                >
                  {item.icon && <span>{item.icon}</span>}
                  <span>{item.label}</span>
                  {item.description && (
                    <Text span size="xs" c="dimmed" ml="auto">{item.description}</Text>
                  )}
                </CommandItem>
              ))}
            </CommandGroup>
          ))
        )}
      </CommandList>
    </Command>
  )
}

export { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSearch, CommandSeparator, CommandShortcut }
export type { CommandItemData, CommandProps }
