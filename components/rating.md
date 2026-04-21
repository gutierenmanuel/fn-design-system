---
name: rating
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "Rating(props: RatingProps): JSX.Element"
description: "Selector de calificación con estrellas, fracciones y símbolos custom. Wrapper sobre Mantine Rating."
tags: [rating, stars, feedback, input, component, ui, mantine]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: ["@mantine/core"]
output: "Componente Rating que renderiza un selector de estrellas interactivo con soporte para fracciones, modo solo lectura y símbolos personalizados"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/rating.tsx"
props:
  - name: count
    type: "number"
    required: false
    description: "Número de estrellas/símbolos a mostrar (por defecto 5)"
  - name: fractions
    type: "number"
    required: false
    description: "Divisiones por estrella — 2 para mitades, 4 para cuartos"
  - name: value
    type: "number"
    required: false
    description: "Calificación actual (controlled)"
  - name: onChange
    type: "(value: number) => void"
    required: false
    description: "Callback al cambiar la calificación"
  - name: readOnly
    type: "boolean"
    required: false
    description: "Modo solo lectura — muestra la calificación sin permitir cambios"
  - name: highlightSelectedOnly
    type: "boolean"
    required: false
    description: "Solo resalta el símbolo seleccionado, no los anteriores"
  - name: size
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'"
    required: false
    description: "Tamaño de los símbolos"
  - name: color
    type: "string"
    required: false
    description: "Color de los símbolos activos (color de Mantine o CSS)"
emits: [onChange]
has_state: true
framework: react
variant: [default]
---

## Ejemplo

```tsx
import { Rating } from '@fn_library'

// Rating básico de 5 estrellas
<Rating value={rating} onChange={setRating} />

// Con medias estrellas
<Rating
  fractions={2}
  value={3.5}
  onChange={setRating}
/>

// Solo lectura para mostrar calificación
<Rating value={4.2} fractions={10} readOnly />

// Con más estrellas y color custom
<Rating
  count={10}
  value={score}
  onChange={setScore}
  color="yellow"
  size="lg"
/>
```

## Notas

- Wrapper directo sobre `Rating` de `@mantine/core` v9. Todas las props de Mantine Rating son válidas.
- `fractions` permite selección granular: 2 = mitades (0.5, 1, 1.5...), 4 = cuartos (0.25, 0.5...).
- En modo `readOnly` no dispara `onChange` y el cursor es el por defecto.
- Accesible via teclado con soporte para lectores de pantalla.
