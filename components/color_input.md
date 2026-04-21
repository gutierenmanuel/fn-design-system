---
name: color_input
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "ColorInput(props: ColorInputProps): JSX.Element"
description: "Selector de color con picker, swatches predefinidos y eye dropper. Soporta hex, rgb, hsl con alpha. Wrapper sobre Mantine ColorInput."
tags: [color, picker, input, form, component, ui, interactive, mantine]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: ["@mantine/core"]
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/color_input.tsx"
framework: react
has_state: true
props:
  - name: format
    type: "\"hex\" | \"hexa\" | \"rgb\" | \"rgba\" | \"hsl\" | \"hsla\""
    required: false
    description: "Formato de color a usar en el valor. Por defecto hex."
  - name: swatches
    type: "string[]"
    required: false
    description: "Lista de colores predefinidos mostrados como swatches en el picker."
  - name: withEyeDropper
    type: "boolean"
    required: false
    description: "Muestra el boton eye dropper para seleccionar color de la pantalla."
  - name: withPicker
    type: "boolean"
    required: false
    description: "Muestra el color picker interactivo. Por defecto true."
  - name: value
    type: "string"
    required: false
    description: "Valor controlado del color en el formato especificado."
  - name: onChange
    type: "(value: string) => void"
    required: false
    description: "Callback invocado cuando el color cambia."
  - name: label
    type: "React.ReactNode"
    required: false
    description: "Etiqueta del campo."
  - name: placeholder
    type: "string"
    required: false
    description: "Placeholder del input de texto."
  - name: disabled
    type: "boolean"
    required: false
    description: "Deshabilita el input."
  - name: size
    type: "\"xs\" | \"sm\" | \"md\" | \"lg\" | \"xl\""
    required: false
    description: "Tamanio del componente."
emits: [onChange, onChangeEnd]
output: "Componente ColorInput que renderiza input de color con picker desplegable y swatches"
params: []
---

## Ejemplo

```tsx
import { ColorInput } from '@fn_library/color_input'

// Basico con hex (default)
<ColorInput
  label="Color primario"
  placeholder="#228be6"
/>

// Con swatches predefinidos
<ColorInput
  label="Color de marca"
  swatches={['#2e2e2e', '#868e96', '#fa5252', '#e64980', '#be4bdb', '#228be6', '#15aabf', '#12b886', '#40c057', '#82c91e', '#fab005', '#fd7e14']}
  swatchesPerRow={7}
  placeholder="Elige un color"
/>

// Con rgba y eye dropper
<ColorInput
  label="Color con transparencia"
  format="rgba"
  withEyeDropper
  value="rgba(34, 139, 230, 0.5)"
  onChange={(value) => console.log(value)}
/>
```

## Notas

Wrapper directo sobre `ColorInput` de Mantine v9. Hereda todas las props de Mantine sin restricciones.

El eye dropper (`withEyeDropper`) solo funciona en browsers que soporten la EyeDropper API (Chrome/Edge). En Firefox no aparece el boton automaticamente.

Cuando `format` es `hex` o `hsl`, el valor no incluye canal alpha. Para transparencia usar `hexa`, `rgba` o `hsla`.
