import * as React from "react"
import { Radio } from "@mantine/core"

interface RadioGroupProps {
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  disabled?: boolean
  orientation?: "horizontal" | "vertical"
  className?: string
  children?: React.ReactNode
}

function RadioGroup({ className, value, defaultValue, onValueChange, orientation, children, ...props }: RadioGroupProps) {
  return (
    <Radio.Group
      data-slot="radio-group"
      value={value}
      defaultValue={defaultValue}
      onChange={(val) => onValueChange?.(val)}
      className={className}
      {...props}
    >
      <div style={{ display: 'flex', flexDirection: orientation === 'horizontal' ? 'row' : 'column', gap: 'var(--mantine-spacing-sm)' }}>
        {children}
      </div>
    </Radio.Group>
  )
}

interface RadioGroupItemProps {
  value: string
  label?: string
  disabled?: boolean
  className?: string
  labelClassName?: string
  id?: string
}

function RadioGroupItem({ className, label, id, disabled, value, ...props }: RadioGroupItemProps) {
  return (
    <Radio
      id={id}
      data-slot="radio-group-item"
      value={value}
      label={label}
      disabled={disabled}
      className={className}
      size="sm"
      {...props}
    />
  )
}

export { RadioGroup, RadioGroupItem }
export type { RadioGroupItemProps }
