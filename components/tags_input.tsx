import { TagsInput as MantineTagsInput, type TagsInputProps as MantineTagsInputProps } from '@mantine/core'

interface TagsInputProps extends MantineTagsInputProps {}

function TagsInput(props: TagsInputProps) {
  return <MantineTagsInput {...props} />
}

export { TagsInput }
export type { TagsInputProps }
