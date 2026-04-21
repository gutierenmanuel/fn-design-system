import * as React from 'react'
import { Textarea as MantineTextarea } from '@mantine/core'

interface TextareaProps extends Omit<React.ComponentProps<typeof MantineTextarea>, 'autosize'> {
  autoResize?: boolean
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, autoResize = false, ...props }, ref) => {
    return (
      <MantineTextarea
        ref={ref}
        data-slot="textarea"
        autosize={autoResize}
        minRows={autoResize ? 2 : undefined}
        size="sm"
        className={className}
        {...props}
      />
    )
  }
)
Textarea.displayName = 'Textarea'

export { Textarea }
export type { TextareaProps }
