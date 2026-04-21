---
name: label
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "Label(props: LabelHTMLAttributes): JSX.Element"
description: "Etiqueta de formulario accesible con soporte para estados disabled. Mantine Text con component=label."
tags: [label, form, component, ui, mantine]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: ["@mantine/core"]
output: "Componente Label que renderiza etiqueta de formulario accesible con soporte para estados disabled"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/label.tsx"
props:
  - name: className
    type: "string"
    required: false
    description: "Clases CSS adicionales"
emits: []
has_state: false
framework: react
variant: [default]
source_repo: "https://gitea-dgg044oo04woo4ggcsws4gk0.organic-machine.com/Bl4cksmith/Frontend_Library"
source_license: "MIT"
source_file: "frontend/src/components/ui/label.tsx"
---

## Ejemplo

```tsx
<Label htmlFor="email">Email</Label>
```
