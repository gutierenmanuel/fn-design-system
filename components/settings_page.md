---
name: settings_page
kind: function
lang: ts
domain: ui
version: "1.0.0"
purity: pure
signature: "settingsPage(props: SettingsPageProps): ReactElement"
description: "Genera una página de configuración con navegación lateral, secciones y campos de formulario (text, number, toggle, select, textarea)."
tags: [settings, page, form, sections, factory, composition, ui]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: [react, "@mantine/core"]
params:
  - name: props
    desc: "Configuración: título, secciones con campos (text, number, toggle, select, textarea) y callback onSave"
output: "Componente ReactElement que renderiza página de configuración con sidebar y secciones navegables"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/settings_page.tsx"
source_repo: "https://gitea-dgg044oo04woo4ggcsws4gk0.organic-machine.com/Bl4cksmith/Frontend_Library"
source_license: "MIT"
source_file: ""
---

## Ejemplo

```tsx
settingsPage({
  title: 'Project Settings',
  sections: [
    {
      id: 'general',
      title: 'General',
      description: 'Basic project configuration',
      fields: [
        { key: 'name', label: 'Project Name', type: 'text', value: 'My Project' },
        { key: 'visibility', label: 'Public', description: 'Make project visible to everyone', type: 'toggle', value: true },
        { key: 'language', label: 'Language', type: 'select', options: [{ label: 'English', value: 'en' }, { label: 'Spanish', value: 'es' }] },
      ],
    },
    {
      id: 'notifications',
      title: 'Notifications',
      fields: [
        { key: 'email', label: 'Email notifications', type: 'toggle', value: false },
        { key: 'webhook', label: 'Webhook URL', type: 'text', placeholder: 'https://...' },
      ],
    },
  ],
  onSave: handleSave,
})
```

## Notas

Layout de settings estándar con sidebar de navegación (oculta en mobile). Secciones con anclas para scroll. Soporta 5 tipos de campo.
