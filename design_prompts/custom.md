# Pantalla custom (sin page generator)

Cuando la pantalla no encaja en ninguno de los generators (`analyticsPage`, `crudPage`, `detailPage`, `settingsPage`, `AuthForm`, `ErrorPage`), usa esta plantilla. Respeta `DESIGN_SYSTEM.md`.

## Objetivo
{Describe en 1-2 frases qué hace la pantalla y qué problema resuelve para el usuario.}

## Shell
- ¿Va dentro de `FnAppShell` (header + navbar)? → `{sí/no}`. Si sí:
  - Header: {título app, búsqueda global, avatar menu, notificaciones}
  - Navbar: {items principales con FnNavLink + iconos Tabler}
- Sticky `PageHeader` con tabs: `{sí/no}`

## Layout principal
Describe la composición en términos de primitives de Mantine (`Stack`, `Group`, `SimpleGrid`, `Grid`, `Paper`, `Box`) y wrappers de `@fn_library`.

Ejemplo:
```
Stack gap="lg"
├── PageHeader (título + acciones)
├── SimpleGrid cols={2}
│   ├── Card (KpiCard list)
│   └── Card (LineChart)
└── DataTable
```

## Componentes requeridos (todos desde @fn_library)
- {lista exhaustiva de componentes que debes usar — KpiCard, DataTable, Command, Dialog, etc.}

## Interacciones
- {clics, hovers, modales que se abren, estados de loading, empty states, errores}

## Estados
- **Loading:** {Skeleton variant / LoadingOverlay}
- **Empty:** EmptyState con {icono, mensaje, acción}
- **Error:** {Alert destructive / toast}

## Datos (mock)
{Pega o describe el shape de los datos; JSON realista de 3-5 filas si es tabla, arrays de puntos si es chart, etc.}

## Restricciones
- {lo que NO debe hacer — ej. "sin modal global, todo inline"}

Entrégalo listo para Handoff to Claude Code.
