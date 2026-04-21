# Questionnaire — arranque rápido para prompts de Claude Design

Cuando el usuario pida un prompt (ej. "quiero un dashboard", "prompt para crud de clientes", "hazme una settings"), el agente **NO** le pregunta todo en abierto. Le hace el cuestionario numerado de abajo, una tanda de preguntas cada vez, con opciones `1) 2) 3) 4) 5)` para que responda rápido con los números correspondientes (`1,3,2,4` o similar).

## Reglas del flujo

1. **Detecta el template** que aplica (dashboard / crud / detail / settings / auth / error / custom).
2. **Pregunta en tandas de 4-6** preguntas numeradas. No todo de golpe.
3. Si una pregunta es **texto libre**, márcala como `(abierta)`; el usuario contesta con texto en vez de número.
4. Si una respuesta necesita opción fuera del menú, el usuario escribe `"otra: <texto>"` y continúa.
5. Al final de **todas** las tandas, recapitulas las respuestas en una tabla y generas el prompt de Claude Design rellenado, listo para copiar.
6. Si el usuario responde con un número fuera de rango o ambiguo, repite la pregunta con el rango válido resaltado.

### Formato de respuesta del usuario
Puede contestar:
- `1,2,3,1,2` — una respuesta por pregunta en el orden.
- `1) 2  2) 3  3) 1` — explícito por número de pregunta.
- Mezcla libre con números y texto: `1, "dashboard ventas", 3, 4, 2`.

---

## Template: dashboard

### Tanda 1 — Contexto
**Q1.** Tipo de dashboard:
  1) Monitoreo técnico (latencias, errores, uptime)
  2) Business analytics (ventas, conversiones, ingresos)
  3) Contenido / tráfico (usuarios, pageviews, engagement)
  4) Operacional (inventario, órdenes, tareas)
  5) Otro *(abierta — describe)*

**Q2.** Título del dashboard *(abierta)*.

**Q3.** Subtítulo / contexto temporal:
  1) "Tiempo real"
  2) "Últimas 24h"
  3) "Últimos 7 días"
  4) "Último mes"
  5) Configurable por usuario (date range picker)

**Q4.** Audiencia principal:
  1) Operador técnico
  2) Ejecutivo / C-level
  3) Cliente externo
  4) Equipo interno mixto

### Tanda 2 — KPIs
**Q5.** Número de KPIs (fila superior):
  1) 2  2) 3  3) 4  4) 5  5) 6

**Q6.** Estilo de deltas:
  1) Porcentaje con flecha (▲ +12%)
  2) Valor absoluto (+123)
  3) Mixto (algunos % otros absolutos)
  4) Sin deltas

**Q7.** ¿Incluyen sparkline inline el KPI?
  1) Sí, todos los KPIs
  2) Solo los KPIs principales (1-2)
  3) No

### Tanda 3 — Charts
**Q8.** Número de charts:
  1) 2  2) 3  3) 4  4) 5  5) 6

**Q9.** Mix de tipos de chart:
  1) Solo line (time-series)
  2) line + bar (evolución + comparación)
  3) line + bar + pie (variado)
  4) area stacked + line (distribución + serie)
  5) Otro *(abierta — describe la combinación)*

**Q10.** ¿Hay un chart principal (span 2, full width)?
  1) Sí, el primero
  2) Sí, el último
  3) Varios con span 2
  4) Todos span 1 (grid uniforme)

### Tanda 4 — Header y controles
**Q11.** Acciones en el header:
  1) Solo Refresh
  2) Refresh + Export
  3) Refresh + Date range picker
  4) Refresh + Export + Date range picker
  5) Ninguna

**Q12.** Color scheme:
  1) Dark (por defecto)
  2) Light
  3) Sigue la preferencia del sistema

**Q13.** ¿Va dentro de `FnAppShell` (con header + navbar)?
  1) Sí — especifica qué items lleva el navbar *(abierta si eliges esto)*
  2) No — la página ocupa pantalla completa sin shell

