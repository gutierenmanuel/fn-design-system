---
name: mantine_provider
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "FnMantineProvider({ children, theme?, defaultColorScheme? })"
description: "Provider raiz de Mantine para apps del registry. Wrappea MantineProvider con Notifications incluido. Importa los CSS de @mantine/core, charts y notifications."
tags: [mantine, provider, theme, react]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: "error_go_core"
imports: ["@mantine/core", "@mantine/notifications", "@mantine/charts"]
framework: react
props:
  - name: children
    desc: "contenido de la app"
  - name: theme
    desc: "tema Mantine creado con createTheme() — colores, fuentes, radio, etc."
  - name: defaultColorScheme
    desc: "esquema de color por defecto: 'dark' | 'light' | 'auto'"
output: "arbol React envuelto en MantineProvider con notificaciones"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/mantine_provider.tsx"
---

## Ejemplo

```tsx
import { createTheme, MantineColorsTuple } from '@mantine/core'
import { FnMantineProvider } from '@fn_library'

const brand: MantineColorsTuple = [
  '#e5f3ff', '#cde2ff', '#9ac2ff', '#64a0ff', '#3884fe',
  '#1d72fe', '#0063ff', '#0058e4', '#004ecd', '#0043b5'
]

const theme = createTheme({
  colors: { brand },
  primaryColor: 'brand',
})

function App() {
  return (
    <FnMantineProvider theme={theme} defaultColorScheme="dark">
      {/* Tu app aqui */}
    </FnMantineProvider>
  )
}
```

## Notas

Reemplaza ThemeProvider + applyTheme del sistema anterior. Las apps definen su propio tema con `createTheme()` y lo pasan como prop. Los CSS de Mantine se importan una sola vez aqui.
