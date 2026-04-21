import * as React from 'react'
import { Box, Text } from '@mantine/core'

interface FormFieldProps {
  label?: string
  helperText?: string
  error?: string
  children: React.ReactNode
  className?: string
}

function FormField({ label, helperText, error, children, className }: FormFieldProps) {
  const id = React.useId()
  const inputId = `${id}-input`
  const helperId = `${id}-helper`
  const errorId = `${id}-error`

  const describedBy = [helperText ? helperId : null, error ? errorId : null].filter(Boolean).join(' ') || undefined

  const childWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as React.ReactElement<Record<string, unknown>>, {
        id: inputId,
        'aria-invalid': error ? true : undefined,
        'aria-describedby': describedBy,
        error: error || undefined,
      })
    }
    return child
  })

  return (
    <Box className={className}>
      {label && (
        <Text component="label" htmlFor={inputId} size="sm" fw={500} mb={4} display="block">
          {label}
        </Text>
      )}
      {childWithProps}
      {helperText && !error && (
        <Text id={helperId} size="sm" c="dimmed" mt={4}>
          {helperText}
        </Text>
      )}
      {error && (
        <Text id={errorId} size="sm" c="red" mt={4}>
          {error}
        </Text>
      )}
    </Box>
  )
}

export { FormField }
export type { FormFieldProps }
