import * as React from 'react'
import { TextInput, Box } from '@mantine/core'

function Input({
  className,
  type,
  ...props
}: React.ComponentProps<typeof TextInput> & { type?: string }) {
  return (
    <TextInput
      type={type}
      data-slot="input"
      size="sm"
      className={className}
      {...props}
    />
  )
}

interface InputGroupProps {
  children: React.ReactNode
  className?: string
}

function InputGroup({ children, className }: InputGroupProps) {
  return (
    <Box data-slot="input-group" className={className}>
      {children}
    </Box>
  )
}

interface InputIconProps {
  children: React.ReactNode
  position: 'start' | 'end'
  className?: string
}

function InputIcon({ children, position, className }: InputIconProps) {
  return (
    <Box
      data-slot={`input-icon-${position}`}
      component="span"
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        pointerEvents: 'none',
      }}
    >
      {children}
    </Box>
  )
}

export { Input, InputGroup, InputIcon }
export type { InputGroupProps, InputIconProps }
