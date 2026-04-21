import { SegmentedControl } from '@mantine/core'
import type { MantineSize, MantineColor } from '@mantine/core'

interface SegmentedItem {
  value: string
  label: string
}

interface FnSegmentedControlProps {
  data: SegmentedItem[]
  value?: string
  onChange?: (value: string) => void
  fullWidth?: boolean
  size?: MantineSize
  color?: MantineColor
}

function FnSegmentedControl({
  data,
  value,
  onChange,
  fullWidth = false,
  size = 'sm',
  color,
}: FnSegmentedControlProps) {
  return (
    <SegmentedControl
      data={data}
      value={value}
      onChange={onChange}
      fullWidth={fullWidth}
      size={size}
      color={color}
    />
  )
}

export { FnSegmentedControl }
export type { FnSegmentedControlProps, SegmentedItem }
