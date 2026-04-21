---
name: textarea
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "Textarea(props: TextareaProps): JSX.Element"
description: "Input multilinea accesible con auto-resize opcional. Mantine Textarea con autosize."
tags: [textarea, component, ui, interactive, form, mantine]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: ["@mantine/core"]
output: "Componente Textarea que renderiza input multilinea accesible con auto-resize opcional"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/textarea.tsx"
props:
  - name: autoResize
    type: "boolean"
    required: false
    description: "Ajusta la altura automaticamente al contenido (default: false)"
  - name: placeholder
    type: "string"
    required: false
    description: "Texto placeholder"
  - name: disabled
    type: "boolean"
    required: false
    description: "Deshabilita el textarea"
  - name: rows
    type: "number"
    required: false
    description: "Numero de filas visibles iniciales"
  - name: className
    type: "string"
    required: false
    description: "Clases CSS adicionales"
emits: [onChange, onFocus, onBlur]
has_state: false
framework: react
variant: []
---

## Ejemplo

```tsx
// Basico
<Textarea placeholder="Escribe aqui..." rows={4} />

// Con auto-resize
<Textarea autoResize placeholder="Crece automaticamente..." />

// Controlado
<Textarea value={text} onChange={(e) => setText(e.target.value)} />

// Con validacion
<Textarea aria-invalid={!!error} />
```

## Notas

Usa Mantine Textarea con autosize nativo (reemplaza el auto-resize manual anterior). forwardRef mantenido para compatibilidad con form libraries.
