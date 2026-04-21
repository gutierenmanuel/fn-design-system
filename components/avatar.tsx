import * as React from 'react'
import { Avatar as MantineAvatar } from '@mantine/core'

type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

const sizeMap: Record<AvatarSize, string> = {
  xs: 'sm',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
}

interface AvatarProps extends React.ComponentPropsWithoutRef<'div'> {
  src?: string
  alt?: string
  fallback?: string
  initials?: string
  size?: AvatarSize
}

function getInitials(name?: string): string {
  if (!name) return '?'
  const parts = name.trim().split(/\s+/)
  const first = parts[0] ?? ''
  const last = parts[parts.length - 1] ?? ''
  if (parts.length === 1) return first.slice(0, 2).toUpperCase()
  return ((first[0] ?? '') + (last[0] ?? '')).toUpperCase()
}

/** Kept for backwards compatibility */
const avatarVariants = sizeMap

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, size = 'md', src, alt, fallback, initials, ...props }, ref) => {
    const displayInitials = initials ?? getInitials(fallback ?? alt)

    return (
      <MantineAvatar
        ref={ref}
        data-slot="avatar"
        src={src}
        alt={alt ?? ''}
        size={sizeMap[size]}
        radius="xl"
        className={className}
        {...props}
      >
        {displayInitials}
      </MantineAvatar>
    )
  }
)
Avatar.displayName = 'Avatar'

export { Avatar, avatarVariants }
export type { AvatarProps, AvatarSize }