---

## Template: crud

### Tanda 1 — Entidad
**Q1.** Nombre de la entidad *(abierta, PascalCase. Ej. "Customer", "DeployTarget")*.

**Q2.** ¿Cuántas columnas visibles en la tabla?
  1) 3  2) 4  3) 5  4) 6  5) 7+

**Q3.** Lista las columnas *(abierta, separadas por coma)* — para cada una indica si es texto / número / fecha / badge / acción.

### Tanda 2 — Acciones
**Q4.** Acciones por fila:
  1) Solo Edit
  2) Edit + Delete
  3) Edit + Delete + Duplicate
  4) Edit + Delete + "Ver detalle"
  5) Custom *(abierta)*

**Q5.** Acciones del header:
  1) Solo "Add"
  2) "Add" + "Import"
  3) "Add" + "Export"
  4) "Add" + "Import" + "Export"
  5) Bulk actions (select rows + apply)

**Q6.** ¿Modal o página separada para create/edit?
  1) Modal (Dialog)
  2) Drawer lateral (Sheet)
  3) Página completa aparte

### Tanda 3 — Form
**Q7.** Número de campos en el form *(1-5, 6-10, 11+)*:
  1) 1-5  2) 6-10  3) 11+

**Q8.** Lista los campos *(abierta — nombre + tipo cada uno)*.

**Q9.** ¿Validación?
  1) Básica (required only)
  2) Completa (email, rangos, regex)
  3) Async (verificar contra API)
  4) Sin validación

### Tanda 4 — Lista
**Q10.** Filtros sobre la tabla:
  1) Solo SearchBar global
  2) SearchBar + SimpleSelect (por categoría)
  3) SearchBar + Chips (tags activos)
  4) Filtros complejos (multi-select + date range)
  5) Sin filtros

**Q11.** Paginación:
  1) Pagination componente (numbers)
  2) Infinite scroll
  3) "Load more" button
  4) Sin paginación (máximo 100 filas)

**Q12.** ¿Sorting en columnas?
  1) Sí, en todas
  2) Solo en 2-3 principales
  3) No

---

## Template: detail

### Tanda 1 — Entidad
**Q1.** Nombre de la entidad *(abierta)*.

**Q2.** Avatar del header:
  1) Iniciales generadas
  2) Imagen (URL)
  3) Icono Tabler *(abierta — cuál)*
  4) Sin avatar

**Q3.** Badge lateral:
  1) Status (success/warning/destructive)
  2) Tipo / categoría (secondary)
  3) Ambos
  4) Sin badge

### Tanda 2 — Contenido
**Q4.** Número de campos en el grid:
  1) 3  2) 4-6  3) 7-10  4) 11+

**Q5.** Lista los campos *(abierta — label + tipo)*.

**Q6.** Número de tabs:
  1) 1 (sin tabs)  2) 2  3) 3  4) 4  5) 5+

**Q7.** Tabs *(abierta — lista de keys + labels + tipo de contenido de cada una)*.

### Tanda 3 — Extras
**Q8.** ¿Timeline de actividad?
  1) Sí, vertical bajo los tabs
  2) Sí, en un tab propio
  3) Sí, en sidebar derecho
  4) No

**Q9.** Acciones del header:
  1) Solo Edit
  2) Edit + Delete
  3) Edit + Delete + Duplicate
  4) Edit + Delete + Share
  5) Custom *(abierta)*

---

## Template: settings

### Tanda 1 — Estructura
**Q1.** Número de secciones (items del nav lateral):
  1) 2-3  2) 4-5  3) 6-8  4) 9+

**Q2.** Lista las secciones *(abierta — key + label + icono Tabler sugerido para cada una)*.

**Q3.** Modo de guardado:
  1) Botones "Cancelar" + "Guardar" al pie de cada sección
  2) Autosave con toast de confirmación
  3) Un solo "Guardar" global

