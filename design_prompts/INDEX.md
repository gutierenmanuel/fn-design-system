# Prompts para Claude Design

Plantillas listas para pegar en `claude.ai/design`. Copias, rellenas los `{PLACEHOLDERS}`, pegas. Cada una asume que el repo `fn-design-system` ya está enlazado al proyecto de Claude Design y que `DESIGN_SYSTEM.md` es la regla suprema.

| # | Archivo | Cuándo usar |
|---|---------|-------------|
| 00 | [onboarding.md](onboarding.md) | **Primera vez** al crear un proyecto nuevo en Claude Design. Le fija las reglas. |
| 01 | [dashboard.md](dashboard.md) | Dashboard de analytics con KPIs + charts. |
| 02 | [crud.md](crud.md) | Gestión CRUD: lista + tabla + modal create/edit/delete. |
| 03 | [detail.md](detail.md) | Ficha de detalle de una entidad. |
| 04 | [settings.md](settings.md) | Página de configuración con navegación lateral. |
| 05 | [auth.md](auth.md) | Login / register. |
| 06 | [error.md](error.md) | 404 / 500 / 403 / custom. |
| 07 | [custom.md](custom.md) | Pantalla libre que no encaja en ninguna plantilla. |
| 08 | [handoff_integrate.md](handoff_integrate.md) | **Para Claude Code (yo)** — integrar un export de Claude Design al registry. |

## Flujo estándar

1. **Primera vez en el proyecto** → pegas `onboarding.md`.
2. **Cada pantalla nueva** → copias la plantilla que aplica, rellenas, pegas.
3. **Cuando te guste el diseño** → "Handoff to Claude Code" en Claude Design.
4. **De vuelta aquí** → me pegas el export + `handoff_integrate.md`, yo lo adapto al repo.
