import * as React from "react"
import { Tabs as MantineTabs } from "@mantine/core"

interface TabsProps {
  defaultValue?: string | null
  value?: string | null
  onTabChange?: (value: string | null) => void
  orientation?: "horizontal" | "vertical"
  variant?: "default" | "line"
  className?: string
  children?: React.ReactNode
}

function Tabs({ className, orientation = "horizontal", variant = "default", defaultValue, value, onTabChange, children, ...props }: TabsProps) {
  return (
    <MantineTabs
      data-slot="tabs"
      defaultValue={defaultValue}
      value={value}
      onChange={onTabChange}
      orientation={orientation}
      variant={variant === "line" ? "outline" : "default"}
      className={className}
      {...props}
    >
      {children}
    </MantineTabs>
  )
}

function TabsList({ className, variant, children, ...props }: { className?: string; variant?: "default" | "line"; children?: React.ReactNode } & React.ComponentProps<typeof MantineTabs.List>) {
  return (
    <MantineTabs.List data-slot="tabs-list" className={className} {...props}>
      {children}
    </MantineTabs.List>
  )
}

function TabsTrigger({ className, value, children, disabled, ...props }: { className?: string; value: string; children?: React.ReactNode; disabled?: boolean }) {
  return (
    <MantineTabs.Tab data-slot="tabs-trigger" value={value} disabled={disabled} className={className} {...props}>
      {children}
    </MantineTabs.Tab>
  )
}

function TabsContent({ className, value, children, ...props }: { className?: string; value: string; children?: React.ReactNode }) {
  return (
    <MantineTabs.Panel data-slot="tabs-content" value={value} className={className} {...props}>
      {children}
    </MantineTabs.Panel>
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
