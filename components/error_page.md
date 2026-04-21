---
name: error_page
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "ErrorPage(config: ErrorPageConfig): JSX.Element"
description: "Genera página de error con código grande, título, descripción y acciones. Soporta 404, 500, 403 y cualquier código custom."
tags: [error, 404, 500, page, empty-state, ui, mantine]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: [react, "@mantine/core"]
params:
  - name: code
    desc: "Código de error numérico o string a mostrar prominentemente (404, 500, 403, o cualquier valor custom)"
  - name: title
    desc: "Título del error mostrado bajo el código. Default: 'Page not found'"
  - name: description
    desc: "Descripción explicativa del error. Default: mensaje genérico de página no encontrada"
  - name: actionLabel
    desc: "Texto del botón de acción principal. Default: 'Go back to home'"
  - name: onAction
    desc: "Callback invocado al pulsar el botón de acción principal"
  - name: extraActions
    desc: "Nodos React adicionales renderizados junto al botón principal (botones secundarios, links, etc.)"
output: "Página de error centrada con código prominente, mensaje descriptivo y botones de acción"
has_state: false
framework: react
emits: [onAction]
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/error_page.tsx"
---

## Ejemplo

```tsx
import { ErrorPage } from '@fn_library/error_page'
import { Button } from '@mantine/core'

// 404 con defaults
<ErrorPage onAction={() => navigate('/')} />

// 500 custom
<ErrorPage
  code={500}
  title="Internal Server Error"
  description="Something went wrong on our end. Please try again later or contact support."
  actionLabel="Retry"
  onAction={() => window.location.reload()}
/>

// 403 con acciones extra
<ErrorPage
  code={403}
  title="Access Denied"
  description="You don't have permission to view this page. Contact your administrator to request access."
  actionLabel="Go to Dashboard"
  onAction={() => navigate('/dashboard')}
  extraActions={
    <Button variant="outline" size="md" onClick={() => navigate('/login')}>
      Switch Account
    </Button>
  }
/>
```

## Notas

El código de error se muestra con `fz={120}` y opacidad reducida (0.25) para crear un efecto visual de fondo sin distraer del mensaje. Acepta `number | string` para soportar códigos custom como "503" o "Maintenance".
