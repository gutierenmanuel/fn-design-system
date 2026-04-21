---
name: use_wails_event
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "useWailsEvent<T>(opts: UseWailsEventOptions<T>): UseWailsEventResult<T>"
description: "Hook para suscripción a eventos Go→TS y emisión TS→Go via Wails runtime. Soporta once, maxCallbacks, emit bidireccional."
tags: [wails, event, hook, ipc, realtime, component, ui]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: [react]
params:
  - name: opts
    desc: "Configuración: eventName, onEvent callback, once, enabled para controlar suscripción"
output: "Hook que retorna lastData, eventCount, emit y funciones para suscribirse a eventos Wails bidireccionales"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/use_wails_event.tsx"
props:
  - name: eventName
    type: "string"
    required: true
    description: "Nombre del evento Wails"
  - name: onEvent
    type: "(data: T) => void"
    required: false
    description: "Callback al recibir evento"
  - name: once
    type: "boolean"
    required: false
    description: "Solo escuchar una vez"
  - name: enabled
    type: "boolean"
    required: false
    description: "Habilitar suscripción"
emits: [onEvent]
has_state: true
framework: react
variant: [default]
source_repo: "https://gitea-dgg044oo04woo4ggcsws4gk0.organic-machine.com/Bl4cksmith/Frontend_Library"
source_license: "MIT"
source_file: "frontend/src/lib/wails/use-wails-event.tsx"
---

## Ejemplo

```tsx
// Escuchar eventos de Go
const { lastData, eventCount, emit } = useWailsEvent<PriceUpdate>({
  eventName: 'price:update',
  onEvent: (price) => updateChart(price),
})

// Emitir de TS a Go
emit({ symbol: 'BTC', action: 'subscribe' })
```

## Notas

Exporta también `useWailsEmit()` para emit sin suscripción. Usa `window.runtime.EventsOn/Off/Emit` del Wails runtime.
