---
name: use_wails_stream
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "useWailsStream<T>(opts: UseWailsStreamOptions<T>): UseWailsStreamResult<T>"
description: "Hook para streaming de datos Go→TS con buffer configurable, auto-complete, transform y control start/stop. Incluye useWailsLogs."
tags: [wails, stream, hook, ipc, realtime, buffer, component, ui]
uses_functions: [use_wails_event_ts_ui]
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: [react]
params:
  - name: opts
    desc: "Configuración: streamName, startFn/stopFn para control, bufferSize, transform para procesamiento"
output: "Hook que retorna data (array bufferado), isStreaming, start, stop, clear para streaming Go→TS"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/use_wails_stream.tsx"
props:
  - name: streamName
    type: "string"
    required: true
    description: "Nombre del evento de stream"
  - name: startFn
    type: "() => Promise<void>"
    required: false
    description: "Función Go para iniciar el stream"
  - name: stopFn
    type: "() => Promise<void>"
    required: false
    description: "Función Go para detener el stream"
  - name: bufferSize
    type: "number"
    required: false
    description: "Tamaño máximo del buffer (default 1000)"
  - name: transform
    type: "(data: unknown) => T"
    required: false
    description: "Transformar datos entrantes"
emits: [onData, onComplete, onError]
has_state: true
framework: react
variant: [default]
source_repo: "https://gitea-dgg044oo04woo4ggcsws4gk0.organic-machine.com/Bl4cksmith/Frontend_Library"
source_license: "MIT"
source_file: "frontend/src/lib/wails/use-wails-stream.tsx"
---

## Ejemplo

```tsx
// Stream de logs en tiempo real
const { data: logs, isStreaming, start, stop, clear } = useWailsStream<string>({
  streamName: 'app:logs',
  startFn: () => StartLogStream(),
  stopFn: () => StopLogStream(),
  bufferSize: 500,
  autoStart: true,
})

// Versión simplificada para logs
const { data: logs } = useWailsLogs('deploy:logs')
```

## Notas

Protocolo de stream: Go emite chunks en `{streamName}`, completa con `{streamName}:complete`, errores con `{streamName}:error`. Buffer circular con tamaño configurable.
