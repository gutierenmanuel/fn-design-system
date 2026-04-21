---
name: password_input
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "PasswordInput(props: PasswordInputProps): JSX.Element"
description: "Input de contraseña con toggle de visibilidad y soporte para indicador de fortaleza. Wrapper sobre Mantine PasswordInput."
tags: [password, input, form, security, component, ui, interactive, mantine]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: ["@mantine/core"]
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/password_input.tsx"
framework: react
has_state: true
props:
  - name: visible
    type: "boolean"
    required: false
    description: "Controla externamente si la contraseña es visible"
  - name: onVisibilityChange
    type: "(visible: boolean) => void"
    required: false
    description: "Callback cuando el usuario cambia la visibilidad"
  - name: visibilityToggleIcon
    type: "React.FC<{ reveal: boolean }>"
    required: false
    description: "Icono personalizado para el botón de toggle"
  - name: value
    type: "string"
    required: false
    description: "Valor controlado del input"
  - name: onChange
    type: "(event: React.ChangeEvent<HTMLInputElement>) => void"
    required: false
    description: "Callback al cambiar el valor"
  - name: label
    type: "React.ReactNode"
    required: false
    description: "Etiqueta del campo"
  - name: placeholder
    type: "string"
    required: false
    description: "Texto placeholder cuando está vacío"
  - name: error
    type: "React.ReactNode"
    required: false
    description: "Mensaje de error a mostrar bajo el input"
  - name: disabled
    type: "boolean"
    required: false
    description: "Deshabilita el input"
  - name: size
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'"
    required: false
    description: "Tamaño del componente"
emits: [onChange, onVisibilityChange]
params:
  - name: props
    desc: "Props de Mantine PasswordInput: visible, onVisibilityChange, visibilityToggleIcon, value, onChange, label, placeholder, error, disabled, size y cualquier prop HTML nativa de input"
output: "Componente PasswordInput que renderiza input enmascarado con botón de mostrar/ocultar"
---

## Ejemplo

```tsx
import { PasswordInput } from '@fn_library'

// Uso básico
function LoginForm() {
  return (
    <PasswordInput
      label="Contraseña"
      placeholder="Tu contraseña"
    />
  )
}

// Con visibilidad controlada
import { useState } from 'react'

function ControlledPasswordInput() {
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState('')

  return (
    <PasswordInput
      label="Contraseña"
      placeholder="Ingresa tu contraseña"
      value={value}
      onChange={(e) => setValue(e.currentTarget.value)}
      visible={visible}
      onVisibilityChange={setVisible}
      error={value.length > 0 && value.length < 8 ? 'Mínimo 8 caracteres' : undefined}
    />
  )
}
```

## Notas

Wrapper delgado sobre `PasswordInput` de Mantine v9. El toggle de visibilidad es nativo de Mantine y se controla opcionalmente con `visible` + `onVisibilityChange`. Soporta todas las props de Mantine incluyendo `strengthMeter` para indicadores de fortaleza. Los iconos del toggle deben venir de `@tabler/icons-react`.
