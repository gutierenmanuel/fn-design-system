import { Chip as MantineChip, type ChipProps as MantineChipProps } from '@mantine/core'

interface ChipProps extends MantineChipProps {}

function Chip(props: ChipProps) {
  return <MantineChip {...props} />
}

const ChipGroup = MantineChip.Group

export { Chip, ChipGroup }
export type { ChipProps }
