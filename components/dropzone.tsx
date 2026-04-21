import { Dropzone as MantineDropzone, IMAGE_MIME_TYPE, MIME_TYPES } from '@mantine/dropzone'
import type { DropzoneProps as MantineDropzoneProps } from '@mantine/dropzone'
import '@mantine/dropzone/styles.css'

interface DropzoneProps extends Partial<MantineDropzoneProps> {
  children: React.ReactNode
}

function Dropzone({ children, ...props }: DropzoneProps) {
  return <MantineDropzone onDrop={() => {}} {...props}>{children}</MantineDropzone>
}

// Re-export sub-components and constants
const DropzoneAccept = MantineDropzone.Accept
const DropzoneReject = MantineDropzone.Reject
const DropzoneIdle = MantineDropzone.Idle
const DropzoneFullScreen = MantineDropzone.FullScreen

export { Dropzone, DropzoneAccept, DropzoneReject, DropzoneIdle, DropzoneFullScreen, IMAGE_MIME_TYPE, MIME_TYPES }
export type { DropzoneProps }
