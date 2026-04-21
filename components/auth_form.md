---
name: auth_form
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "AuthForm(config: AuthFormConfig): ReactElement"
description: "Genera página de autenticación con toggle login/register, social buttons opcionales, campos extra en registro y validación. Basado en Mantine AuthenticationForm."
tags: [auth, login, register, form, page, ui, mantine, toggle]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: ["@mantine/core", "@mantine/hooks"]
has_state: true
framework: react
emits: [onSubmit]
params:
  - name: title
    desc: "Título principal que aparece en la cabecera del formulario (default: 'Welcome')"
  - name: socialButtons
    desc: "Lista de botones de login social, cada uno con label, icono opcional y callback onClick"
  - name: extraFields
    desc: "Campos de texto adicionales que se muestran únicamente en el modo registro (ej: nombre, empresa)"
  - name: onSubmit
    desc: "Callback invocado al enviar el formulario con type ('login'|'register'), email, password y valores de extraFields"
  - name: defaultType
    desc: "Modo inicial del formulario: 'login' (default) o 'register'"
  - name: paperProps
    desc: "Props de Mantine Paper para personalizar el contenedor (shadow, radius, p, etc.)"
output: "Página de autenticación completa con toggle login/register, campos email/password, botones sociales opcionales y campo de términos en registro"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/auth_form.tsx"
source_repo: ""
source_license: ""
source_file: ""
---

## Ejemplo

### Config mínima (solo login)

```tsx
import { AuthForm } from '@fn_library/auth_form'

function LoginPage() {
  return (
    <AuthForm
      title="Acceder"
      onSubmit={({ type, email, password }) => {
        console.log(type, email, password)
      }}
    />
  )
}
```

### Con social buttons y campos extra en registro

```tsx
import { AuthForm } from '@fn_library/auth_form'
import { IconBrandGoogle, IconBrandGithub } from '@tabler/icons-react'

function AuthPage() {
  return (
    <AuthForm
      title="fn_registry"
      defaultType="register"
      socialButtons={[
        { label: 'Google', icon: <IconBrandGoogle size={16} />, onClick: () => signInWithGoogle() },
        { label: 'GitHub', icon: <IconBrandGithub size={16} />, onClick: () => signInWithGitHub() },
      ]}
      extraFields={[
        { name: 'name', label: 'Nombre completo', placeholder: 'Lucas García', required: true },
        { name: 'company', label: 'Empresa', placeholder: 'Acme Corp' },
      ]}
      onSubmit={({ type, email, password, name, company }) => {
        if (type === 'register') {
          registerUser({ email, password, name, company })
        } else {
          loginUser({ email, password })
        }
      }}
    />
  )
}
```

## Notas

Función con estado interno (useToggle, useState de @mantine/hooks). Gestiona el toggle entre login y register sin prop externa — el padre solo recibe el valor final via onSubmit.type.

Los `extraFields` solo se renderizan en modo register. El campo de términos y condiciones (Checkbox) también es exclusivo del registro.

Los `socialButtons` se renderizan con un Divider "O continúa con email" cuando están presentes. Sin socialButtons el Divider no aparece.

El campo `password` usa PasswordInput de Mantine, que incluye el toggle de visibilidad integrado.
