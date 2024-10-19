'use client'

import { MnButton, Separator, XStack, YStack } from '@my/ui'
import DemoContainer from './DemoContainer'

const DemoButton = () => {
  return (
    <>
      <DemoContainer limit={1}>
        <YStack
          minHeight={250}
          overflow="hidden"
          margin="$3"
          padding="$2"
          justifyContent="space-between"
        >
          <XStack gap={'$4'}>
            <MnButton loading>Loading</MnButton>
            <MnButton size={'$10'}>Normal Button</MnButton>
            <MnButton size={'$10'} circular>
              A
            </MnButton>
          </XStack>

          <XStack gap={'$2'}>
            <XStack gap={'$4'}>
              <MnButton size={'$1'} circular>
                A
              </MnButton>
              <MnButton size={'$2'} circular>
                B
              </MnButton>
              <MnButton size={'$3'} circular>
                C
              </MnButton>

              <MnButton size={'$4'} circular>
                D
              </MnButton>
              <MnButton size={'$5'} circular>
                E
              </MnButton>
              <MnButton size={'$6'} circular>
                F
              </MnButton>
            </XStack>

            <XStack gap={'$4'}>
              <MnButton size={'$6'} square>
                F
              </MnButton>
              <MnButton size={'$5'} square>
                E
              </MnButton>
              <MnButton size={'$4'} square>
                D
              </MnButton>
              <MnButton size={'$3'} square>
                C
              </MnButton>
              <MnButton size={'$2'} square>
                B
              </MnButton>
              <MnButton size={'$1'} square>
                A
              </MnButton>
            </XStack>
          </XStack>
        </YStack>
      </DemoContainer>
    </>
  )
}

export default DemoButton
