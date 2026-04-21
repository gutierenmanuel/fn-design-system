import { NumberInput } from '@mantine/core'

interface FnNumberInputProps {
  value?: number | string
  onChange?: (value: number | string) => void
  min?: number
  max?: number
  step?: number
  label?: string
  description?: string
  error?: string
  placeholder?: string
  prefix?: string
  suffix?: string
}

function FnNumberInput({
  value,
  onChange,
  min,
  max,
  step,
  label,
  description,
  error,
  placeholder,
  prefix,
  suffix,
}: FnNumberInputProps) {
  return (
    <NumberInput
      value={value}
      onChange={onChange}
      min={min}
      max={max}
      step={step}
      label={label}
      description={description}
      error={error}
      placeholder={placeholder}
      prefix={prefix}
      suffix={suffix}
    />
  )
}

export { FnNumberInput }
export type { FnNumberInputProps }
