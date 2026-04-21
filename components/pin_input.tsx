import { PinInput as MantinePinInput, type PinInputProps as MantinePinInputProps } from '@mantine/core'

interface PinInputProps extends MantinePinInputProps {}

function PinInput(props: PinInputProps) {
  return <MantinePinInput {...props} />
}

export { PinInput }
export type { PinInputProps }
