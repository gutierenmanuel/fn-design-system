import { useEffect, useRef } from 'react'

export interface AnimatedCanvasOptions {
  /** Target FPS (default 60). El throttle real es 1000/fps ms. */
  fps?: number
  /** Callback de dibujo. Recibe el canvas 2d context y dimensiones. */
  draw: (ctx: CanvasRenderingContext2D, width: number, height: number, frameCount: number) => void
}

export interface AnimatedCanvasResult {
  canvasRef: React.RefObject<HTMLCanvasElement | null>
  /** FPS real de renderizado (actualizado cada segundo) */
  renderFpsRef: React.RefObject<number>
}

/**
 * Hook para renderizar un canvas a N fps usando requestAnimationFrame.
 * Maneja DPR, resize, y throttling automático.
 */
export function useAnimatedCanvas(options: AnimatedCanvasOptions): AnimatedCanvasResult {
  const { fps = 60, draw } = options
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const renderFpsRef = useRef(0)
  const rafRef = useRef(0)
  const lastDrawRef = useRef(0)
  const frameCountRef = useRef(0)
  const fpsTimerRef = useRef(0)
  const drawRef = useRef(draw)

  // Keep draw ref updated without re-subscribing the effect
  drawRef.current = draw

  useEffect(() => {
    const interval = 1000 / fps

    const loop = (now: number) => {
      rafRef.current = requestAnimationFrame(loop)

      if (now - lastDrawRef.current < interval) return
      lastDrawRef.current = now

      // FPS counting
      frameCountRef.current++
      if (now - fpsTimerRef.current >= 1000) {
        renderFpsRef.current = frameCountRef.current
        frameCountRef.current = 0
        fpsTimerRef.current = now
      }

      const canvas = canvasRef.current
      if (!canvas) return

      const rect = canvas.getBoundingClientRect()
      const w = rect.width
      const h = rect.height
      const dpr = window.devicePixelRatio || 1

      const targetW = Math.floor(w * dpr)
      const targetH = Math.floor(h * dpr)

      if (canvas.width !== targetW || canvas.height !== targetH) {
        canvas.width = targetW
        canvas.height = targetH
      }

      const ctx = canvas.getContext('2d')
      if (!ctx) return

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, w, h)

      drawRef.current(ctx, w, h, frameCountRef.current)
    }

    rafRef.current = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(rafRef.current)
  }, [fps])

  return { canvasRef, renderFpsRef }
}
