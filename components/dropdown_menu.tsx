import * as React from 'react'
import { Menu, Text } from '@mantine/core'

function DropdownMenu({ children, ...props }: { children: React.ReactNode; open?: boolean; defaultOpen?: boolean; onOpenChange?: (open: boolean) => void; modal?: boolean }) {
  return (
    <Menu
      opened={props.open}
      defaultOpened={props.defaultOpen}
      onChange={props.onOpenChange}
      withinPortal
      shadow="md"
    >
      {children}
    </Menu>
  )
}

function DropdownMenuTrigger({ children, ...props }: { children: React.ReactNode; asChild?: boolean; className?: string }) {
  return <Menu.Target {...props}>{children}</Menu.Target>
}

function DropdownMenuPortal({ children }: { children?: React.ReactNode }) {
  return <>{children}</>
}

function DropdownMenuContent({ children, className }: { children?: React.ReactNode; className?: string; sideOffset?: number }) {
  return <Menu.Dropdown className={className}>{children}</Menu.Dropdown>
}

function DropdownMenuItem({ children, className, inset, ...props }: {
  children?: React.ReactNode
  className?: string
  inset?: boolean
  onClick?: () => void
  onActivate?: () => void
  disabled?: boolean
}) {
  return (
    <Menu.Item
      className={className}
      onClick={props.onClick ?? props.onActivate}
      disabled={props.disabled}
      pl={inset ? 'xl' : undefined}
    >
      {children}
    </Menu.Item>
  )
}

function DropdownMenuCheckboxItem({ children, className, checked, onCheckedChange, ...props }: {
  children?: React.ReactNode
  className?: string
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  disabled?: boolean
}) {
  return (
    <Menu.Item
      className={className}
      onClick={() => onCheckedChange?.(!checked)}
      disabled={props.disabled}
      leftSection={checked ? <span style={{ fontSize: 14 }}>✓</span> : <span style={{ width: 14 }} />}
    >
      {children}
    </Menu.Item>
  )
}

function DropdownMenuRadioGroup({ children }: { children?: React.ReactNode; value?: string; onValueChange?: (value: string) => void }) {
  return <>{children}</>
}

function DropdownMenuRadioItem({ children, className, value, ...props }: {
  children?: React.ReactNode
  className?: string
  value?: string
  disabled?: boolean
  onClick?: () => void
}) {
  return (
    <Menu.Item className={className} onClick={props.onClick} disabled={props.disabled}>
      {children}
    </Menu.Item>
  )
}

function DropdownMenuGroup({ children }: { children?: React.ReactNode }) {
  return <>{children}</>
}

function DropdownMenuLabel({ children, className, inset }: { children?: React.ReactNode; className?: string; inset?: boolean }) {
  return (
    <Menu.Label className={className} pl={inset ? 'xl' : undefined}>
      {children}
    </Menu.Label>
  )
}

function DropdownMenuSeparator({ className }: { className?: string }) {
  return <Menu.Divider className={className} />
}

function DropdownMenuShortcut({ children, className }: { children?: React.ReactNode; className?: string }) {
  return <Text span size="xs" c="dimmed" ml="auto" className={className}>{children}</Text>
}

function DropdownMenuSub({ children }: { children?: React.ReactNode }) {
  return <>{children}</>
}

function DropdownMenuSubTrigger({ children, className, inset }: { children?: React.ReactNode; className?: string; inset?: boolean }) {
  return (
    <Menu.Item className={className} pl={inset ? 'xl' : undefined}>
      {children}
    </Menu.Item>
  )
}

function DropdownMenuSubContent({ children, className }: { children?: React.ReactNode; className?: string }) {
  return <Menu.Dropdown className={className}>{children}</Menu.Dropdown>
}

export {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
}
