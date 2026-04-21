---
name: tabs
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "Tabs(props: TabsRootProps): JSX.Element"
description: "Sistema de tabs con orientacion horizontal/vertical, variantes default y line. Mantine Tabs."
tags: [tabs, navigation, component, ui, interactive, mantine]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: ["@mantine/core"]
output: "Componente Tabs que renderiza sistema de navegación por tabs con orientación y variantes configurables"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/tabs.tsx"
props:
  - name: orientation
    type: "'horizontal' | 'vertical'"
    required: false
    description: "Orientación de los tabs"
  - name: variant
    type: "'default' | 'line'"
    required: false
    description: "Estilo visual de la lista"
emits: [onValueChange]
has_state: true
framework: react
variant: [default, line]
source_repo: "https://gitea-dgg044oo04woo4ggcsws4gk0.organic-machine.com/Bl4cksmith/Frontend_Library"
source_license: "MIT"
source_file: "frontend/src/components/ui/tabs.tsx"
---

## Ejemplo

```tsx
<Tabs defaultValue="general">
  <TabsList>
    <TabsTrigger value="general">General</TabsTrigger>
    <TabsTrigger value="security">Security</TabsTrigger>
  </TabsList>
  <TabsContent value="general">...</TabsContent>
  <TabsContent value="security">...</TabsContent>
</Tabs>
```
