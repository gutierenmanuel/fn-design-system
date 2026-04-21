import * as React from 'react'
import {
  Anchor,
  Button,
  Checkbox,
  Divider,
  Group,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
  Container,
  type PaperProps,
} from '@mantine/core'
import { useToggle, upperFirst } from '@mantine/hooks'

interface SocialButtonConfig {
  label: string
  icon?: React.ReactNode
  onClick?: () => void
}

interface ExtraFieldConfig {
  name: string
  label: string
  placeholder?: string
  required?: boolean
}

interface AuthFormSubmitValues {
  type: 'login' | 'register'
  email: string
  password: string
  [key: string]: unknown
}

interface AuthFormConfig {
  /** Título principal de la página */
  title?: string
  /** Botones de autenticación social opcionales */
  socialButtons?: SocialButtonConfig[]
  /** Campos adicionales que se muestran solo en el modo registro */
  extraFields?: ExtraFieldConfig[]
  /** Callback invocado al enviar el formulario */
  onSubmit?: (values: AuthFormSubmitValues) => void
  /** Modo inicial: 'login' (default) o 'register' */
  defaultType?: 'login' | 'register'
  /** Props adicionales para el Paper contenedor */
  paperProps?: PaperProps
}

function AuthForm({
  title = 'Welcome',
  socialButtons = [],
  extraFields = [],
  onSubmit,
  defaultType = 'login',
  paperProps,
}: AuthFormConfig): React.ReactElement {
  const [type, toggle] = useToggle<'login' | 'register'>([
    defaultType,
    defaultType === 'login' ? 'register' : 'login',
  ])
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [terms, setTerms] = React.useState(true)
  const [extraValues, setExtraValues] = React.useState<Record<string, string>>({})

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit?.({ type, email, password, ...extraValues })
  }

  const handleExtraChange = (name: string, value: string) => {
    setExtraValues((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <Container size={420} py={40}>
      <Paper radius="md" p="lg" withBorder {...paperProps}>
        <Title order={2} ta="center" mb="md">
          {title}
        </Title>

        {socialButtons.length > 0 && (
          <>
            <Group grow mb="md" gap="xs">
              {socialButtons.map((btn) => (
                <Button
                  key={btn.label}
                  variant="default"
                  radius="xl"
                  leftSection={btn.icon}
                  onClick={btn.onClick}
                >
                  {btn.label}
                </Button>
              ))}
            </Group>
            <Divider label="O continúa con email" labelPosition="center" my="lg" />
          </>
        )}

        <form onSubmit={handleSubmit}>
          <Stack gap="sm">
            {type === 'register' &&
              extraFields.map((field) => (
                <TextInput
                  key={field.name}
                  label={field.label}
                  placeholder={field.placeholder}
                  required={field.required}
                  value={extraValues[field.name] ?? ''}
                  onChange={(e) => handleExtraChange(field.name, e.currentTarget.value)}
                  radius="md"
                />
              ))}

            <TextInput
              required
              label="Email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              radius="md"
            />

            <PasswordInput
              required
              label="Contraseña"
              placeholder="Tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
              radius="md"
            />

            {type === 'register' && (
              <Checkbox
                label="Acepto los términos y condiciones"
                checked={terms}
                onChange={(e) => setTerms(e.currentTarget.checked)}
              />
            )}
          </Stack>

          <Group justify="space-between" mt="xl">
            <Anchor
              component="button"
              type="button"
              c="dimmed"
              size="xs"
              onClick={() => toggle()}
            >
              {type === 'register'
                ? '¿Ya tienes cuenta? Inicia sesión'
                : '¿No tienes cuenta? Regístrate'}
            </Anchor>
            <Button type="submit" radius="xl">
              {upperFirst(type)}
            </Button>
          </Group>
        </form>

        {type === 'register' && (
          <Text c="dimmed" size="xs" ta="center" mt="md">
            Al registrarte aceptas nuestra{' '}
            <Anchor size="xs" href="#">
              política de privacidad
            </Anchor>
            .
          </Text>
        )}
      </Paper>
    </Container>
  )
}

export { AuthForm }
export type { AuthFormConfig, AuthFormSubmitValues, SocialButtonConfig, ExtraFieldConfig }
