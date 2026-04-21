import { ColorInput as MantineColorInput, type ColorInputProps as MantineColorInputProps } from '@mantine/core'

interface ColorInputProps extends MantineColorInputProps {}

function ColorInput(props: ColorInputProps) {
  return <MantineColorInput {...props} />
}

export { ColorInput }
export type { ColorInputProps }
