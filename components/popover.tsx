import * as React from 'react'
import { Popover as MantinePopover, Box, Text } from '@mantine/core'

interface PopoverProps {
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
}

function Popover({ open, defaultOpen, onOpenChange, children }: PopoverProps) {
  return (
    <MantinePopover
      opened={open}
      defaultOpened={defaultOpen}
      onChange={onOpenChange}
      withArrow
      shadow="md"
      radius="md"
    >
      {children}
    </MantinePopover>
  )
}

function PopoverTrigger({ children }: React.ComponentProps<'div'>) {
  return (
    <MantinePopover.Target>
      {React.isValidElement(children) ? (
        children
      ) : (
        <button type="button" data-slot="popover-trigger">{children}</button>
      )}
    </MantinePopover.Target>
  )
}

function PopoverPortal({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

function PopoverContent({ className, children, sideOffset, ...props }: React.ComponentProps<'div'> & { sideOffset?: number }) {
  return (
    <MantinePopover.Dropdown
      data-slot="popover-content"
      className={className}
      {...props}
    >
      {children}
    </MantinePopover.Dropdown>
  )
}

function PopoverClose({ children, ...props }: React.ComponentProps<'button'>) {
  return (
    <button type="button" data-slot="popover-close" {...props}>
      {children}
    </button>
  )
}

function PopoverHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return <Box data-slot="popover-header" mb="xs" className={className} {...props} />
}

function PopoverTitle({ className, ...props }: React.ComponentProps<'h4'>) {
  return (
    <Text
      component="h4"
      data-slot="popover-title"
      fw={600}
      size="sm"
      className={className}
      {...props}
    />
  )
}

function PopoverDescription({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <Text
      component="p"
      data-slot="popover-description"
      size="sm"
      c="dimmed"
      className={className}
      {...props}
    />
  )
}

export { Popover, PopoverClose, PopoverContent, PopoverDescription, PopoverHeader, PopoverPortal, PopoverTitle, PopoverTrigger }
