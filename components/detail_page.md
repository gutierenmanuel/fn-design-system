---
name: detail_page
kind: function
lang: ts
domain: ui
version: "1.0.0"
purity: pure
signature: "detailPage(props: DetailPageProps): ReactElement"
description: "Genera una página de detalle de entidad con header (avatar, badge, back), grid de campos, tabs con contadores y timeline de actividad."
tags: [detail, page, entity, timeline, factory, composition, ui]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: [react, "@mantine/core", "@tabler/icons-react"]
params:
  - name: props
    desc: "Configuración de página de detalle: título, avatar, badge, tabs, timeline y campos de metadata"
output: "Componente ReactElement que renderiza página de detalle con header, grid de campos y timeline de actividad"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/detail_page.tsx"
source_repo: "https://gitea-dgg044oo04woo4ggcsws4gk0.organic-machine.com/Bl4cksmith/Frontend_Library"
source_license: "MIT"
source_file: ""
---

## Ejemplo

```tsx
detailPage({
  title: 'John Doe',
  subtitle: 'john@example.com',
  badge: <Badge variant="success">Active</Badge>,
  onBack: () => router.back(),
  fields: [
    { label: 'Role', value: 'Administrator' },
    { label: 'Created', value: 'Mar 15, 2026' },
    { label: 'Bio', value: 'Full stack developer...', span: 2 },
  ],
  tabs: [
    { label: 'Projects', value: 'projects', count: 12, content: <ProjectList /> },
    { label: 'Activity', value: 'activity', count: 48, content: <ActivityList /> },
  ],
  activeTab: 'projects',
  timeline: [
    { id: '1', title: 'Deployed v2.1', timestamp: '2 hours ago', variant: 'success' },
    { id: '2', title: 'Updated settings', timestamp: 'Yesterday' },
    { id: '3', title: 'Created project', timestamp: 'Mar 10, 2026' },
  ],
})
```

## Notas

Factory completa para páginas de detalle. Combina header con back/avatar/badge, grid de metadata, tabs con badges de conteo, y timeline de actividad con variantes de color semántico.
