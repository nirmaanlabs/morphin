'use client'

import { YStack } from '@my/ui'
import { MnInput } from '@my/ui'
import { Eye, User2 } from '@tamagui/lucide-icons'
import DemoContainer from './DemoContainer'

const DemoInput = () => {
  return (
    <>
      <DemoContainer>
        <YStack minHeight={250} overflow="hidden" gap="$4" margin="$3" padding="$2">
          <MnInput />
          <MnInput iconLeft={User2} />
          <MnInput iconRight={Eye} roundedBorder />
          <MnInput helperText="Tamagui is great" placeholder="Placeholder" />
          <MnInput errorText="This is not correct" placeholder="Placeholder" error />
          <MnInput roundedBorder />
        </YStack>
      </DemoContainer>
    </>
  )
}

export default DemoInput
