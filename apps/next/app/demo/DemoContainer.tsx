import { ReactNode } from 'react'
import { styled, Theme, ThemeName, XStack, YStack } from '@my/ui'

const themeNames: ThemeName[] = ['blue', 'red', 'pink', 'orange', 'green', 'yellow']

const Card2 = styled(YStack, {
  //@ts-ignore
  ai: 'center',
  jc: 'center',
  elevation: '$1',
  y: 0,
  ov: 'hidden',
  minWidth: 180,
  bg: '$background',
  minHeight: 220,
  br: '$4',
})

const DemoContainer = ({
  children,
  limit = themeNames.length,
}: {
  children: ReactNode
  limit?: number
}) => {
  return (
    <XStack
      gap="$3"
      padding="$4"
      borderColor={'$blue3Light'}
      borderWidth="$1"
      borderStyle="solid"
      borderRadius={'$2'}
      marginBottom={'$8'}
      justifyContent="flex-start"
      style={{ overflowX: 'scroll', width: '70vw' }}
    >
      {themeNames.slice(0, limit).map((themeName: ThemeName) => {
        return (
          <Theme key={themeName} name={themeName}>
            <Card2>{children}</Card2>
          </Theme>
        )
      })}
    </XStack>
  )
}

export default DemoContainer
