import { Separator, styled, Text, View, XStack, YStack } from '@my/ui'
import { ChevronRight } from '@tamagui/lucide-icons'
import { Link } from 'expo-router'
import { Pressable } from 'react-native'
import { Links } from './links'

const SidebarContainer = styled(YStack, {
  padding: '$4',
})

export const NavToComponentList = () => {
  return (
    <SidebarContainer elevation={2}>
      <YStack>
        {Links.map((e) => (
          <View key={e.name}>
            <Link
              href={{
                pathname: '/docs/[id]',
                params: {
                  id: e.name,
                },
              }}
              asChild
            >
              <Pressable>
                <XStack
                  alignItems="flex-start"
                  justifyContent="space-between"
                  padding="$2.5"
                  backgroundColor={'$white075'}
                >
                  <Text>{e.name}</Text>
                  <ChevronRight />
                </XStack>
              </Pressable>
            </Link>
            <Separator />
          </View>
        ))}
      </YStack>
    </SidebarContainer>
  )
}

export const HomeScreen = () => {
  return (
    <>
      <NavToComponentList />
    </>
  )
}
