---
name: command
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "Command(props: CommandProps): JSX.Element"
description: "Combobox de busqueda y seleccion estilo cmdk. Filtra items por query, soporta grupos, iconos y shortcuts. Incluye CommandSearch para uso de una linea."
tags: [command, search, combobox, component, ui, interactive]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: ["@mantine/core", "@tabler/icons-react"]
output: "Componente Command que renderiza combobox de búsqueda y selección con filtrado reactivo, grupos e iconos"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/command.tsx"
props:
  - name: items
    type: "CommandItem[]"
    required: true
    description: "Array de items con value, label, description, icon, disabled, group"
  - name: value
    type: "string"
    required: false
    description: "Valor seleccionado (controlado)"
  - name: onValueChange
    type: "(value: string) => void"
    required: false
    description: "Callback al seleccionar un item"
  - name: placeholder
    type: "string"
    required: false
    description: "Placeholder del input de busqueda (default: Search...)"
  - name: emptyMessage
    type: "string"
    required: false
    description: "Mensaje cuando no hay resultados (default: No results found.)"
emits: [onValueChange]
has_state: true
framework: react
variant: []
---

## Ejemplo

```tsx
// Uso simple con CommandSearch
const items = [
  { value: "react", label: "React", group: "Frameworks" },
  { value: "vue", label: "Vue", group: "Frameworks" },
  { value: "typescript", label: "TypeScript", group: "Lenguajes" },
]

<CommandSearch
  items={items}
  placeholder="Buscar tecnologia..."
  onValueChange={(val) => console.log(val)}
/>

// Composable para mayor control
<Command>
  <CommandInput placeholder="Buscar..." value={query} onChange={(e) => setQuery(e.target.value)} />
  <CommandList>
    <CommandEmpty>Sin resultados.</CommandEmpty>
    <CommandGroup heading="Sugerencias">
      <CommandItem selected={selected === "1"} onSelect={() => setSelected("1")}>
        Opcion 1
        <CommandShortcut>⌘K</CommandShortcut>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>
```

## Notas

Implementacion propia (sin dependencia de cmdk) usando primitivos HTML nativos. CommandSearch es el wrapper de alto nivel con filtrado reactivo integrado. El filtrado es case-insensitive sobre label, description y value. Los grupos se renderizan en orden de aparicion en items.
