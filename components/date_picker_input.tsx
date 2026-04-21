import { DatePickerInput as MantineDatePickerInput, DatePicker as MantineDatePicker } from '@mantine/dates'
import type { DatePickerInputProps as MantineDatePickerInputProps, DatePickerProps as MantineDatePickerProps } from '@mantine/dates'
import '@mantine/dates/styles.css'

interface DatePickerInputProps extends MantineDatePickerInputProps<'default'> {}
interface DatePickerProps extends MantineDatePickerProps<'default'> {}

function DatePickerInput(props: DatePickerInputProps) {
  return <MantineDatePickerInput {...props} />
}

function DatePicker(props: DatePickerProps) {
  return <MantineDatePicker {...props} />
}

export { DatePickerInput, DatePicker }
export type { DatePickerInputProps, DatePickerProps }
