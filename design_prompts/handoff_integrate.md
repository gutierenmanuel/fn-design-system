# Handoff Integrate — prompt para Claude Code (yo)

Usa este prompt cuando tengas el export de Claude Design y quieras que lo integre al registry.

---

Acabo de terminar un diseño en Claude Design y te paso el export. Quiero que lo integres en `fn_registry` siguiendo `frontend/DESIGN_SYSTEM.md`.

## Destino
- **App:** `apps/{APP}/` (si no existe, dímelo y decidimos si se crea).
- **Ruta / componente:** `{src/pages/Whatever.tsx}` o similar.

## Contexto del diseño
- **Tipo:** `{dashboard / crud / detail / settings / auth / error / custom}`
- **Propósito:** `{1-2 frases}`

## Export de Claude Design
{pega aquí los ficheros `.tsx` que te dio el handoff. Si son varios, uno bajo cada encabezado `### path/to/file.tsx` con el código dentro de ``` ```.}

## Qué necesito que hagas
1. **Verifica** que todo lo importable de UI viene de `@fn_library` (no `@mantine/core` directo, no HTML nativo, no librerías ajenas). Si el export usa otra cosa, reescríbelo con wrappers del registry.
2. **Valida** la deny-list: cero `tailwindcss`, `clsx`, `cn`, `cva`, `lucide-react`, `shadcn`, `@radix-ui/*`, `framer-motion`, `chakra`, `mui`, `antd`, CSS modules, className con clases propias, style inline para maquetar.
3. **Migra** cualquier icono a `@tabler/icons-react`.
4. **Coloca** los ficheros bajo `apps/{APP}/frontend/src/` respetando la estructura existente.
5. Si aparece un **componente que no existe en `@fn_library` pero tiene sentido como primitiva reutilizable**, dime: propones extraerlo a `frontend/functions/ui/{nombre}.tsx` + `.md` y corremos `fn index`. No lo hagas sin confirmar.
6. **Verifica** con `pnpm tsc --noEmit` o `pnpm build` que compila. Si no, arregla los imports.
7. **Reporta** en tres líneas: qué integraste, qué cambiaste del export, y qué quedó pendiente.

No inventes features. No añadas lógica que no estaba en el export. Integración fiel + adaptación al stack.
