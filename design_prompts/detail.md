# Ficha de detalle

Diseña la página de detalle de `{ENTIDAD}` usando `detailPage` como generator raíz. Respeta `DESIGN_SYSTEM.md`.

## Header
- Avatar: {iniciales / imagen / icono Tabler}
- Título: `{nombre de la entidad}`
- Subtítulo: `{descripción breve}`
- Badge lateral: `{dominio / status / tipo}` — variante `{secondary / success / destructive}`
- Back button → `{ruta}`
- Acciones (derecha): {Edit (outline), Delete (destructive), Duplicate (ghost)}

## Campos (grid 2-3 columnas)
| label | value |
|-------|-------|
| {ID}      | {valor} |
| {Creado}  | {fecha formateada} |
| {Autor}   | {texto + avatar pequeño} |
| {Estado}  | {Badge} |
| {Tags}    | {Chips} |

## Tabs
| key | label | count | contenido |
|-----|-------|-------|-----------|
| {code}  | Código       | {N} | `<pre>` con código |
| {tests} | Tests        | {M} | DataTable de tests |
| {deps}  | Dependencias | {K} | Lista con badges |
| {usage} | Uso          | {J} | DataTable |

## Timeline de actividad
Lista de eventos: `{created, updated, indexed, deployed, ...}` con fecha relativa.

## Notas
- {si hay secciones custom, descríbelas aquí}

Entrégalo listo para Handoff to Claude Code.
