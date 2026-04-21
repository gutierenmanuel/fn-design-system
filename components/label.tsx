import * as React from 'react'
import { Text } from '@mantine/core'

function Label({ className, ...props }: React.ComponentProps<'label'>) {
  return (
    <Text
      component="label"
      data-slot="label"
      size="sm"
      fw={500}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 8, userSelect: 'none' }}
      className={className}
      {...props}
    />
  )
}

export { Label }
