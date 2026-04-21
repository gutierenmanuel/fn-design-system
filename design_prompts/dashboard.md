# Dashboard de analytics

Diseña una página de analytics usando `analyticsPage` como generator raíz. Respeta `DESIGN_SYSTEM.md`.

## Contexto
- **Dominio:** {QUÉ MIDE — ej. monitoreo de pipelines / ventas / tráfico web}
- **Audiencia:** {QUIÉN LO VE — ej. operador, ejecutivo}
- **Frecuencia:** {tiempo real / cada hora / diario}

## Header
- Título: `{TÍTULO}`
- Subtítulo: `{SUBTÍTULO — ej. "últimas 24h"}`
- Acciones (botones a la derecha): {LISTA — ej. "Refresh" (outline + IconRefresh), "Export" (ghost + IconDownload)}
- Date range selector: {sí / no}

## KPIs (fila de KpiCards)
Entre 2 y 6. Para cada uno:
| label | value | unit | delta |
|-------|-------|------|-------|
| {Runs totales} | {1284} | — | +12% positivo |
| {Success rate} | {97.3} | % | +0.4% positivo |
| {P95 latency}  | {842}  | ms | -8% positivo (bajar es bueno) |
| {Errores}      | {34}   | — | +5 negativo destructivo |

## Charts
{ENTRE 2 Y 6 charts. Para cada uno:}
- **id** · título · tipo (`line` / `bar` / `area` / `pie`) · span (`1` o `2`) · series
- Ej. `runs` · "Runs por hora" · `line` · span 1 · series `success` + `failure`
- Ej. `top` · "Top pipelines" · `bar` · span 1 · series `count`
- Ej. `latency` · "Latencia por etapa" · `area` · span 2 · stacked · series `p50` + `p95`
- Ej. `domain` · "Distribución por dominio" · `pie` · span 1 · donut

## Notas
- {Restricciones adicionales, ej. "sin header, se embebe en otra página"}

Entrégalo listo para Handoff to Claude Code. Los datos pueden ser mock realistas.
