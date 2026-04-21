---
name: avatar
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "Avatar(props: AvatarProps): JSX.Element"
description: "Imagen de usuario circular con fallback a iniciales generadas automaticamente. 5 tamaños via Mantine Avatar."
tags: [avatar, user, image, component, ui, mantine]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: ["@mantine/core"]
output: "Componente Avatar que renderiza imagen de usuario circular con fallback a iniciales generadas"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/avatar.tsx"
props:
  - name: src
    type: "string"
    required: false
    description: "URL de la imagen"
  - name: alt
    type: "string"
    required: false
    description: "Texto alternativo de la imagen"
  - name: fallback
    type: "string"
    required: false
    description: "Nombre completo del que extraer iniciales (ej: 'Juan Perez' -> 'JP')"
  - name: initials
    type: "string"
    required: false
    description: "Iniciales explicitas para el fallback (sobrescribe fallback)"
  - name: size
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'"
    required: false
    description: "Tamanio del avatar (default: md)"
  - name: className
    type: "string"
    required: false
    description: "Clases CSS adicionales"
emits: []
has_state: false
framework: react
variant: [xs, sm, md, lg, xl]
---

## Ejemplo

```tsx
// Con imagen
<Avatar src="https://example.com/user.jpg" alt="Juan Perez" size="md" />

// Con fallback a iniciales
<Avatar fallback="Juan Perez" size="lg" />

// Iniciales explicitas
<Avatar initials="JD" size="sm" />

// Maneja error de imagen automaticamente
<Avatar src="/broken-url.jpg" fallback="Maria Garcia" />
```

## Notas

Usa Mantine Avatar que maneja errores de carga de imagen nativamente. La funcion getInitials extrae 2 iniciales del nombre completo (primera y ultima palabra). Si solo hay una palabra, toma los 2 primeros caracteres. Usa forwardRef para compatibilidad con wrappers.
