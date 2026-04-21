---
name: dropzone
kind: component
lang: ts
domain: ui
version: "1.0.0"
purity: impure
signature: "Dropzone(props: DropzoneProps): JSX.Element"
description: "Zona de drag-and-drop para archivos con estados idle/accept/reject, límite de tamaño y tipos MIME. Wrapper sobre Mantine Dropzone."
tags: [dropzone, upload, drag-drop, file, component, ui, interactive, mantine]
uses_functions: []
uses_types: []
returns: []
returns_optional: false
error_type: ""
imports: ["@mantine/dropzone"]
output: "Componente Dropzone que renderiza área de arrastrar y soltar archivos con feedback visual"
tested: false
tests: []
test_file_path: ""
file_path: "frontend/functions/ui/dropzone.tsx"
props:
  - name: onDrop
    type: "(files: File[]) => void"
    required: false
    description: "Callback ejecutado cuando el usuario suelta archivos aceptados"
  - name: onReject
    type: "(files: FileRejection[]) => void"
    required: false
    description: "Callback ejecutado cuando el usuario suelta archivos rechazados (tipo o tamaño inválido)"
  - name: accept
    type: "Record<string, string[]>"
    required: false
    description: "Tipos MIME aceptados. Usar IMAGE_MIME_TYPE o MIME_TYPES para constantes predefinidas"
  - name: maxSize
    type: "number"
    required: false
    description: "Tamaño máximo de archivo en bytes"
  - name: multiple
    type: "boolean"
    required: false
    description: "Permite seleccionar múltiples archivos a la vez"
  - name: loading
    type: "boolean"
    required: false
    description: "Muestra estado de carga y desactiva la interacción"
  - name: disabled
    type: "boolean"
    required: false
    description: "Desactiva el dropzone"
  - name: children
    type: "React.ReactNode"
    required: true
    description: "Contenido interno, generalmente compuesto con DropzoneAccept, DropzoneReject y DropzoneIdle"
emits: [onDrop, onReject]
has_state: true
framework: react
variant: []
---

## Ejemplo

```tsx
import {
  Dropzone,
  DropzoneAccept,
  DropzoneReject,
  DropzoneIdle,
  IMAGE_MIME_TYPE,
} from '@fn_library/dropzone'
import { IconPhoto, IconUpload, IconX } from '@tabler/icons-react'
import { Group, Text } from '@mantine/core'

function ImageUploader() {
  return (
    <Dropzone
      onDrop={(files) => console.log('Archivos aceptados:', files)}
      onReject={(files) => console.log('Archivos rechazados:', files)}
      accept={IMAGE_MIME_TYPE}
      maxSize={5 * 1024 ** 2}
    >
      <Group justify="center" gap="xl" mih={120} style={{ pointerEvents: 'none' }}>
        <DropzoneAccept>
          <IconUpload size={52} stroke={1.5} />
        </DropzoneAccept>
        <DropzoneReject>
          <IconX size={52} stroke={1.5} />
        </DropzoneReject>
        <DropzoneIdle>
          <IconPhoto size={52} stroke={1.5} />
        </DropzoneIdle>
        <div>
          <Text size="xl" inline>
            Arrastra imágenes aquí o haz clic para seleccionar
          </Text>
          <Text size="sm" c="dimmed" inline mt={7}>
            Máximo 5 MB por imagen
          </Text>
        </div>
      </Group>
    </Dropzone>
  )
}
```

## Notas

El prop `onDrop` tiene un default vacío (`() => {}`) para que el componente sea válido sin handler. Siempre sobreescribirlo en uso real.

Sub-componentes exportados:
- `DropzoneAccept` — visible cuando el archivo arrastrado es aceptado (tipo y tamaño válidos)
- `DropzoneReject` — visible cuando el archivo es rechazado
- `DropzoneIdle` — visible en estado de reposo
- `DropzoneFullScreen` — captura drops en cualquier parte de la pantalla

Constantes de tipos MIME exportadas:
- `IMAGE_MIME_TYPE` — imágenes comunes (png, jpg, gif, webp, etc.)
- `MIME_TYPES` — objeto con claves por tipo (pdf, csv, xlsx, mp4, etc.)
