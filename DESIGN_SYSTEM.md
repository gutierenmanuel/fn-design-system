# @fn_library — Design System

> **Fuente de verdad para Claude Design y para cualquier agente que genere UI en este repo.**
> Si generas código frontend, obedece este documento. Sin excepciones.

---

## 1. Qué es esto

`@fn_library` es el design system del registry. Son 75 wrappers React sobre **Mantine v9** que viven en `frontend/functions/ui/`. Toda app del registry (`apps/*/frontend/`) los consume vía el alias Vite `@fn_library` — barrel único en `frontend/functions/ui/index.ts`.

**Regla suprema:** en las apps NUNCA se importa Mantine directamente, NUNCA se mezclan otras librerías de UI, NUNCA se escribe CSS manual. Todo pasa por `@fn_library`.

---

## 2. Stack

| Capa | Librería | Notas |
|------|----------|-------|
| Framework | React 19 | con TypeScript 6 |
| UI base | `@mantine/core` v9 | todos los wrappers la usan |
| Charts | `@mantine/charts` v9 | line, bar, area, pie — Recharts por debajo |
| Fechas | `@mantine/dates` v9 + `dayjs` | DatePickerInput |
| Forms | `@mantine/form` v9 | validación, no es obligatorio |
| Dropzone | `@mantine/dropzone` v9 | drag & drop de ficheros |
| Hooks | `@mantine/hooks` v9 | disclosure, useForm, etc. |
| Notifs | `@mantine/notifications` v9 | incluidas en FnMantineProvider |
| Iconos | `@tabler/icons-react` v3 | el set nativo de Mantine |
| Fuente | `@fontsource-variable/geist` | cargada en el provider |
| Grafos | `sigma` + `graphology` | solo para `GraphContainer` |
| Build | Vite 8 + pnpm | no webpack, no npm, no yarn |

### Deny-list (NO usar nunca)

- ❌ `tailwindcss`, `postcss-preset-tailwind`
- ❌ `class-variance-authority` (CVA), `clsx`, `cn`
- ❌ `shadcn/ui`, `@radix-ui/*` directos, `@headlessui/*`
- ❌ `lucide-react`, `heroicons`, `feather`, `phosphor-icons`
- ❌ `chakra-ui`, `mui`, `antd`
- ❌ `framer-motion` (Mantine trae transiciones suficientes)
- ❌ `styled-components`, `emotion`
- ❌ CSS modules, CSS manual (`.css` inline), `style={{...}}` para maquetar

Si una idea solo encaja con algo de la deny-list → pregunta antes de escribir código.

---

## 3. Import rules

### 3.1 Un solo barrel

```ts
// ✅ Correcto — siempre desde el barrel
import { Button, Card, CardHeader, CardTitle, KPICard, LineChart, DataTable } from '@fn_library'

// ❌ Prohibido — subpath
import { Button } from '@fn_library/button'

// ❌ Prohibido — Mantine directo en apps
import { Button } from '@mantine/core'
```

### 3.2 Provider raíz obligatorio

Toda app monta su árbol dentro de `FnMantineProvider`. No `MantineProvider` directo.

```tsx
import { FnMantineProvider } from '@fn_library'
import { createTheme } from '@mantine/core'

const theme = createTheme({
  primaryColor: 'indigo',
  fontFamily: 'Geist Variable, sans-serif',
})

export function App() {
  return (
    <FnMantineProvider theme={theme} defaultColorScheme="dark">
      <MyPage />
    </FnMantineProvider>
  )
}
```

`FnMantineProvider` ya incluye:
- `<Notifications position="top-right" />`
- Los CSS de `@mantine/core`, `@mantine/charts`, `@mantine/notifications`
- `defaultColorScheme="dark"` por defecto

### 3.3 Iconos

```tsx
import { IconPlus, IconTrash, IconRefresh, IconSearch } from '@tabler/icons-react'

<Button leftSection={<IconPlus size={16} />}>Añadir</Button>
```

