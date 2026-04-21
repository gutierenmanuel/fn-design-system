import * as React from "react"
import { Skeleton as MantineSkeleton, Group, Stack } from "@mantine/core"

function Skeleton({ className, style, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <MantineSkeleton data-slot="skeleton" className={className} style={style} {...props} />
}

function SkeletonText({ className, lines = 3, ...props }: React.HTMLAttributes<HTMLDivElement> & { lines?: number }) {
  return (
    <Stack gap="xs" className={className} data-slot="skeleton-text" {...props}>
      {Array.from({ length: lines }).map((_, i) => (
        <MantineSkeleton key={i} h={16} w={i === lines - 1 ? "80%" : "100%"} />
      ))}
    </Stack>
  )
}

function SkeletonCard({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Stack gap="xs" className={className} data-slot="skeleton-card" {...props}>
      <MantineSkeleton h={180} w="100%" radius="md" />
      <MantineSkeleton h={16} w="75%" />
      <MantineSkeleton h={16} w="50%" />
    </Stack>
  )
}

const avatarSizeMap = { xs: 24, sm: 32, md: 40, lg: 48, xl: 64 }

function SkeletonAvatar({ className, size = "md", ...props }: React.HTMLAttributes<HTMLDivElement> & { size?: "xs" | "sm" | "md" | "lg" | "xl" }) {
  const px = avatarSizeMap[size]
  return <MantineSkeleton data-slot="skeleton-avatar" circle h={px} w={px} className={className} {...props} />
}

function SkeletonButton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <MantineSkeleton data-slot="skeleton-button" h={32} w={96} radius="md" className={className} {...props} />
}

function SkeletonTable({ className, rows = 5, columns = 4, ...props }: React.HTMLAttributes<HTMLDivElement> & { rows?: number; columns?: number }) {
  return (
    <Stack gap="xs" className={className} data-slot="skeleton-table" {...props}>
      <Group gap="sm">
        {Array.from({ length: columns }).map((_, i) => <MantineSkeleton key={i} h={16} style={{ flex: 1 }} />)}
      </Group>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <Group key={rowIndex} gap="sm">
          {Array.from({ length: columns }).map((_, colIndex) => <MantineSkeleton key={colIndex} h={16} style={{ flex: 1 }} />)}
        </Group>
      ))}
    </Stack>
  )
}

export { Skeleton, SkeletonAvatar, SkeletonButton, SkeletonCard, SkeletonTable, SkeletonText }
