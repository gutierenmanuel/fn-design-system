---
name: form_field
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "FormField(props: FormFieldProps): JSX.Element"
description: "Wrapper de campo de formulario con label, helper text, error y ARIA automáticos. Inyecta id y aria-describedby a hijos."
tags: [form, field, label, error, component, ui, accessibility]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: ["@mantine/core"]
output: "Componente FormField que renderiza wrapper de campo con label, helper text, error y ARIA automáticos"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/form_field.tsx"
props:
  - name: label
    type: "string"
    required: false
    description: "Texto del label"
  - name: helperText
    type: "string"
    required: false
    description: "Texto de ayuda"
  - name: error
    type: "string"
    required: false
    description: "Mensaje de error (reemplaza helperText)"
  - name: children
    type: "ReactNode"
    required: true
    description: "Input o componente de formulario"
emits: []
has_state: false
framework: react
variant: [default]
source_repo: "https://gitea-dgg044oo04woo4ggcsws4gk0.organic-machine.com/Bl4cksmith/Frontend_Library"
source_license: "MIT"
source_file: "frontend/src/components/ui/form-field.tsx"
---

## Ejemplo

```tsx
<FormField label="Email" helperText="Tu email corporativo" error={errors.email}>
  <Input type="email" />
</FormField>
```
