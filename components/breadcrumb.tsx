import * as React from "react"
import { Anchor, Text, Box } from "@mantine/core"
import { IconChevronRight, IconDots } from "@tabler/icons-react"

function Breadcrumb({ children, ...props }: React.ComponentPropsWithoutRef<"nav">) {
  return <nav data-slot="breadcrumb" aria-label="breadcrumb" {...props}>{children}</nav>
}

function BreadcrumbList({ className, children, ...props }: React.ComponentPropsWithoutRef<"ol">) {
  return (
    <ol data-slot="breadcrumb-list" style={{ listStyle: "none", display: "flex", flexWrap: "wrap", alignItems: "center", gap: 8, padding: 0, margin: 0 }} className={className} {...props}>
      {children}
    </ol>
  )
}

function BreadcrumbItem({ className, children, ...props }: React.ComponentPropsWithoutRef<"li">) {
  return (
    <li data-slot="breadcrumb-item" style={{ display: "flex", alignItems: "center", gap: 8 }} className={className} {...props}>
      {children}
    </li>
  )
}

function BreadcrumbLink({
  className,
  href,
  asChild,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"a"> & { asChild?: boolean }) {
  if (asChild) {
    return (
      <Text data-slot="breadcrumb-link" component="span" size="sm" className={className} {...(props as React.ComponentPropsWithoutRef<"span">)}>
        {children}
      </Text>
    )
  }
  return (
    <Anchor data-slot="breadcrumb-link" href={href} size="sm" className={className} {...props}>
      {children}
    </Anchor>
  )
}

function BreadcrumbPage({ className, ...props }: React.ComponentPropsWithoutRef<"span">) {
  return (
    <Text
      data-slot="breadcrumb-page"
      component="span"
      size="sm"
      fw={500}
      role="link"
      aria-current="page"
      aria-disabled="true"
      className={className}
      {...props}
    />
  )
}

function BreadcrumbSeparator({ children, className, ...props }: React.ComponentProps<"li">) {
  return (
    <Box
      data-slot="breadcrumb-separator"
      component="li"
      role="presentation"
      aria-hidden="true"
      className={className}
      style={{ display: "flex", alignItems: "center" }}
      {...props}
    >
      {children ?? <IconChevronRight size={14} />}
    </Box>
  )
}

function BreadcrumbEllipsis({ className, ...props }: React.ComponentPropsWithoutRef<"span">) {
  return (
    <Box
      data-slot="breadcrumb-ellipsis"
      component="span"
      role="presentation"
      aria-hidden="true"
      style={{ display: "flex", width: 36, height: 36, alignItems: "center", justifyContent: "center" }}
      className={className}
      {...props}
    >
      <IconDots size={16} />
      <span style={{ position: "absolute", width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0,0,0,0)", whiteSpace: "nowrap", borderWidth: 0 }}>More</span>
    </Box>
  )
}

export { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator }
