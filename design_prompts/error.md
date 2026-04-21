# Página de error

Diseña una página de error usando `ErrorPage` del registry. Respeta `DESIGN_SYSTEM.md`.

## Config
- **Código:** `{404 / 500 / 403 / 503 / CUSTOM}`
- **Título:** `{ej. "Página no encontrada"}`
- **Descripción:** `{una o dos frases — sin terminología técnica salvo que sea para devs}`
- **Icono (opcional):** `{IconBug / IconServerOff / IconLock / ...}` de Tabler

## Acciones
{una o dos botones, la primera es la primaria}
- `{Volver al inicio}` → `/` (default)
- `{Contactar soporte}` → `mailto:...` (outline)
- `{Reintentar}` → `() => window.location.reload()` (ghost)

## Layout
- Centrado vertical y horizontal.
- Código del error: display grande (fz 80-120, fw 700, color dimmed o destructive según gravedad).
- Debajo: título, descripción, acciones en `Group`.

## Notas
- {si hay contexto adicional — ej. incluir request-id para debugging}

Entrégalo listo para Handoff to Claude Code.
