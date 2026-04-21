---
name: slider
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "Slider(props: SliderProps): JSX.Element | RangeSlider(props: RangeSliderProps): JSX.Element"
description: "Deslizador de valor numérico con marcas, labels y modo rango. Incluye RangeSlider. Wrapper sobre Mantine Slider."
tags: [slider, range, input, numeric, component, ui, mantine]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: ["@mantine/core"]
output: "Componente Slider para selección de un valor numérico en un rango, o RangeSlider para selección de un intervalo [min, max]"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/slider.tsx"
props:
  - name: min
    type: "number"
    required: false
    description: "Valor mínimo del rango (por defecto 0)"
  - name: max
    type: "number"
    required: false
    description: "Valor máximo del rango (por defecto 100)"
  - name: step
    type: "number"
    required: false
    description: "Incremento por paso al deslizar"
  - name: marks
    type: "{ value: number; label?: string }[]"
    required: false
    description: "Marcas en el track con etiquetas opcionales"
  - name: value
    type: "number"
    required: false
    description: "Valor actual del slider (controlled) — para RangeSlider es [number, number]"
  - name: onChange
    type: "(value: number) => void"
    required: false
    description: "Callback mientras se arrastra — para RangeSlider recibe [number, number]"
  - name: onChangeEnd
    type: "(value: number) => void"
    required: false
    description: "Callback al soltar el slider — para RangeSlider recibe [number, number]"
  - name: label
    type: "string | ((value: number) => string) | null"
    required: false
    description: "Tooltip sobre el thumb — función para formatear el valor"
  - name: labelAlwaysOn
    type: "boolean"
    required: false
    description: "Muestra el label siempre visible, no solo al hover"
  - name: disabled
    type: "boolean"
    required: false
    description: "Deshabilita la interacción"
  - name: size
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'"
    required: false
    description: "Grosor del track y tamaño del thumb"
  - name: color
    type: "string"
    required: false
    description: "Color del track activo y el thumb"
emits: [onChange, onChangeEnd]
has_state: true
framework: react
variant: [default, range]
---

## Ejemplo

```tsx
import { Slider, RangeSlider } from '@fn_library'

// Slider básico
<Slider
  value={volume}
  onChange={setVolume}
  min={0}
  max={100}
  step={5}
/>

// Con marcas y label formateado
<Slider
  value={price}
  onChange={setPrice}
  min={0}
  max={1000}
  step={50}
  label={(v) => `$${v}`}
  labelAlwaysOn
  marks={[
    { value: 0, label: '$0' },
    { value: 500, label: '$500' },
    { value: 1000, label: '$1000' },
  ]}
/>

// RangeSlider para seleccionar intervalo
<RangeSlider
  value={priceRange}
  onChange={setPriceRange}
  min={0}
  max={500}
  onChangeEnd={(range) => fetchProducts(range)}
/>
```

## Notas

- Wrapper directo sobre `Slider` y `RangeSlider` de `@mantine/core` v9. Todas las props de Mantine son válidas.
- `RangeSlider` recibe y emite `[number, number]` en lugar de `number`.
- Usar `onChangeEnd` para operaciones costosas (fetch, cálculos) y `onChange` solo para actualizar UI.
- `label={null}` desactiva el tooltip completamente.
