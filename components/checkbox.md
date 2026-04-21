---
name: checkbox
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "Checkbox(props: CheckboxProps): JSX.Element"
description: "Input booleano accesible con label opcional y variante indeterminate. Mantine Checkbox."
tags: [checkbox, component, ui, interactive, form, mantine]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: ["@mantine/core"]
output: "Componente Checkbox que renderiza input booleano accesible con label opcional y estado indeterminate"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/checkbox.tsx"
props:
  - name: label
    type: "string"
    required: false
    description: "Texto de etiqueta visible junto al checkbox"
  - name: indeterminate
    type: "boolean"
    required: false
    description: "Estado indeterminate (guion) en vez de checked/unchecked"
  - name: checked
    type: "boolean"
    required: false
    description: "Estado controlado del checkbox"
  - name: defaultChecked
    type: "boolean"
    required: false
    description: "Estado inicial no controlado"
  - name: disabled
    type: "boolean"
    required: false
    description: "Deshabilita el checkbox"
  - name: onCheckedChange
    type: "(checked: boolean) => void"
    required: false
    description: "Callback cuando cambia el estado"
emits: [onCheckedChange]
has_state: false
framework: react
variant: []
---

## Ejemplo

```tsx
// Basico
<Checkbox label="Acepto los terminos" />

// Controlado
<Checkbox
  label="Seleccionar todos"
  checked={allSelected}
  indeterminate={someSelected}
  onCheckedChange={setAllSelected}
/>

// Sin label
<Checkbox checked={isActive} onCheckedChange={setIsActive} />
```

## Notas

Usa Mantine Checkbox para accesibilidad completa (keyboard, ARIA). El estado indeterminate se muestra con un guion horizontal. El callback onCheckedChange se adapta desde el onChange nativo de Mantine.
