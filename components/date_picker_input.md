---
name: date_picker_input
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "DatePickerInput(props: DatePickerInputProps): JSX.Element"
description: "Selector de fecha con input y calendario desplegable. Soporta fecha simple, múltiple y rango. Wrapper sobre Mantine DatePickerInput."
tags: [date, picker, calendar, form, component, ui, interactive, mantine]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: ["@mantine/dates"]
output: "Componente DatePickerInput que renderiza input con calendario para selección de fechas"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/date_picker_input.tsx"
props:
  - name: type
    type: "'default' | 'multiple' | 'range'"
    required: false
    description: "Modo de selección — fecha simple, múltiples fechas, o rango de fechas"
  - name: value
    type: "DateValue | DateValue[] | [DateValue, DateValue] | null"
    required: false
    description: "Fecha o fechas seleccionadas (controlled)"
  - name: onChange
    type: "(value: DateValue | DateValue[] | [DateValue, DateValue] | null) => void"
    required: false
    description: "Callback al cambiar la selección de fecha"
  - name: valueFormat
    type: "string"
    required: false
    description: "Formato de la fecha mostrada en el input (ej: 'DD/MM/YYYY')"
  - name: clearable
    type: "boolean"
    required: false
    description: "Permite limpiar la selección de fecha"
  - name: label
    type: "string"
    required: false
    description: "Label del campo"
  - name: placeholder
    type: "string"
    required: false
    description: "Texto cuando no hay fecha seleccionada"
  - name: minDate
    type: "Date"
    required: false
    description: "Fecha mínima seleccionable"
  - name: maxDate
    type: "Date"
    required: false
    description: "Fecha máxima seleccionable"
  - name: disabled
    type: "boolean"
    required: false
    description: "Deshabilitar el selector"
  - name: size
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'"
    required: false
    description: "Tamaño del componente"
emits: [onChange]
has_state: true
framework: react
variant: [default]
params:
  - name: props
    desc: "Props del componente DatePickerInput — incluye type (modo de selección), value, onChange, valueFormat, clearable, label, placeholder, minDate, maxDate, disabled y size"
---

## Ejemplo

```tsx
import { DatePickerInput, DatePicker } from '@fn_library'
import { useState } from 'react'

// Fecha simple
function SingleDateExample() {
  const [value, setValue] = useState<Date | null>(null)
  return (
    <DatePickerInput
      label="Fecha de inicio"
      placeholder="Selecciona una fecha"
      value={value}
      onChange={setValue}
      clearable
    />
  )
}

// Rango de fechas
function RangeDateExample() {
  const [range, setRange] = useState<[Date | null, Date | null]>([null, null])
  return (
    <DatePickerInput
      type="range"
      label="Periodo"
      placeholder="Selecciona un rango"
      value={range}
      onChange={setRange}
      valueFormat="DD/MM/YYYY"
    />
  )
}

// Múltiples fechas
function MultipleDateExample() {
  const [dates, setDates] = useState<Date[]>([])
  return (
    <DatePickerInput
      type="multiple"
      label="Días seleccionados"
      placeholder="Selecciona fechas"
      value={dates}
      onChange={setDates}
      minDate={new Date()}
    />
  )
}

// DatePicker inline (sin input)
function InlineDateExample() {
  const [value, setValue] = useState<Date | null>(null)
  return (
    <DatePicker
      value={value}
      onChange={setValue}
    />
  )
}
```

## Notas

- Wrapper directo sobre `DatePickerInput` y `DatePicker` de `@mantine/dates` v9. Todas las props de Mantine son válidas.
- Requiere importar `@mantine/dates/styles.css` — este wrapper ya lo incluye.
- El prop `type` controla el modo: `'default'` (fecha simple), `'multiple'` (varias fechas), `'range'` (rango con inicio y fin).
- `DatePicker` es el calendario inline sin input — útil para formularios donde el calendario debe estar siempre visible.
- `valueFormat` acepta tokens de dayjs (ej: `'DD/MM/YYYY'`, `'MMMM D, YYYY'`).
- Re-exporta también `DatePicker` de `@mantine/dates` con el mismo patrón de wrapper.
