---
name: file_input
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "FileInput(props: FileInputProps): JSX.Element"
description: "Input de archivos con soporte para múltiples archivos, tipos aceptados y botón de limpiar. Wrapper sobre Mantine FileInput."
tags: [file, upload, input, form, component, ui, interactive, mantine]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: ["@mantine/core"]
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/file_input.tsx"
framework: react
has_state: true
emits: [onChange]
props:
  - name: multiple
    type: "boolean"
    required: false
    description: "Permite seleccionar múltiples archivos"
  - name: accept
    type: "string"
    required: false
    description: "Tipos MIME o extensiones aceptadas (ej: 'image/*', '.pdf,.docx')"
  - name: clearable
    type: "boolean"
    required: false
    description: "Muestra botón para limpiar el archivo seleccionado"
  - name: value
    type: "File | File[] | null"
    required: false
    description: "Valor controlado del input"
  - name: onChange
    type: "(value: File | File[] | null) => void"
    required: false
    description: "Callback que se dispara al seleccionar o limpiar un archivo"
  - name: placeholder
    type: "string"
    required: false
    description: "Texto mostrado cuando no hay archivo seleccionado"
  - name: label
    type: "string"
    required: false
    description: "Etiqueta visible sobre el input"
  - name: disabled
    type: "boolean"
    required: false
    description: "Deshabilita el input"
  - name: size
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'"
    required: false
    description: "Tamaño del componente"
params:
  - name: props
    desc: "Props de FileInput: archivo(s) seleccionado(s), tipos aceptados, modo múltiple, estado controlado y apariencia"
output: "Componente FileInput que renderiza input para selección de archivos con preview del nombre"
---

## Ejemplo

```tsx
import { FileInput } from '@fn_library'

// Archivo único
<FileInput
  label="Subir documento"
  placeholder="Selecciona un archivo"
  clearable
/>

// Múltiples archivos
<FileInput
  label="Subir archivos"
  placeholder="Selecciona uno o varios archivos"
  multiple
  clearable
/>

// Solo imágenes
<FileInput
  label="Subir imagen"
  placeholder="Selecciona una imagen"
  accept="image/*"
  clearable
/>
```

## Notas

Wrapper directo sobre `FileInput` de `@mantine/core`. Acepta todas las props de Mantine sin restricciones.

Para `multiple: true`, el tipo de `value` y `onChange` cambia a `File[] | null` automáticamente gracias al tipado genérico de Mantine.

El prop `clearable` añade un ícono de X que permite vaciar la selección sin reabrir el explorador de archivos.
