---
name: toast
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "Toast(props: ToastProps): JSX.Element"
description: "Notificaciones temporales con variantes semanticas (success, error, warning, info), iconos automaticos, auto-dismiss y provider con hook useToast."
tags: [toast, notification, alert, component, ui, interactive, mantine]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: ["@mantine/notifications", "@mantine/core"]
output: "Componente Toast que renderiza notificación temporal con variantes semánticas, auto-dismiss y hook useToast"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/toast.tsx"
props:
  - name: variant
    type: "'default' | 'success' | 'error' | 'warning' | 'info'"
    required: false
    description: "Variante semantica con icono automatico (default: default)"
  - name: title
    type: "string"
    required: false
    description: "Titulo de la notificacion"
  - name: description
    type: "string"
    required: false
    description: "Texto descriptivo secundario"
  - name: action
    type: "React.ReactNode"
    required: false
    description: "Accion opcional (boton, link) debajo del contenido"
  - name: onClose
    type: "() => void"
    required: false
    description: "Callback al cerrar. Muestra el boton X si se provee."
  - name: duration
    type: "number"
    required: false
    description: "Duracion en ms antes del auto-dismiss (default: 5000, 0 = persistente)"
emits: [onClose]
has_state: true
framework: react
variant: [default, success, error, warning, info]
---

## Ejemplo

```tsx
// 1. Envolver la app con el provider
<ToastProvider position="bottom-right">
  <App />
</ToastProvider>

// 2. Usar el hook en cualquier componente
function MyComponent() {
  const { toast } = useToast()

  return (
    <Button onClick={() => toast({
      variant: "success",
      title: "Guardado",
      description: "Los cambios se guardaron correctamente.",
    })}>
      Guardar
    </Button>
  )
}

// Toast con accion
toast({
  variant: "error",
  title: "Error al guardar",
  description: "Intenta de nuevo.",
  action: <Button size="sm" variant="outline">Reintentar</Button>,
  duration: 0, // persistente hasta cerrar manualmente
})

// Toast individual sin provider
<Toast variant="info" title="Informacion" description="Texto descriptivo" onClose={() => {}} />
```

## Notas

Migrado a @mantine/notifications. useToast() delega a notifications.show(). ToastProvider es un passthrough (Mantine maneja el estado globalmente via Notifications en mantine_provider). Toast puede usarse como componente inline con Paper. Variantes mapean a colores Mantine: success→teal, error→red, warning→yellow, info→blue.
