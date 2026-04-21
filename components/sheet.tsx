import * as React from 'react'
import { Drawer, Box, Text, Group } from '@mantine/core'

type SheetSide = 'top' | 'bottom' | 'left' | 'right'

interface SheetProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
}

interface SheetContentProps extends React.ComponentProps<'div'> {
  side?: SheetSide
  showCloseButton?: boolean
  children?: React.ReactNode
}

const SheetContext = React.createContext<{
  open: boolean
  setOpen: (open: boolean) => void
}>({ open: false, setOpen: () => {} })

function Sheet({ open: controlledOpen, onOpenChange, children }: SheetProps) {
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
    <SheetContext.Provider value={{ open, setOpen }}>
      {children}
    </SheetContext.Provider>
  )
}

function SheetTrigger({ children, ...props }: React.ComponentProps<'button'>) {
  const { setOpen } = React.useContext(SheetContext)
  return (
    <button type="button" data-slot="sheet-trigger" onClick={() => setOpen(true)} {...props}>
      {children}
    </button>
  )
}

function SheetClose({ children, ...props }: React.ComponentProps<'button'>) {
  const { setOpen } = React.useContext(SheetContext)
  return (
    <button type="button" data-slot="sheet-close" onClick={() => setOpen(false)} {...props}>
      {children}
    </button>
  )
}

function SheetPortal({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

function SheetOverlay() {
  return null
}

const sizeMap: Record<SheetSide, string> = {
  left: 'sm',
  right: 'sm',
  top: 'md',
  bottom: 'md',
}

function SheetContent({ side = 'right', showCloseButton = true, children, className, ...props }: SheetContentProps) {
  const { open, setOpen } = React.useContext(SheetContext)
  return (
    <Drawer
      opened={open}
      onClose={() => setOpen(false)}
      position={side}
      withCloseButton={showCloseButton}
      size={sizeMap[side]}
      padding="md"
      data-slot="sheet-content"
      className={className}
      {...props}
    >
      {children}
    </Drawer>
  )
}

function SheetHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return <Box data-slot="sheet-header" mb="xs" className={className} {...props} />
}

function SheetFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <Group
      data-slot="sheet-footer"
      justify="flex-end"
      gap="sm"
      mt="auto"
      pt="sm"
      className={className}
      {...props}
    />
  )
}

function SheetTitle({ className, children, ...props }: React.ComponentProps<'div'>) {
  return (
    <Text
      component="div"
      data-slot="sheet-title"
      fw={600}
      size="md"
      className={className}
      {...props}
    >
      {children}
    </Text>
  )
}

function SheetDescription({ className, children, ...props }: React.ComponentProps<'div'>) {
  return (
    <Text
      component="div"
      data-slot="sheet-description"
      size="sm"
      c="dimmed"
      className={className}
      {...props}
    >
      {children}
    </Text>
  )
}

const sheetVariants = {} as const

export { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetOverlay, SheetPortal, SheetTitle, SheetTrigger, sheetVariants }
export type { SheetContentProps }
