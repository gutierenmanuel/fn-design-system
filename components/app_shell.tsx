import * as React from 'react'
import { AppShell } from '@mantine/core'

interface FnAppShellProps {
  header?: React.ReactNode
  navbar?: React.ReactNode
  navbarWidth?: number
  navbarCollapsed?: boolean
  children: React.ReactNode
}

function FnAppShell({
  header,
  navbar,
  navbarWidth = 250,
  navbarCollapsed = false,
  children,
}: FnAppShellProps) {
  return (
    <AppShell
      header={header ? { height: 60 } : undefined}
      navbar={navbar ? { width: navbarWidth, breakpoint: 'sm', collapsed: { mobile: navbarCollapsed, desktop: navbarCollapsed } } : undefined}
      padding="md"
    >
      {header && <AppShell.Header>{header}</AppShell.Header>}
      {navbar && <AppShell.Navbar p="md">{navbar}</AppShell.Navbar>}
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  )
}

export { FnAppShell }
export type { FnAppShellProps }
