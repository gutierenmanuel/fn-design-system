# Página de configuración

Diseña una página de settings usando `settingsPage` como generator raíz. Respeta `DESIGN_SYSTEM.md`.

## Navegación lateral
| key | label | icono Tabler |
|-----|-------|--------------|
| {general}       | General        | IconSettings |
| {profile}       | Perfil         | IconUser |
| {notifications} | Notificaciones | IconBell |
| {security}      | Seguridad      | IconLock |
| {billing}       | Facturación    | IconCreditCard |
| {api_keys}      | API Keys       | IconKey |

## Secciones (una por key de nav)

### {general}
- `{site_name}` · text · "Nombre del sitio"
- `{timezone}` · select · opciones `[UTC, Europe/Madrid, ...]`
- `{language}` · simple_select · `[es, en, fr]`

### {profile}
- `{full_name}` · text · required
- `{email}` · text · required, validación email
- `{avatar}` · file_input · image/*
- `{bio}` · textarea · maxlength 500

### {notifications}
- `{email_alerts}` · toggle · default true
- `{daily_digest}` · toggle · default false
- `{quiet_hours}` · date_picker_input (range)

### {security}
- Password change (PasswordInput old + new + confirm)
- 2FA toggle
- Active sessions list (DataTable + "Revoke" per row)

## Guardado
- Botones al pie de cada sección: "Cancelar" (ghost) + "Guardar cambios" (default).
- O autosave con toast de confirmación (si lo prefieres, explícalo aquí).

Entrégalo listo para Handoff to Claude Code.
