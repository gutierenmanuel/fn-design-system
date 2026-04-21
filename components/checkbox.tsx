import { Checkbox as MantineCheckbox } from "@mantine/core"

interface CheckboxProps {
  label?: string
  indeterminate?: boolean
  className?: string
  labelClassName?: string
  checked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  onCheckedChange?: (checked: boolean) => void
  id?: string
}

function Checkbox({ className, label, id, indeterminate, checked, defaultChecked, disabled, onCheckedChange, ...props }: CheckboxProps) {
  return (
    <MantineCheckbox
      id={id}
      data-slot="checkbox"
      label={label}
      indeterminate={indeterminate}
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

export { Checkbox }
export type { CheckboxProps }
