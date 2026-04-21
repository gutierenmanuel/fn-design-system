import * as React from 'react'
import { RingProgress } from '@mantine/core'
import type { RingProgressSection } from '@mantine/core'

interface FnRingProgressProps {
  sections: RingProgressSection[]
  size?: number
  thickness?: number
  label?: React.ReactNode
  rootColor?: string
}

function FnRingProgress({
  sections,
  size = 120,
  thickness = 12,
  label,
  rootColor,
}: FnRingProgressProps) {
  return (
    <RingProgress
      sections={sections}
      size={size}
      thickness={thickness}
      label={label}
      rootColor={rootColor}
    />
  )
}

export { FnRingProgress }
export type { FnRingProgressProps }