### 3.4 Layout: solo componentes Mantine de layout

Los componentes de layout (`AppShell`, `Group`, `Stack`, `Grid`, `SimpleGrid`, `Flex`, `Container`, `Box`, `Paper`) **sí** se importan directo de `@mantine/core`, porque `@fn_library` no los wrappea — son parte fija del sistema.

```tsx
import { Stack, Group, SimpleGrid, Paper, Box } from '@mantine/core'
```

El único layout wrappeado es `FnAppShell` (en `@fn_library`) — úsalo para el shell principal de la app.

---

## 4. Reglas duras (obedecer siempre)

1. **Props Mantine, no clases.** Tamaños, márgenes, padding, gap, radio, color: `size`, `p`, `m`, `mt`, `mb`, `gap`, `radius`, `shadow`, `c`, `fw`, `fz`, `lh`. Sin `className="..."` con clases propias.
2. **Color scheme dark** es el default del registro. Los componentes están pensados para oscuro; si quieres claro, pásalo explícito.
3. **No hardcodees colores**. Usa los tokens Mantine (`--mantine-color-*`) o los helpers del registry (`get_series_color_ts_core`, `chart_colors_ts_core`).
4. **Formulario**: envuelve cada campo con `<FormField label="..." error="..." helperText="...">`. Gestiona ARIA, label, error.
5. **Tablas**: usa `DataTable`. Auto-detecta columnas del primer row. No escribas `<table>` a mano.
6. **KPIs**: usa `KPICard` (no Paper manual). Acepta `label`, `value`, `unit`, `delta`, `icon`, `chart`, `action`, `subtitle`.
7. **Charts**: siempre con `@fn_library` charts; nunca Recharts directo. Envuelve en `ChartContainer` si necesitas header/footer del propio chart.
8. **Loading**: `Skeleton` + variantes (`SkeletonText`, `SkeletonCard`, `SkeletonTable`, `SkeletonAvatar`, `SkeletonButton`) o `FnLoadingOverlay` para secciones completas.
9. **Vacío**: `EmptyState` con icono Tabler, título, descripción, acción opcional.
10. **Errores de página entera**: `ErrorPage`. 404/500/403 o código custom.
11. **Modal**: `Dialog`. Drawer lateral: `Sheet`. Popover flotante: `Popover`. Menús: `DropdownMenu`.
12. **Notificaciones**: desde `@mantine/notifications` `notifications.show({...})` — el provider ya está montado. O usa el `Toast` del registry si necesitas la API `useToast`.

---

## 5. Catálogo completo (75 componentes)

> Todos exportados desde `@fn_library` (barrel). Cada uno detalla variantes y nota clave.

### 5.1 Primitives

| Componente | Variantes | Notas |
|------------|-----------|-------|
| `Button` | `default \| outline \| secondary \| ghost \| destructive \| link` — sizes `default \| xs \| sm \| lg \| icon \| icon-xs \| icon-sm \| icon-lg` | Wrapper Mantine Button. Soporta `leftSection`/`rightSection` con icono. |
| `FnActionIcon` | `filled \| light \| outline \| transparent \| default \| subtle` | Botón cuadrado para icono único. Loading + tooltip integrados. |
| `Badge` | 10 semánticas (`default, secondary, destructive, outline, ghost, link, success, warning, error, info`) | 2 tamaños. |
| `Chip` | `filled \| outline \| light` | Seleccionable. `ChipGroup` para selección simple/múltiple. |
| `Indicator` (FnIndicator) | — | Badge posicionado sobre un hijo. |
| `Label` | — | Etiqueta de formulario accesible. |
| `Skeleton` | `base \| text \| card \| avatar \| button \| table` | Exporta también `SkeletonText`, `SkeletonCard`, `SkeletonTable`, `SkeletonAvatar`, `SkeletonButton`. |
| `Sparkline` | `line \| area \| bar` | Mini chart SVG puro — para tablas y KPIs. |
| `ProgressBar` | `primary \| success \| warning \| destructive` | Con buffer, indeterminado y display de valor. |
| `FnRingProgress` | — | Anillo de progreso con secciones. |
| `Tooltip` | `default` | Delay configurable. |
| `Avatar` | `xs \| sm \| md \| lg \| xl` | Fallback a iniciales. |

