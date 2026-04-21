import * as React from 'react'
import { TextInput, CloseButton } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'

interface SearchBarProps {
  onSearch: (query: string) => void
  placeholder?: string
  debounceMs?: number
  className?: string
}

function SearchBar({
  onSearch,
  placeholder = 'Search...',
  debounceMs = 300,
  className,
}: SearchBarProps) {
  const [query, setQuery] = React.useState('')
  const timerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null)
  const onSearchRef = React.useRef(onSearch)
  onSearchRef.current = onSearch

  React.useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      onSearchRef.current(query)
    }, debounceMs)
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [query, debounceMs])

  return (
    <TextInput
      value={query}
      onChange={(e) => setQuery(e.currentTarget.value)}
      placeholder={placeholder}
      leftSection={<IconSearch size={14} />}
      rightSection={query ? (
        <CloseButton size="sm" onClick={() => setQuery('')} aria-label="Clear search" />
      ) : undefined}
      className={className}
      size="sm"
    />
  )
}

export { SearchBar }
export type { SearchBarProps }
