import { notifications } from '@mantine/notifications'
import { Paper, Text, Group, CloseButton } from '@mantine/core'

type ToastVariant = 'default' | 'success' | 'error' | 'warning' | 'info'

interface ToastProps {
  variant?: ToastVariant
  title?: string
  description?: string
  action?: React.ReactNode
  onClose?: () => void
  className?: string
  children?: React.ReactNode
}

const variantColors: Record<ToastVariant, string | undefined> = {
  default: undefined,
  success: 'teal',
  error: 'red',
  warning: 'yellow',
  info: 'blue',
}

function Toast({ title, description, onClose, className }: ToastProps) {
  return (
    <Paper withBorder shadow="md" p="md" radius="md" className={className}>
      <Group justify="space-between" align="flex-start">
        <div>
          {title && <Text size="sm" fw={600}>{title}</Text>}
          {description && <Text size="sm" c="dimmed">{description}</Text>}
        </div>
        {onClose && <CloseButton size="sm" onClick={onClose} />}
      </Group>
    </Paper>
  )
}

const toastVariants = {
  default: 'default',
  success: 'success',
  error: 'error',
  warning: 'warning',
  info: 'info',
} as const

interface ToastViewportProps {
  position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'
  children?: React.ReactNode
  className?: string
}

function ToastViewport({ children }: ToastViewportProps) {
  return <>{children}</>
}

type ToastEntry = ToastProps & {
  id: string
  duration?: number
}

interface ToastProviderContextValue {
  toasts: ToastEntry[]
  toast: (props: Omit<ToastEntry, 'id'>) => string
  dismiss: (id: string) => void
  dismissAll: () => void
}

function ToastProvider({ children }: { children: React.ReactNode; position?: ToastViewportProps['position'] }) {
  return <>{children}</>
}

function useToast(): ToastProviderContextValue {
  return {
    toasts: [],
    toast: (props: Omit<ToastEntry, 'id'>) => {
      const id = Math.random().toString(36).slice(2)
      notifications.show({
        id,
        title: props.title,
        message: props.description ?? '',
        color: variantColors[props.variant ?? 'default'],
        autoClose: props.duration === 0 ? false : (props.duration ?? 5000),
      })
      return id
    },
    dismiss: (id: string) => {
      notifications.hide(id)
    },
    dismissAll: () => {
      notifications.cleanQueue()
      notifications.clean()
    },
  }
}

export { Toast, ToastProvider, ToastViewport, toastVariants, useToast }
export type { ToastEntry, ToastProps, ToastViewportProps }
