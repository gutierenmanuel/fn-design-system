import { Select as MantineSelect, type SelectProps as MantineSelectProps } from '@mantine/core'

interface SelectProps extends MantineSelectProps {}

function Select(props: SelectProps) {
  return <MantineSelect {...props} />
}

export { Select }
export type { SelectProps }
