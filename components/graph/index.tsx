import * as React from "react"
import Graph from "graphology"
import forceAtlas2 from "graphology-layout-forceatlas2"
import { Sigma } from "sigma"

// ── Types ─────────────────────────────────────────────────────────────────

export interface GraphNode {
  id: string
  label: string
  type?: string
  color?: string
  size?: number
  x?: number
  y?: number
  [key: string]: unknown
}

export interface GraphEdge {
  id: string
  source: string
  target: string
  label?: string
  color?: string
  size?: number
  type?: "arrow" | "line"
  weight?: number
  [key: string]: unknown
}

export interface GraphData {
  nodes: GraphNode[]
  edges: GraphEdge[]
}

export interface NodeType {
  type: string
  color: string
  label: string
}

export interface GraphTheme {
  backgroundColor?: string
  nodeColor?: string
  nodeSize?: number
  edgeColor?: string
  edgeSize?: number
  labelColor?: string
  selectionColor?: string
}

export interface ContextMenuTarget {
  type: "node" | "edge" | "canvas"
  id?: string
  data?: GraphNode | GraphEdge
}

export interface GraphContainerProps {
  data: GraphData
  layout?: "organic" | "random"
  showToolbar?: boolean
  showLegend?: boolean
  showMinimap?: boolean
  nodeTypes?: NodeType[]
  onNodeClick?: (node: GraphNode) => void
  onNodeDoubleClick?: (node: GraphNode) => void
  onContextMenu?: (event: MouseEvent, target: ContextMenuTarget) => void
  enableSelection?: boolean
  selectionMode?: "single" | "multiple"
  theme?: GraphTheme
  height?: string | number
  className?: string
}

const DEFAULT_THEME: Required<GraphTheme> = {
  backgroundColor: "var(--background, #0a0a0f)",
  nodeColor: "#95a5a6",
  nodeSize: 8,
  edgeColor: "rgba(255,255,255,0.19)",
  edgeSize: 1,
  labelColor: "#e0e0e0",
  selectionColor: "#3b82f6",
}

// ── Component ─────────────────────────────────────────────────────────────

function GraphContainer({
  data,
  layout = "organic",
  showLegend = false,
  nodeTypes = [],
  onNodeClick,
  onNodeDoubleClick,
  onContextMenu,
  theme: themeProp,
  height = "100%",
  className,
}: GraphContainerProps) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const sigmaRef = React.useRef<Sigma | null>(null)
  const graphRef = React.useRef<Graph | null>(null)
  const theme = React.useMemo(
    () => ({ ...DEFAULT_THEME, ...themeProp }),
    [themeProp],
  )

  // Build + render — wait for container to have dimensions
  const [ready, setReady] = React.useState(false)
  React.useEffect(() => {
    const el = containerRef.current
    if (!el) return
    if (el.clientHeight > 0 && el.clientWidth > 0) {
      setReady(true)
      return
    }
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentRect.height > 0 && entry.contentRect.width > 0) {
          setReady(true)
          ro.disconnect()
        }
      }
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  React.useEffect(() => {
    const el = containerRef.current
    if (!el || !ready) return

    // Cleanup previous instance
    if (sigmaRef.current) {
      sigmaRef.current.kill()
      sigmaRef.current = null
    }

    const g = new Graph({ multi: true, type: "directed" })
    graphRef.current = g

    // Add nodes — store entity type as entityType to avoid sigma interpreting it as render program
    for (const n of data.nodes) {
      g.addNode(n.id, {
        label: n.label,
        x: n.x ?? (Math.random() - 0.5) * 10,
        y: n.y ?? (Math.random() - 0.5) * 10,
        size: n.size ?? theme.nodeSize,
        color: n.color ?? theme.nodeColor,
        entityType: n.type,
      })
    }

    // Add edges
    for (const e of data.edges) {
      try {
        g.addEdgeWithKey(e.id, e.source, e.target, {
          label: e.label,
          size: e.size ?? theme.edgeSize,
          color: e.color ?? theme.edgeColor,
          type: e.type === "arrow" ? "arrow" : "line",
          weight: e.weight ?? 1,
        })
      } catch {
        // skip duplicate keys
      }
    }

    // Layout
    if (layout === "organic" && g.order > 0) {
      forceAtlas2.assign(g, {
        iterations: Math.min(500, Math.max(100, g.order * 5)),
        settings: {
          gravity: 1,
          scalingRatio: 2,
          slowDown: 5,
          barnesHutOptimize: g.order > 300,
        },
      })
    }

    // Render
    const renderer = new Sigma(g, el, {
      allowInvalidContainer: true,
      renderEdgeLabels: false,
      defaultEdgeColor: theme.edgeColor,
      defaultNodeColor: theme.nodeColor,
      labelColor: { color: theme.labelColor },
      labelSize: 11,
    })

    sigmaRef.current = renderer

    // Events
    if (onNodeClick) {
      renderer.on("clickNode", ({ node }) => {
        const attrs = g.getNodeAttributes(node)
        onNodeClick({ id: node, ...attrs } as unknown as GraphNode)
      })
    }
    if (onNodeDoubleClick) {
      renderer.on("doubleClickNode", ({ node }) => {
        const attrs = g.getNodeAttributes(node)
        onNodeDoubleClick({ id: node, ...attrs } as unknown as GraphNode)
      })
    }
    if (onContextMenu) {
      renderer.on("rightClickNode", ({ node, event }) => {
        const mouseEvent = event.original as MouseEvent
        mouseEvent.preventDefault()
        const attrs = g.getNodeAttributes(node)
        onContextMenu(mouseEvent, {
          type: "node",
          id: node,
          data: { id: node, ...attrs } as unknown as GraphNode,
        })
      })
      renderer.on("rightClickStage", ({ event }) => {
        const mouseEvent = event.original as MouseEvent
        mouseEvent.preventDefault()
        onContextMenu(mouseEvent, { type: "canvas" })
      })
    }

    return () => {
      renderer.kill()
      sigmaRef.current = null
      graphRef.current = null
    }
  }, [data, layout, theme, onNodeClick, onNodeDoubleClick, onContextMenu, ready])

  // Container background
  const containerStyle: React.CSSProperties = {
    height,
    width: "100%",
    position: "relative",
    background: theme.backgroundColor,
    borderRadius: "var(--radius, 0.5rem)",
    overflow: "hidden",
  }

  return (
    <div className={className} style={containerStyle}>
      <div ref={containerRef} style={{ width: "100%", height: "100%" }} />
      {showLegend && nodeTypes.length > 0 && (
        <div
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            background: "rgba(0,0,0,0.7)",
            backdropFilter: "blur(6px)",
            borderRadius: 8,
            padding: "10px 14px",
            fontSize: 12,
            display: "flex",
            flexDirection: "column",
            gap: 6,
          }}
        >
          {nodeTypes.map((nt) => (
            <div
              key={nt.type}
              style={{ display: "flex", alignItems: "center", gap: 8 }}
            >
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: nt.color,
                  flexShrink: 0,
                }}
              />
              <span style={{ color: theme.labelColor }}>{nt.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export { GraphContainer }
