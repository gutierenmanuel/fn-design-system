import { FileInput as MantineFileInput, type FileInputProps as MantineFileInputProps } from '@mantine/core'

interface FileInputProps extends MantineFileInputProps {}

function FileInput(props: FileInputProps) {
  return <MantineFileInput {...props} />
}

export { FileInput }
export type { FileInputProps }
