'use client'

import { Chip, XStack, YStack } from '@my/ui'
import { Eye, X } from '@tamagui/lucide-icons'
import DemoContainer from './DemoContainer'

const DemoChip = () => {
  return (
    <>
      <DemoContainer limit={2}>
        <YStack minHeight={250} overflow="hidden" gap="$4" margin="$3" padding="$2">
          <XStack gap={'$4'}>
            <Chip>Normal</Chip>
            <Chip icon={Eye}>Icon left</Chip>
            <Chip iconAfter={X}>Icon right</Chip>
          </XStack>
          <XStack gap={'$4'}>
            <Chip icon={Eye} iconAfter={X}>
              Icons
            </Chip>
            <Chip variant="outlined">Outlined</Chip>
            <Chip iconAfter={X} disabled>
              Disabled
            </Chip>
          </XStack>
          <XStack gap={'$4'}>
            <Chip iconAfter={X} theme={'active'}>
              Selected
            </Chip>
            <Chip iconAfter={X} pressTheme onPress={() => console.log('Do something')}>
              Pressable
            </Chip>
          </XStack>
        </YStack>
      </DemoContainer>
    </>
  )
}

export default DemoChip
