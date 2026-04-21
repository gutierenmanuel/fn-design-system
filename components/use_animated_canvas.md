---
name: use_animated_canvas
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "useAnimatedCanvas(options: AnimatedCanvasOptions): AnimatedCanvasResult"
description: "Hook React para canvas animado a N fps via requestAnimationFrame. Maneja DPR, resize, throttling, y contador de FPS real."
tags: [canvas, animation, fps, requestAnimationFrame, hook, realtime, component, ui]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: [react]
params:
  - name: options
    desc: "Configuración: fps (target), draw (callback de renderizado), opcionalmente DPR"
output: "Hook que retorna canvasRef y renderFpsRef para renderizado animado a N fps"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/use_animated_canvas.tsx"
props:
  - name: fps
    type: "number"
    required: false
    description: "Target FPS (default 60)"
  - name: draw
    type: "(ctx: CanvasRenderingContext2D, width: number, height: number, frameCount: number) => void"
    required: true
    description: "Callback de renderizado"
emits: []
has_state: true
framework: react
variant: [default]
---

## Ejemplo

```tsx
const { canvasRef, renderFpsRef } = useAnimatedCanvas({
  fps: 100,
  draw: (ctx, w, h) => {
    // Dibujar lo que sea a 100fps
    ctx.fillStyle = '#3b82f6'
    ctx.fillRect(0, 0, w * Math.random(), h)
  },
})

return <canvas ref={canvasRef} style={{ width: '100%', height: 300 }} />
```

## Notas

- DPR automático: escala el canvas al devicePixelRatio de la pantalla
- Resize automático: detecta cambios de tamaño via getBoundingClientRect
- Throttle configurable: rAF corre a ~144fps nativo, el hook filtra a N fps
- FPS real: `renderFpsRef.current` tiene los FPS medidos (no el target)
- drawRef pattern: actualiza el callback sin re-crear el loop de animación
