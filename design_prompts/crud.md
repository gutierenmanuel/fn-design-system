# CRUD

Diseña una página de gestión de `{ENTIDAD}` usando `crudPage<T>` como generator raíz. Respeta `DESIGN_SYSTEM.md`.

## Entidad
TypeScript:
```ts
interface {Entidad} {
  {campo1}: {tipo}
  {campo2}: {tipo}
  // ...
}
```

## Columnas de la tabla
| key | label | format / render |
|-----|-------|-----------------|
| {id}     | ID      | texto corto |
| {nombre} | Nombre  | texto |
| {status} | Status  | Badge semántico (success/destructive/warning según valor) |
| {price}  | Precio  | format=currency |
| {created} | Creado | format=datetime |

## Acciones
- Header: `{Add Entidad}` (button default + IconPlus)
- Por fila (en DropdownMenu): {Edit, Delete, Ver detalle, Duplicar}

## Form schema (modal create/edit)
| field | type | label | validación |
|-------|------|-------|------------|
| {nombre}  | text     | Nombre      | required |
| {categoria} | select | Categoría   | required, opciones: [...] |
| {price}   | number   | Precio      | min 0 |
| {notes}   | textarea | Notas       | — |
| {active}  | toggle   | Activo      | default true |

## Filtros
Barra de filtros arriba: {lista de SearchBar / SimpleSelect / Chips / DatePickerInput}

## Notas
- {paginación / sort / bulk actions si aplican}

Entrégalo listo para Handoff to Claude Code. Mock data realista.
