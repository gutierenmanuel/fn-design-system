---
name: crud_page
kind: function
lang: ts
domain: ui
version: "1.0.0"
purity: pure
signature: "crudPage<T>(props: CrudPageProps<T>): ReactElement"
description: "Genera una página CRUD completa con header, tabla con columnas configurables, botones de acción (add/edit/delete) y schema de formulario."
tags: [crud, page, table, form, factory, composition, ui]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: [react, "@mantine/core", "@tabler/icons-react"]
params:
  - name: props
    desc: "Configuración CRUD: título, datos, columnas de tabla, campos de formulario y callbacks para add/edit/delete"
output: "Componente ReactElement que renderiza página CRUD completa con tabla y botones de acción"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/crud_page.tsx"
source_repo: "https://gitea-dgg044oo04woo4ggcsws4gk0.organic-machine.com/Bl4cksmith/Frontend_Library"
source_license: "MIT"
source_file: ""
---

## Ejemplo

```tsx
crudPage({
  title: 'Users',
  subtitle: 'Manage system users',
  data: users,
  fields: [
    { key: 'name', label: 'Name', type: 'text', required: true },
    { key: 'email', label: 'Email', type: 'email', required: true },
    { key: 'role', label: 'Role', type: 'select', options: [{ label: 'Admin', value: 'admin' }, { label: 'User', value: 'user' }] },
  ],
  columns: [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role', render: (v) => <Badge variant={v === 'admin' ? 'default' : 'secondary'}>{v}</Badge> },
  ],
  onAdd: handleAdd,
  onEdit: handleEdit,
  onDelete: handleDelete,
})
```

## Notas

El schema de campos se almacena como data attribute para que un agente pueda leerlo y generar el formulario de diálogo correspondiente. La tabla incluye sorting visual implícito por columnas.
