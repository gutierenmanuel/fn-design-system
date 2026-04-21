# Login / Register

Diseña una página de autenticación usando `AuthForm` del registry. Respeta `DESIGN_SYSTEM.md`.

## Config
- **Modo por defecto:** `login` / `register` / `toggle` (con switch entre ambos)
- **Nombre de la app:** `{NOMBRE}` (aparece en el header)
- **Logo:** {icono Tabler / SVG inline / texto}

## Campos
### Login
- `email` · text · required
- `password` · password_input · required + strength meter: {sí/no}
- `remember_me` · switch_toggle · default true

### Register (extra a los de login)
- `full_name` · text · required
- `organization` · text · optional
- `terms` · checkbox · required · label: "Acepto los términos y condiciones"

## Social buttons (opcional)
{marca los que aplican}
- [ ] Google (IconBrandGoogle)
- [ ] GitHub (IconBrandGithub)
- [ ] GitLab (IconBrandGitlab)
- [ ] SSO corporativo (IconShieldLock, texto "Continue with SSO")

## Footer
- Link "¿Olvidaste la contraseña?" → `/forgot-password`
- Link "¿No tienes cuenta? Regístrate" (solo en modo login)

## Layout
- Centrado vertical y horizontal en viewport.
- Card con `variant="default"`, radius `lg`, padding `xl`, max-width `400px`.
- Fondo: color scheme dark (por defecto) con un sutil patrón o gradiente: {describe o "sin fondo"}.

Entrégalo listo para Handoff to Claude Code.
