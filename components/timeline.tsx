import * as React from 'react'
import { Timeline, Text } from '@mantine/core'

interface TimelineItem {
  title: string
  description?: string
  icon?: React.ReactNode
  color?: string
  time?: string
}

interface FnTimelineProps {
  items: TimelineItem[]
  active?: number
  bulletSize?: number
}

function FnTimeline({
  items,
  active = -1,
  bulletSize = 20,
}: FnTimelineProps) {
  return (
    <Timeline active={active} bulletSize={bulletSize}>
      {items.map((item, i) => (
        <Timeline.Item
          key={i}
          title={item.title}
          bullet={item.icon}
          color={item.color}
        >
          {item.time && (
            <Text size="xs" c="dimmed" mt={2}>{item.time}</Text>
          )}
          {item.description && (
            <Text size="sm" mt={4}>{item.description}</Text>
          )}
        </Timeline.Item>
      ))}
    </Timeline>
  )
}

export { FnTimeline }
export type { FnTimelineProps, TimelineItem }
