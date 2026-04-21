---
name: kpi_card
kind: component
lang: ts
domain: ui
version: "2.0.0"
purity: impure
signature: "KPICard(props: KPICardProps): JSX.Element"
description: "Card de KPI con label, valor+unidad, delta descriptivo con color semántico, icono, slot de chart inline y action. 3 tamaños."
tags: [kpi, card, metrics, dashboard, component, ui, sparkline]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: [react]
output: "Componente KPICard que renderiza card de métrica con label, valor, delta descriptivo, icono y slot de mini chart"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/kpi_card.tsx"
props:
  - name: label
    type: "string"
    required: true
    description: "Etiqueta del KPI"
  - name: value
    type: "string | number"
    required: true
    description: "Valor principal"
  - name: unit
    type: "string"
    required: false
    description: "Unidad junto al valor en font menor (ej: k, ms, %)"
  - name: delta
    type: "{ value: number; isPositive: boolean; label?: string; suffix?: string }"
    required: false
    description: "Cambio con dirección, label descriptivo y sufijo"
  - name: icon
    type: "ReactNode"
    required: false
    description: "Icono a la izquierda del label"
  - name: action
    type: "ReactNode"
    required: false
    description: "Slot top-right para menú o acciones"
  - name: chart
    type: "ReactNode"
    required: false
    description: "Slot para mini chart inline junto al valor"
  - name: size
    type: "'sm' | 'default' | 'lg'"
    required: false
    description: "Tamaño"
emits: []
has_state: false
framework: react
variant: [sm, default, lg]
source_repo: "https://gitea-dgg044oo04woo4ggcsws4gk0.organic-machine.com/Bl4cksmith/Frontend_Library"
source_license: "MIT"
source_file: "frontend/src/components/ui/kpi-card.tsx"
---

## Ejemplo

```tsx
import { KPICard, Sparkline } from '@fn_library'

{/* Básico */}
<KPICard label="Revenue" value="$12,450" delta={{ value: 12.5, isPositive: true }} />

{/* Con unidad separada, delta descriptivo, y mini barras */}
<KPICard
  label="Processed Prompts"
  value="124"
  unit="k"
  icon={<ZapIcon className="h-4 w-4" />}
  delta={{ value: 15, isPositive: true, label: "Prompts Increased by", suffix: "vs yesterday" }}
  chart={<Sparkline data={[5, 8, 3, 9, 6, 12, 7]} variant="bar" colors={['#3b82f6', '#8b5cf6', '#f59e0b', '#10b981', '#ef4444', '#ec4899', '#06b6d4']} height={32} />}
  action={<button className="text-muted-foreground hover:text-foreground">...</button>}
/>

{/* Dashboard dark sin bordes */}
<KPICard label="Sessions" value={9821} className="border-0 shadow-none" />
```

## Notas

- El icono ahora se renderiza a la **izquierda** del label (antes estaba a la derecha).
- `unit` separa la unidad del valor con font menor para el efecto "124 k" del diseño.
- `delta.label` y `delta.suffix` permiten texto descriptivo: "Increased by ▲ +15% vs yesterday".
- `chart` es un slot genérico — pasar un `<Sparkline variant="bar" colors={[...]} />` para mini barras multicolor.
- `action` es un slot top-right para menú contextual.
- Usa `cn()` para merge de clases. `className="border-0 shadow-none"` para dashboards dark.
