import { MultiSelect as MantineMultiSelect, type MultiSelectProps as MantineMultiSelectProps } from '@mantine/core'

interface MultiSelectProps extends MantineMultiSelectProps {}

function MultiSelect(props: MultiSelectProps) {
  return <MantineMultiSelect {...props} />
}

export { MultiSelect }
export type { MultiSelectProps }