### 5.2 Inputs

| Componente | Notas |
|------------|-------|
| `Input` | `TextInput` con `InputGroup` e `InputIcon`. |
| `Textarea` | autosize. |
| `PasswordInput` | Toggle visibilidad + strength meter opcional. |
| `NumberInput` (FnNumberInput) | min/max, step, prefix, suffix. |
| `Select` | Declarativo `data={[...]}`. Búsqueda, grupos. |
| `SimpleSelect` | Acepta array plano o agrupado. |
| `MultiSelect` | Pills + límite. |
| `Autocomplete` | Admite valores libres (a diferencia de Select). |
| `TagsInput` | Tags libres. |
| `DatePickerInput` | Fecha simple, múltiple o rango. |
| `FileInput` | Ficheros único/múltiple, tipos MIME. |
| `Dropzone` | Drag & drop de archivos. Estados idle/accept/reject. |
| `Checkbox` | Con indeterminate. |
| `RadioGroup` | Opciones exclusivas. |
| `SwitchToggle` | Label a izquierda o derecha. |
| `FnSegmentedControl` | Selección única entre opciones. |
| `Slider` / `RangeSlider` | Marcas, labels. |
| `Rating` | Fracciones, símbolos custom. |
| `ColorInput` | Picker + swatches + alpha. |
| `PinInput` | Código OTP con autocompletado. |
| `SearchBar` | Input con debounce, icono y clear. |
| `Command` / `CommandSearch` | Combobox cmdk-style con búsqueda, grupos, shortcuts. |
| `FormField` | **Wrapper obligatorio** para cada campo de form. |

### 5.3 Data display

| Componente | Notas |
|------------|-------|
| `DataTable` | Sticky header, overflow scroll, heatmap, formato condicional (number/datetime/currency), auto-columns. Variantes: `default \| heatmap`. |
| `KPICard` | Size `sm \| default \| lg`. Acepta icon, chart inline, action. |
| `Card` + slots | `CardHeader`, `CardTitle`, `CardDescription`, `CardAction`, `CardContent`, `CardFooter`. Variantes `default \| borderless \| ghost`, sizes `default \| sm`. |
| `FnTimeline` | Items con iconos y colores. |
| `EmptyState` | Icono + título + descripción + acción. |
| `Pagination` | Autocontenido. |

### 5.4 Charts

| Componente | Variantes | Notas |
|------------|-----------|-------|
| `LineChart` | 5 curvas (`linear, monotone, step, stepBefore, stepAfter`) | Multi-series, reference lines. |
| `BarChart` | `vertical \| horizontal` | Multi-series. |
| `AreaChart` | `default \| stacked` | Gradientes auto. |
| `PieChart` | `pie \| donut` | Colores auto. |
| `Sparkline` | `line \| area \| bar` | Mini chart inline sin Recharts. |
| `ChartContainer` | `default` | Wrapper Paper + helpers (`getSeriesColor`, `Series`). |
| `GraphContainer` | — | sigma.js + graphology + ForceAtlas2. |

### 5.5 Overlays y feedback

