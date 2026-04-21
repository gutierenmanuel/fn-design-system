import { LoadingOverlay } from '@mantine/core'

interface FnLoadingOverlayProps {
  visible: boolean
  loaderSize?: number | string
  overlayBlur?: number
  overlayOpacity?: number
}

function FnLoadingOverlay({
  visible,
  loaderSize,
  overlayBlur = 2,
  overlayOpacity = 0.5,
}: FnLoadingOverlayProps) {
  return (
    <LoadingOverlay
      visible={visible}
      loaderProps={loaderSize ? { size: loaderSize } : undefined}
      overlayProps={{ blur: overlayBlur, backgroundOpacity: overlayOpacity }}
    />
  )
}

export { FnLoadingOverlay }
export type { FnLoadingOverlayProps }
