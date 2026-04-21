import * as React from "react"
import { Accordion as MantineAccordion } from "@mantine/core"

interface AccordionItem {
  value: string
  trigger: React.ReactNode
  content: React.ReactNode
  disabled?: boolean
}

interface AccordionProps {
  items?: AccordionItem[]
  type?: "single" | "multiple"
  defaultValue?: string | string[]
  className?: string
  itemClassName?: string
  children?: React.ReactNode
}

function Accordion({ className, type, defaultValue, children }: AccordionProps) {
  if (type === "multiple") {
    return (
      <MantineAccordion
        multiple
        data-slot="accordion"
        className={className}
        defaultValue={Array.isArray(defaultValue) ? defaultValue : undefined}
      >
        {children}
      </MantineAccordion>
    )
  }

  return (
    <MantineAccordion
      data-slot="accordion"
      className={className}
      defaultValue={typeof defaultValue === "string" ? defaultValue : undefined}
    >
      {children}
    </MantineAccordion>
  )
}

interface AccordionItemProps {
  value: string
  className?: string
  children?: React.ReactNode
  disabled?: boolean
}

function AccordionItem({ className, value, children, ...props }: AccordionItemProps) {
  return (
    <MantineAccordion.Item
      data-slot="accordion-item"
      value={value}
      className={className}
      {...props}
    >
      {children}
    </MantineAccordion.Item>
  )
}

function AccordionTrigger({ className, children, ...props }: { className?: string; children?: React.ReactNode }) {
  return (
    <MantineAccordion.Control
      data-slot="accordion-trigger"
      className={className}
      {...props}
    >
      {children}
    </MantineAccordion.Control>
  )
}

function AccordionContent({ className, children, ...props }: { className?: string; children?: React.ReactNode }) {
  return (
    <MantineAccordion.Panel
      data-slot="accordion-content"
      className={className}
      {...props}
    >
      {children}
    </MantineAccordion.Panel>
  )
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }
export type { AccordionItem as AccordionItemData, AccordionProps }
