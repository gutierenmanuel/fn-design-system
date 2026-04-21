import { Autocomplete as MantineAutocomplete, type AutocompleteProps as MantineAutcompleteProps } from '@mantine/core'

interface AutocompleteProps extends MantineAutcompleteProps {}

function Autocomplete(props: AutocompleteProps) {
  return <MantineAutocomplete {...props} />
}

export { Autocomplete }
export type { AutocompleteProps }
