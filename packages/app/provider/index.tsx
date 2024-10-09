import { useColorScheme } from 'react-native'
import { TamaguiProvider, TamaguiProviderProps, ToastProvider, config, isWeb } from '@my/ui'
import { ToastViewport } from './ToastViewport'

export function Provider({ children, ...rest }: Omit<TamaguiProviderProps, 'config'>) {
  const colorScheme = useColorScheme()

  return (
    <TamaguiProvider
      config={config}
      defaultTheme={colorScheme === 'dark' ? 'dark' : 'light'}
      {...rest}
    >
      <ToastProvider swipeDirection="horizontal" duration={6000} native={isWeb ? [] : ['mobile']}>
        {children}
        <ToastViewport />
      </ToastProvider>
    </TamaguiProvider>
  )
}