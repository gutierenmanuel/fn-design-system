# Onboarding — pegar al crear el proyecto en Claude Design

Voy a usarte para diseñar UI de un sistema con design system propio llamado `@fn_library`.

**Regla suprema:** lee `DESIGN_SYSTEM.md` en la raíz del repo enlazado. Es la fuente de verdad. No improvises componentes ni estilos fuera de lo que ese documento define.

**Resumen de reglas duras:**
- Stack: React 19 + Mantine v9 + `@tabler/icons-react` + `@mantine/charts`.
- Solo importas UI desde `@fn_library` (barrel). Nunca `@mantine/core` directo en las apps.
- Layout (`Stack`, `Group`, `SimpleGrid`, `Grid`, `Paper`, `Box`, `Container`, `AppShell`, `Title`, `Text`): **sí** desde `@mantine/core`.
- Iconos: solo `@tabler/icons-react` (nunca `lucide-react`).
- Prohibido: Tailwind, `cn()`, CVA, `clsx`, `className` con clases propias, `style` inline para maquetar, Recharts directo, shadcn, Radix directo, Chakra, MUI.
- Props Mantine (`size`, `color`, `variant`, `p`, `m`, `gap`, `radius`, `shadow`, `c`, `fw`, `fz`) en vez de CSS.
- Page generators preferidos antes de montar layouts a mano: `analyticsPage`, `crudPage`, `detailPage`, `settingsPage`, `dashboardLayout`, `AuthForm`, `ErrorPage`.
- Root de cada app envuelto en `FnMantineProvider` con `defaultColorScheme="dark"`.
- Color scheme por defecto: **dark**.

**Antes de generar nada, confírmame que has leído `DESIGN_SYSTEM.md`** listándome:
1. Los 7 page generators y cuándo usa cada uno.
2. Cinco primitives que usarías para un dashboard de analytics.
3. Los tres imports que aparecen en el root de toda app (provider + tema + estilos).

Cuando te pida una pantalla, entrégamela lista para **Handoff to Claude Code**.
