import '@mantine/core/styles.css'
import '@mantine/charts/styles.css'
import '@mantine/notifications/styles.css'

import * as React from 'react'
import { MantineProvider, type MantineThemeOverride, type MantineColorScheme } from '@mantine/core'
import { Notifications } from '@mantine/notifications'

interface FnMantineProviderProps {
  children: React.ReactNode
  theme?: MantineThemeOverride
  defaultColorScheme?: MantineColorScheme
}

function FnMantineProvider({
  children,
  theme,
  defaultColorScheme = 'dark',
}: FnMantineProviderProps) {
  return (
    <MantineProvider theme={theme} defaultColorScheme={defaultColorScheme}>
      <Notifications position="top-right" />
      {children}
    </MantineProvider>
  )
}

export { FnMantineProvider }
export type { FnMantineProviderProps }