| Componente | Notas |
|------------|-------|
| `Dialog` | Modal con slots (`DialogHeader`, `DialogTitle`, `DialogDescription`, `DialogContent`, `DialogFooter`, `DialogClose`). |
| `Sheet` | Drawer `top \| bottom \| left \| right`. |
| `Popover` | Contenido flotante. |
| `DropdownMenu` | Items, checkboxes, radios, separadores, submenús. |
| `Alert` | `default \| destructive`. Slots `AlertTitle`, `AlertDescription`. |
| `Toast` | `default \| success \| error \| warning \| info`. API `useToast`. |
| `FnLoadingOverlay` | Blur + opacidad. Para secciones o página entera. |

### 5.6 Navegación y shell

| Componente | Notas |
|------------|-------|
| `FnAppShell` | Shell con header + navbar colapsable + main. |
| `PageHeader` | `full \| simple`. Título, subtítulo, acciones, back, tabs integrados, badge, sticky. |
| `Breadcrumb` | Con elipsis y router links vía `asChild`. |
| `FnNavLink` | Link con icono, descripción, anidamiento. |
| `Tabs` | `default \| line`. Horizontal/vertical. |
| `Accordion` | `AccordionItem` + `AccordionTrigger` + `AccordionContent`. |
| `FnStepper` | Horizontal/vertical. |

### 5.7 Hooks y providers (TS)

| Hook / Provider | Fuente | Notas |
|---|---|---|
| `FnMantineProvider` | `@fn_library` | Provider raíz. |
| `useToast` | `@fn_library` (toast) | API imperativa para notificaciones. |
| `useAnimatedCanvas` | `@fn_library` | Canvas con requestAnimationFrame, DPR, FPS real. |
| `WailsProvider` + `useWailsContext` + `useWailsCache` | `@fn_library` | Solo si la app es Wails. |
| `useWailsQuery` / `useWailsMutation` / `useWailsStream` / `useWailsEvent` | `@fn_library` | IPC Wails. |

### 5.8 Hooks TS core (registry TS core, no UI)

No están en `@fn_library` pero son parte del stack. Se importan desde `frontend/functions/core/` o se copian al proyecto según se necesite:

- `use_fetch`, `use_mutation`, `use_sse`, `use_websocket`, `use_infinite_scroll`, `use_debounced_search`, `use_form`
- `api_client`, `http_cache`, `format_compact` (K/M/B, bytes, duración, Hz), `chart_colors`, `get_series_color`, `get_computed_color`

---

## 6. Page generators (preferir antes que montar a mano)

Cuando generes una pantalla, intenta **primero** con un page generator. Solo si no encaja, compone con Card/Paper/SimpleGrid.

| Generator | Cuándo usarlo | Props clave |
|-----------|---------------|-------------|
| `analyticsPage` | Dashboard con KPIs + charts en grid | `title, subtitle, metrics[], charts[], dateRange?, actions?` |
| `crudPage<T>` | Listado + tabla + modal create/edit/delete | `title, columns, rows, schema, onAdd, onEdit, onDelete` |
| `dashboardLayout` | Grid responsive 1-4 cols de widgets con span | `widgets[{content, span}]` |
| `detailPage` | Ficha de entidad con header, campos, tabs, timeline | `entity, fields[], tabs[], timeline[]` |
| `settingsPage` | Config con navegación lateral y secciones | `sections[{nav, fields[]}]` |
| `AuthForm` | Login / register con social buttons | `mode, onSubmit, extraFields?, socialProviders?` |
| `ErrorPage` | 404 / 500 / 403 / custom | `code, title, description, actions` |

Estas funciones viven en `frontend/functions/ui/` igual que los componentes, se importan desde `@fn_library` y retornan un `ReactElement`.

---

## 7. Ejemplos canónicos

### 7.1 Dashboard de analytics