### Tanda 2 — Campos
**Q4.** Tipos de campos más comunes:
  1) Solo texto y toggles
  2) Texto + toggle + select
  3) Todo lo anterior + file upload (avatar, etc.)
  4) Todo + campos complejos (2FA, sessions, API keys)

**Q5.** ¿Hay sección de seguridad? (password, 2FA, sessions, api keys)
  1) Sí  2) No

**Q6.** ¿Hay sección de facturación? (plan, tarjetas, historial)
  1) Sí  2) No

---

## Template: auth

### Tanda 1 — Modo
**Q1.** Modo:
  1) Solo login
  2) Solo register
  3) Toggle login/register

**Q2.** Nombre de la app *(abierta)* (aparece en el header).

**Q3.** Logo / marca:
  1) Icono Tabler *(abierta — cuál)*
  2) SVG inline
  3) Texto (nombre de la app)
  4) Sin logo

### Tanda 2 — Campos
**Q4.** Campos en register extra a email/password:
  1) Solo full_name
  2) full_name + organization
  3) full_name + organization + role
  4) Ninguno (solo email + password)
  5) Otro *(abierta)*

**Q5.** Password strength meter:
  1) Sí  2) No

**Q6.** Remember me:
  1) Sí  2) No

### Tanda 3 — Social
**Q7.** Proveedores OAuth *(puedes elegir varios — ej. 1,2)*:
  1) Google
  2) GitHub
  3) GitLab
  4) Microsoft
  5) SSO corporativo
  6) Ninguno (solo email/password)

**Q8.** Terms & conditions checkbox en register:
  1) Sí, required  2) No

---

## Template: error

**Q1.** Código:
  1) 404  2) 500  3) 403  4) 503  5) Custom *(abierta)*

**Q2.** Tono del mensaje:
  1) Formal y breve
  2) Amigable / humorístico
  3) Técnico (para devs)

**Q3.** Icono Tabler:
  1) IconBug (error genérico)
  2) IconServerOff (backend down)
  3) IconLock (permission denied)
  4) IconSearchOff (not found)
  5) Otro *(abierta)*

**Q4.** Acciones:
  1) Solo "Volver al inicio"
  2) "Volver al inicio" + "Contactar soporte"
  3) "Volver al inicio" + "Reintentar"
  4) Las tres

**Q5.** ¿Mostrar request-id / trace-id para debugging?
  1) Sí  2) No

---

## Template: custom

**Q1.** Descripción del objetivo de la pantalla *(abierta — 1-2 frases)*.

**Q2.** ¿Dentro de `FnAppShell`?
  1) Sí, con header + navbar
  2) Sí, solo header
  3) No, pantalla completa

**Q3.** Primitivas principales (puedes marcar varias con coma):
  1) Card + KpiCard
  2) DataTable
  3) Charts (line/bar/area/pie)
  4) Command (combobox cmdk)
  5) GraphContainer (sigma.js)
  6) Timeline
  7) Dropzone (upload)
  8) Stepper
  9) Otro *(abierta)*

**Q4.** Estados a cubrir:
  1) Loading + Empty + Error
  2) Loading + Empty
  3) Solo loading
  4) Ninguno (datos siempre presentes)

**Q5.** Interactividad:
  1) Solo lectura
  2) Formulario / edición
  3) Drag & drop
  4) Realtime (SSE / WebSocket)
  5) Mix *(abierta)*

**Q6.** Data mock *(abierta — pega JSON o describe)*.

---

## Salida final del agente

Cuando el usuario haya respondido todas las tandas, el agente:

1. **Recapitula** las respuestas en una tabla Markdown `| # | Pregunta | Respuesta |`.
2. **Genera el prompt completo** de Claude Design con todos los placeholders rellenos, tomando el template correspondiente de `frontend/design_prompts/{template}.md`.
3. **Entrega el prompt final** en un bloque de código copiable.
4. Pregunta al final: *"¿Copio al portapapeles / abres Claude Design?"* o *"¿Ajustamos algo antes?"*.
