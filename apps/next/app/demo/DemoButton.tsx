'use client'

import { MnButton, XStack, YStack } from '@my/ui'
import DemoContainer from './DemoContainer'

const DemoButton = () => {
  return (
    <>
      <DemoContainer limit={1}>
        <YStack minHeight={250} overflow="hidden" gap="$4" margin="$3" padding="$2">
          <XStack gap={'$4'}>
            <MnButton loading>Loading</MnButton>
            <MnButton size={'$10'}>Normal Button</MnButton>
            <MnButton size={'$10'} circled>
              A
            </MnButton>
          </XStack>
        </YStack>
      </DemoContainer>
    </>
  )
}

export default DemoButton