```tsx
import { analyticsPage, LineChart, BarChart, AreaChart, PieChart, Button } from '@fn_library'
import { IconRefresh } from '@tabler/icons-react'

const runsData = [
  { hour: '00', success: 120, failure: 3 },
  { hour: '01', success: 115, failure: 1 },
  // ...
]

export const PipelineMonitoring = () => analyticsPage({
  title: 'Pipeline Monitoring',
  subtitle: 'últimas 24h',
  actions: <Button variant="outline" leftSection={<IconRefresh size={14} />}>Refresh</Button>,
  metrics: [
    { label: 'Runs totales', value: '1,284', delta: { value: 12, isPositive: true } },
    { label: 'Success rate', value: '97.3%', delta: { value: 0.4, isPositive: true } },
    { label: 'P95 latency',  value: '842ms', delta: { value: -8, isPositive: true } },
    { label: 'Errores',      value: 34,      delta: { value: 5, isPositive: false } },
  ],
  charts: [
    { id: 'runs',     title: 'Runs por hora',      type: 'line',
      content: <LineChart data={runsData} xKey="hour"
                 series={[{ key: 'success', name: 'Success' }, { key: 'failure', name: 'Failure' }]} /> },
    { id: 'top',      title: 'Top pipelines',      type: 'bar',
      content: <BarChart data={[]} xKey="name" yKey="count" /> },
    { id: 'latency',  title: 'Latencia por etapa', type: 'area', span: 2,
      content: <AreaChart data={[]} xKey="t" series={[{ key: 'p50' }, { key: 'p95' }]} variant="stacked" /> },
  ],
})
```

### 7.2 CRUD

```tsx
import { crudPage, Badge } from '@fn_library'
import type { ColumnDef } from '@fn_library'

interface Target { app: string; host: string; port: number; status: 'ok' | 'down' }

const columns: ColumnDef<Target>[] = [
  { key: 'app', label: 'App' },
  { key: 'host', label: 'Host', render: (v) => <Badge variant="outline">{v as string}</Badge> },
  { key: 'port', label: 'Port', format: 'number' },
  { key: 'status', label: 'Status',
    render: (v) => <Badge variant={v === 'ok' ? 'success' : 'destructive'}>{v as string}</Badge> },
]

export const DeployTargets = () => crudPage<Target>({
  title: 'Deploy Targets',
  columns,
  rows: [],
  schema: {
    app:      { type: 'text',   label: 'App',      required: true },
    host:     { type: 'select', label: 'Host',     options: ['vps-1','vps-2'] },
    port:     { type: 'number', label: 'Port',     min: 1, max: 65535 },
    build:    { type: 'textarea', label: 'Build cmd' },
  },
  onAdd: async (row) => { /* ... */ },
  onEdit: async (row) => { /* ... */ },
  onDelete: async (row) => { /* ... */ },
})
```

### 7.3 Página de detalle

```tsx
import { detailPage, Badge } from '@fn_library'

export const FunctionDetail = (fn) => detailPage({
  entity: { title: fn.id, subtitle: fn.description, avatar: fn.name.slice(0,2).toUpperCase(),
            badge: <Badge variant="secondary">{fn.domain}</Badge>, backHref: '/functions' },
  fields: [
    { label: 'Language',   value: fn.lang },
    { label: 'Purity',     value: fn.purity },
    { label: 'Kind',       value: fn.kind },
    { label: 'Version',    value: fn.version },
    { label: 'Tested',     value: fn.tested ? 'yes' : 'no' },
    { label: 'Source',     value: fn.source_repo || '—' },
  ],
  tabs: [
    { key: 'code',  label: 'Code',  count: 1, content: <pre>{fn.code}</pre> },
    { key: 'tests', label: 'Tests', count: fn.tests_count },
    { key: 'deps',  label: 'Deps',  count: fn.deps_count },
  ],
  timeline: fn.activity,
})
```

---

## 8. Theming

Cada app define su `theme`:

```tsx
import { createTheme, type MantineThemeOverride } from '@mantine/core'

export const theme: MantineThemeOverride = createTheme({
  primaryColor: 'indigo',
  primaryShade: { light: 6, dark: 4 },
  fontFamily: 'Geist Variable, sans-serif',
  headings: { fontFamily: 'Geist Variable, sans-serif', fontWeight: '600' },
  defaultRadius: 'md',
  // colores custom solo si son parte del brand
  colors: {
    brand: ['#f0f4ff','#d9e2ff','#b3c7ff','#8daaff','#668dff','#3f70ff','#3059d9','#2242b3','#13298d','#041066'],
  },
})
```

Y lo pasa al provider:

```tsx
<FnMantineProvider theme={theme} defaultColorScheme="dark">
  <App />
</FnMantineProvider>
```

**No** definas variables CSS custom, **no** toques `:root`, **no** cargues hojas de estilo adicionales. Mantine genera todas las variables (`--mantine-color-*`, `--mantine-spacing-*`, `--mantine-radius-*`) automáticamente del `theme`.

---

## 9. Anti-patrones (rechazar en code review)

```tsx
// ❌ className con clases custom
<Button className="bg-blue-500 rounded-lg px-4 py-2">Click</Button>

// ❌ CSS modules, Tailwind, style inline
<div className={styles.card} />
<div className="flex flex-col gap-4" />
<div style={{ display: 'flex', gap: 16 }} />
// ✅ en su lugar
<Stack gap="md" />

// ❌ Mantine directo en apps
import { Button } from '@mantine/core'
// ✅
import { Button } from '@fn_library'

// ❌ Iconos ajenos
import { Plus } from 'lucide-react'
// ✅
import { IconPlus } from '@tabler/icons-react'

// ❌ HTML nativo para formulario
<label>Email<input type="email" /></label>
// ✅
<FormField label="Email"><Input type="email" /></FormField>

// ❌ <table> a mano
<table><thead>...</thead><tbody>...</tbody></table>
// ✅
<DataTable data={rows} columns={cols} />

// ❌ Recharts directo
import { LineChart } from 'recharts'
// ✅
import { LineChart } from '@fn_library'
```

---

## 10. Checklist para handoffs de Claude Design

Antes de integrar un export al repo, verificar:

- [ ] Todos los imports UI vienen de `@fn_library` (excepto layout Mantine: `Stack`, `Group`, `SimpleGrid`, `Grid`, `Paper`, `Box`, `Container`, `Flex`, `Title`, `Text`, `AppShell`).
- [ ] Cero imports de `lucide-react`, `shadcn`, `@radix-ui/*`, `tailwindcss`, `clsx`, `cn`, `cva`, `framer-motion`, `chakra`, `mui`, `antd`.
- [ ] Cero `className` con clases CSS propias (solo se toleran las que el wrapper pasa al nodo raíz para forwardref).
- [ ] Iconos únicamente `@tabler/icons-react`.
- [ ] Charts únicamente `LineChart`/`BarChart`/`AreaChart`/`PieChart`/`Sparkline` del registry.
- [ ] Formulario con `FormField` wrapper para cada campo.
- [ ] Tablas con `DataTable`.
- [ ] KPIs con `KPICard`.
- [ ] Página entera envuelta en `FnMantineProvider` (solo el root).
- [ ] Si aparece un componente que no existe en `@fn_library`, decidir: (a) reescribirlo con wrappers existentes, o (b) extraerlo como función nueva al registry (`frontend/functions/ui/{name}.tsx` + `.md` + `fn index`).

---

## 11. Metadata para Claude Design

Cuando enlaces este repo en `claude.ai/design`, apunta al subdirectorio **`frontend/`** (no a la raíz del monorepo). Lo único que necesita leer para entender el sistema:

```
frontend/
  DESIGN_SYSTEM.md           ← este documento (regla suprema)
  package.json               ← dependencias runtime
  functions/ui/              ← los 75 componentes con .tsx + .md
    index.ts                 ← barrel @fn_library
```

Si aun así es demasiado, usa el **repo espejo** `fn-design-system` (generado desde este repo) que contiene exactamente esos archivos y nada más.
