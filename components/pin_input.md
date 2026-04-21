---
name: pin_input
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "PinInput(props: PinInputProps): JSX.Element"
description: "Input de código PIN/OTP con campos individuales y autocompletado. Wrapper sobre Mantine PinInput."
tags: [pin, otp, code, input, form, component, ui, mantine]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: ["@mantine/core"]
output: "Componente PinInput que renderiza campos individuales por dígito con soporte para autocompletado OTP, máscaras y teclado numérico o alfanumérico"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/pin_input.tsx"
props:
  - name: length
    type: "number"
    required: false
    description: "Número de campos individuales del PIN (por defecto 4)"
  - name: type
    type: "'number' | 'alphanumeric'"
    required: false
    description: "Tipo de caracteres aceptados — solo números o también letras"
  - name: mask
    type: "boolean"
    required: false
    description: "Oculta los caracteres ingresados como contraseña"
  - name: oneTimeCode
    type: "boolean"
    required: false
    description: "Activa el atributo autocomplete=one-time-code para OTP en móvil"
  - name: value
    type: "string"
    required: false
    description: "Valor actual del PIN (controlled)"
  - name: onChange
    type: "(value: string) => void"
    required: false
    description: "Callback al cambiar cualquier campo"
  - name: onComplete
    type: "(value: string) => void"
    required: false
    description: "Callback cuando todos los campos están completos"
  - name: placeholder
    type: "string"
    required: false
    description: "Carácter placeholder en cada campo vacío"
  - name: disabled
    type: "boolean"
    required: false
    description: "Deshabilita todos los campos"
  - name: size
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'"
    required: false
    description: "Tamaño visual de los campos"
emits: [onChange, onComplete]
has_state: true
framework: react
variant: [default]
---

## Ejemplo

```tsx
import { PinInput } from '@fn_library'

// PIN numérico de 4 dígitos
<PinInput
  length={4}
  type="number"
  onComplete={(value) => console.log('PIN completo:', value)}
/>

// OTP de 6 dígitos con autocompletado móvil
<PinInput
  length={6}
  type="number"
  oneTimeCode
  onComplete={handleOtpSubmit}
/>

// PIN enmascarado alfanumérico
<PinInput
  length={5}
  type="alphanumeric"
  mask
  placeholder="*"
  value={pin}
  onChange={setPin}
/>
```

## Notas

- Wrapper directo sobre `PinInput` de `@mantine/core` v9. Todas las props de Mantine PinInput son válidas.
- `oneTimeCode` genera `autocomplete="one-time-code"` para que el browser/SMS sugiera el código automáticamente.
- Cada campo avanza al siguiente automáticamente al completarse.
- Soporta navegación con teclado (flechas, backspace) entre campos.
