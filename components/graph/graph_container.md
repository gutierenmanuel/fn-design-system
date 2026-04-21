---
name: graph_container
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "GraphContainer(props: GraphContainerProps): JSX.Element"
description: "Interactive graph visualization with sigma.js, graphology, and ForceAtlas2 layout"
tags: [component, ui, graph, visualization, sigma, graphology, network]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: ["graphology", "graphology-layout-forceatlas2", "sigma"]
output: "Componente GraphContainer que renderiza grafo interactivo con sigma.js, ForceAtlas2 layout y legend"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/graph/index.tsx"
props:
  - name: data
    type: "GraphData"
    required: true
    description: "Graph data with nodes and edges arrays"
  - name: layout
    type: "'organic' | 'random'"
    required: false
    description: "Layout algorithm (default: organic/ForceAtlas2)"
  - name: showLegend
    type: "boolean"
    required: false
    description: "Show node type legend overlay"
  - name: nodeTypes
    type: "NodeType[]"
    required: false
    description: "Node type definitions for legend"
  - name: onNodeClick
    type: "(node: GraphNode) => void"
    required: false
    description: "Node click handler"
  - name: onNodeDoubleClick
    type: "(node: GraphNode) => void"
    required: false
    description: "Node double-click handler"
  - name: theme
    type: "GraphTheme"
    required: false
    description: "Visual theme overrides"
  - name: height
    type: "string | number"
    required: false
    description: "Container height (default: 100%)"
  - name: className
    type: "string"
    required: false
    description: "Additional CSS classes"
emits: []
has_state: true
framework: react
variant: []
---

## Ejemplo

```tsx
import { GraphContainer } from '@fn_library/graph'
import type { GraphData } from '@fn_library/graph'

const data: GraphData = {
  nodes: [
    { id: '1', label: 'Node A', color: '#e74c3c', size: 10 },
    { id: '2', label: 'Node B', color: '#3498db', size: 8 },
  ],
  edges: [
    { id: 'e1', source: '1', target: '2', label: 'connects', type: 'arrow' },
  ],
}

function MyGraph() {
  return (
    <GraphContainer
      data={data}
      layout="organic"
      showLegend
      nodeTypes={[
        { type: 'person', color: '#e74c3c', label: 'Person' },
        { type: 'org', color: '#3498db', label: 'Organization' },
      ]}
      onNodeClick={(node) => console.log('clicked:', node.id)}
      height="500px"
    />
  )
}
```

## Notas

- Usa graphology como estructura de datos de grafo
- ForceAtlas2 para layout organico (iterations adaptativas segun numero de nodos)
- Sigma.js para renderizado WebGL de alto rendimiento
- Soporta grafos dirigidos multi-edge
- El componente limpia la instancia Sigma al desmontar
