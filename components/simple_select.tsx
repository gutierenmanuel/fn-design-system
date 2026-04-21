import { NativeSelect } from '@mantine/core'

export interface SimpleSelectOption {
  value: string
  label: string
  disabled?: boolean
}

export interface SimpleSelectGroup {
  group: string
  items: SimpleSelectOption[]
}

export type SimpleSelectOptions = SimpleSelectOption[] | SimpleSelectGroup[]

interface SimpleSelectProps {
  value: string
  onValueChange: (value: string) => void
  options: SimpleSelectOptions
  placeholder?: string
  disabled?: boolean
  size?: 'sm' | 'default'
  className?: string
}

function isGrouped(
  options: SimpleSelectOptions,
): options is SimpleSelectGroup[] {
  return options.length > 0 && options[0] != null && 'group' in options[0]
}

function toMantineData(options: SimpleSelectOptions, placeholder?: string) {
  const data: Array<{ value: string; label: string; disabled?: boolean } | { group: string; items: Array<{ value: string; label: string; disabled?: boolean }> }> = []

  if (placeholder) {
    data.push({ value: '', label: placeholder, disabled: true })
  }

  if (isGrouped(options)) {
    for (const g of options) {
      data.push({ group: g.group, items: g.items })
    }
  } else {
    for (const item of options) {
      data.push(item)
    }
  }

  return data
}

function SimpleSelect({
  value,
  onValueChange,
  options,
  placeholder = 'Select...',
  disabled = false,
  size = 'default',
  className,
}: SimpleSelectProps) {
  return (
    <NativeSelect
      value={value}
      onChange={(e) => onValueChange(e.currentTarget.value)}
      data={toMantineData(options, !value ? placeholder : undefined)}
      disabled={disabled}
      size={size === 'sm' ? 'xs' : 'sm'}
      className={className}
      styles={{ input: { cursor: 'pointer' } }}
    />
  )
}

export { SimpleSelect }
