import * as React from 'react'
import { Modal, Box, Text, Group } from '@mantine/core'

interface DialogProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
}

const DialogContext = React.createContext<{
  open: boolean
  setOpen: (open: boolean) => void
}>({ open: false, setOpen: () => {} })

function Dialog({ open: controlledOpen, onOpenChange, children }: DialogProps) {
  const [internalOpen, setInternalOpen] = React.useState(false)
  const open = controlledOpen ?? internalOpen
  const setOpen = React.useCallback(
    (v: boolean) => {
      onOpenChange?.(v)
      if (controlledOpen === undefined) setInternalOpen(v)
    },
    [controlledOpen, onOpenChange],
  )
  return (
    <DialogContext.Provider value={{ open, setOpen }}>
      {children}
    </DialogContext.Provider>
  )
}

function DialogTrigger({ children, ...props }: React.ComponentProps<'button'>) {
  const { setOpen } = React.useContext(DialogContext)
  return (
    <button type="button" data-slot="dialog-trigger" onClick={() => setOpen(true)} {...props}>
      {children}
    </button>
  )
}

function DialogPortal({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

function DialogClose({ children, ...props }: React.ComponentProps<'button'>) {
  const { setOpen } = React.useContext(DialogContext)
  return (
    <button type="button" data-slot="dialog-close" onClick={() => setOpen(false)} {...props}>
      {children}
    </button>
  )
}

function DialogOverlay() {
  return null
}

function DialogContent({
  children,
  showCloseButton = true,
  className,
  ...props
}: React.ComponentProps<'div'> & { showCloseButton?: boolean }) {
  const { open, setOpen } = React.useContext(DialogContext)
  return (
    <Modal
      opened={open}
      onClose={() => setOpen(false)}
      withCloseButton={showCloseButton}
      radius="md"
      padding="md"
      size="sm"
      centered
      data-slot="dialog-content"
      className={className}
      {...props}
    >
      {children}
    </Modal>
  )
}

function DialogHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return <Box data-slot="dialog-header" mb="xs" className={className} {...props} />
}

function DialogFooter({ className, children, ...props }: React.ComponentProps<'div'>) {
  return (
    <Group
      data-slot="dialog-footer"
      justify="flex-end"
      gap="sm"
      mt="md"
      pt="sm"
      style={{ borderTop: '1px solid var(--mantine-color-default-border)' }}
      className={className}
      {...props}
    >
      {children}
    </Group>
  )
}

function DialogTitle({ className, children, ...props }: React.ComponentProps<'div'>) {
  return (
    <Text
      component="div"
      data-slot="dialog-title"
      fw={500}
      size="md"
      className={className}
      {...props}
    >
      {children}
    </Text>
  )
}

function DialogDescription({ className, children, ...props }: React.ComponentProps<'div'>) {
  return (
    <Text
      component="div"
      data-slot="dialog-description"
      size="sm"
      c="dimmed"
      className={className}
      {...props}
    >
      {children}
    </Text>
  )
}

export { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger }
