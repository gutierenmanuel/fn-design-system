---
name: stepper
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "FnStepper(props: FnStepperProps): JSX.Element"
description: "Stepper de pasos con orientacion horizontal/vertical. Wrapper sobre Mantine Stepper."
tags: [mantine, stepper, steps, wizard, component, ui]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: ["@mantine/core"]
framework: react
props:
  - name: steps
    type: "{ label: string; description?: string; icon?: ReactNode }[]"
    required: true
    description: "Definicion de cada paso del stepper"
  - name: active
    type: "number"
    required: true
    description: "Indice del paso activo (0-based)"
  - name: onStepClick
    type: "(step: number) => void"
    required: false
    description: "Callback al hacer click en un paso"
  - name: orientation
    type: "'horizontal' | 'vertical'"
    required: false
    description: "Orientacion del stepper, default horizontal"
  - name: allowNextStepsSelect
    type: "boolean"
    required: false
    description: "Permite seleccionar pasos futuros, default false"
output: "Stepper con indicadores de paso, labels y descripciones opcionales"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/stepper.tsx"
emits: []
has_state: false
variant: []
---

## Ejemplo

```tsx
import { FnStepper } from '@fn_library'

<FnStepper
  active={1}
  onStepClick={setActive}
  steps={[
    { label: 'Configuracion' },
    { label: 'Datos', description: 'Importar CSV' },
    { label: 'Revision' },
  ]}
/>
```

## Notas

Wrapper sobre Mantine `Stepper`. Recibe un array declarativo de pasos en vez de children manuales. Soporta iconos custom por paso.
