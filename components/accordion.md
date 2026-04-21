---
name: accordion
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "Accordion(props: AccordionProps): JSX.Element"
description: "Secciones colapsables con animaciones. Mantine Accordion. Composable: AccordionItem + AccordionTrigger + AccordionContent."
tags: [accordion, collapsible, component, ui, interactive, mantine]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: ["@mantine/core"]
output: "Componente Accordion que renderiza secciones colapsables con soporte para múltiples items abiertos simultáneamente"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/accordion.tsx"
props:
  - name: className
    type: "string"
    required: false
    description: "Clases CSS adicionales para el contenedor"
emits: []
has_state: false
framework: react
variant: []
---

## Ejemplo

```tsx
<Accordion defaultValue="section-1">
  <AccordionItem value="section-1">
    <AccordionTrigger>Seccion 1</AccordionTrigger>
    <AccordionContent>
      Contenido de la primera seccion.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="section-2">
    <AccordionTrigger>Seccion 2</AccordionTrigger>
    <AccordionContent>
      Contenido de la segunda seccion.
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

## Notas

Usa Mantine Accordion nativo. Soporta type single (default) y multiple para multiples items abiertos. El chevron se maneja automaticamente por Mantine. AccordionItem requiere prop value unico. Exports: Accordion, AccordionItem, AccordionTrigger, AccordionContent.
