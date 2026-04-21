---
name: autocomplete
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "Autocomplete(props: AutocompleteProps): JSX.Element"
description: "Input con sugerencias de autocompletado. Permite valores libres a diferencia de Select. Wrapper sobre Mantine Autocomplete."
tags: [autocomplete, input, form, suggestions, component, ui, interactive, mantine]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: "error_go_core"
imports: ["@mantine/core"]
output: "Componente Autocomplete que renderiza input con dropdown de sugerencias filtradas"
props:
  - name: data
    type: "string[] | { value: string; label?: string; group?: string }[]"
    required: true
    description: "Lista de opciones a mostrar en el dropdown"
  - name: value
    type: "string"
    required: false
    description: "Valor controlado del input"
  - name: onChange
    type: "(value: string) => void"
    required: false
    description: "Callback al cambiar el valor del input"
  - name: label
    type: "string"
    required: false
    description: "Etiqueta visible encima del input"
  - name: placeholder
    type: "string"
    required: false
    description: "Texto placeholder cuando el input está vacío"
  - name: clearable
    type: "boolean"
    required: false
    description: "Muestra botón para limpiar el valor"
  - name: loading
    type: "boolean"
    required: false
    description: "Muestra spinner de carga en el input"
  - name: disabled
    type: "boolean"
    required: false
    description: "Deshabilita el input"
  - name: limit
    type: "number"
    required: false
    description: "Número máximo de sugerencias a mostrar en el dropdown"
  - name: size
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'"
    required: false
    description: "Tamaño visual del input"
emits: [onChange]
has_state: true
framework: react
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/autocomplete.tsx"
---

## Ejemplo

```tsx
import { Autocomplete } from '@fn_library/autocomplete'

// Básico — lista de strings
function BasicAutocomplete() {
  return (
    <Autocomplete
      label="País"
      placeholder="Escribe para buscar..."
      data={['Argentina', 'Brasil', 'Chile', 'Colombia', 'Uruguay']}
    />
  )
}

// Con grupos
function GroupedAutocomplete() {
  return (
    <Autocomplete
      label="Ciudad"
      placeholder="Selecciona una ciudad"
      data={[
        { value: 'Buenos Aires', group: 'Argentina' },
        { value: 'Rosario', group: 'Argentina' },
        { value: 'São Paulo', group: 'Brasil' },
        { value: 'Río de Janeiro', group: 'Brasil' },
      ]}
      limit={5}
    />
  )
}

// Con loading y clearable (búsqueda asíncrona)
function AsyncAutocomplete() {
  const [value, setValue] = useState('')
  const [data, setData] = useState<string[]>([])
  const [loading, setLoading] = useState(false)

  const handleChange = async (val: string) => {
    setValue(val)
    if (val.length < 2) return
    setLoading(true)
    const results = await fetchSuggestions(val)
    setData(results)
    setLoading(false)
  }

  return (
    <Autocomplete
      label="Búsqueda"
      placeholder="Escribe al menos 2 caracteres..."
      value={value}
      onChange={handleChange}
      data={data}
      loading={loading}
      clearable
    />
  )
}
```

## Notas

A diferencia de `Select`, `Autocomplete` permite que el usuario ingrese cualquier valor libre, no solo los de la lista. Ideal para búsquedas con sugerencias donde el valor final puede no estar en el dataset.

Cuando `data` contiene objetos con `group`, el dropdown agrupa visualmente las opciones bajo el encabezado del grupo.

El prop `limit` controla cuántas sugerencias se muestran simultáneamente (por defecto Mantine muestra todas). Útil para datasets grandes o búsquedas asíncronas donde se quiere limitar el ruido visual.
