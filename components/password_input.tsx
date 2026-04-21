import { PasswordInput as MantinePasswordInput, type PasswordInputProps as MantinePasswordInputProps } from '@mantine/core'

interface PasswordInputProps extends MantinePasswordInputProps {}

function PasswordInput(props: PasswordInputProps) {
  return <MantinePasswordInput {...props} />
}

export { PasswordInput }
export type { PasswordInputProps }
