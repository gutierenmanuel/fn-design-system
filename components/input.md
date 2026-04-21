---
name: input
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "Input(props: InputHTMLAttributes): JSX.Element"
description: "Campo de entrada accesible con soporte para iconos, grupos, validación ARIA y estados disabled/invalid. Mantine TextInput."
tags: [input, form, component, ui, interactive, mantine]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: ["@mantine/core"]
output: "Componente Input que renderiza campo de entrada accesible con soporte para iconos y validación ARIA"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/input.tsx"
props:
  - name: type
    type: "string"
    required: false
    description: "Tipo de input HTML"
  - name: className
    type: "string"
    required: false
    description: "Clases CSS adicionales"
emits: [onChange, onFocus, onBlur]
has_state: false
framework: react
variant: [default]
source_repo: "https://gitea-dgg044oo04woo4ggcsws4gk0.organic-machine.com/Bl4cksmith/Frontend_Library"
source_license: "MIT"
source_file: "frontend/src/components/ui/input.tsx"
---

## Ejemplo

```tsx
<Input placeholder="Email" type="email" />
<InputGroup>
  <InputIcon position="start"><SearchIcon /></InputIcon>
  <Input placeholder="Buscar..." />
</InputGroup>
```

## Notas

Exporta Input, InputGroup e InputIcon. Usa Mantine TextInput internamente. InputGroup e InputIcon se mantienen como wrappers de compatibilidad — para nuevos usos preferir leftSection/rightSection de Mantine TextInput directamente.
