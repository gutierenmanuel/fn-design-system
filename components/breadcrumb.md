---
name: breadcrumb
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "Breadcrumb(props: BreadcrumbProps): JSX.Element"
description: "Navegacion jerarquica con separadores, elipsis para paths largos y soporte para router links via asChild. Mantine Anchor/Text."
tags: [breadcrumb, navigation, component, ui, mantine]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: ["@mantine/core", "@tabler/icons-react"]
output: "Componente Breadcrumb que renderiza navegación jerárquica con separadores, elipsis y soporte para router links"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/breadcrumb.tsx"
props:
  - name: className
    type: "string"
    required: false
    description: "Clases CSS adicionales"
emits: []
has_state: false
framework: react
variant: []
---

## Ejemplo

```tsx
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/docs">Documentacion</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Componentes</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>

// Con elipsis para paths largos
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbEllipsis />
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Pagina actual</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

## Notas

Exports: Breadcrumb (nav), BreadcrumbList (ol via Group), BreadcrumbItem (li via Group), BreadcrumbLink (Mantine Anchor con asChild), BreadcrumbPage (Text aria-current=page), BreadcrumbSeparator (IconChevronRight por defecto, customizable), BreadcrumbEllipsis (IconDots). BreadcrumbLink acepta asChild para usar con Link de React Router o Next.js. Usa Tabler icons en vez de lucide-react.
