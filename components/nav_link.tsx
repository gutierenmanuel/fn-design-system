import * as React from 'react'
import { NavLink } from '@mantine/core'

interface FnNavLinkProps {
  label: string
  description?: string
  icon?: React.ReactNode
  active?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  href?: string
  children?: React.ReactNode
  opened?: boolean
  defaultOpened?: boolean
}

function FnNavLink({
  label,
  description,
  icon,
  active,
  onClick,
  href,
  children,
  opened,
  defaultOpened,
}: FnNavLinkProps) {
  return (
    <NavLink
      label={label}
      description={description}
      leftSection={icon}
      active={active}
      onClick={onClick}
      href={href}
      opened={opened}
      defaultOpened={defaultOpened}
    >
      {children}
    </NavLink>
  )
}

export { FnNavLink }
export type { FnNavLinkProps }
