import { Switch } from "@mantine/core"

interface SwitchToggleProps {
  label?: string
  labelPosition?: "left" | "right"
  className?: string
  checked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  onCheckedChange?: (checked: boolean) => void
  id?: string
}

function SwitchToggle({ className, label, labelPosition = "right", id, checked, defaultChecked, disabled, onCheckedChange, ...props }: SwitchToggleProps) {
  return (
    <Switch
      id={id}
      data-slot="switch"
      label={label}
      labelPosition={labelPosition}
      checked={checked}
      defaultChecked={defaultChecked}
      disabled={disabled}
      onChange={(event) => onCheckedChange?.(event.currentTarget.checked)}
      className={className}
      size="sm"
      {...props}
    />
  )
}

export { SwitchToggle }
export type { SwitchToggleProps }
