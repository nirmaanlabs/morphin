import { MnInput, YStack } from '@my/ui'
import { Eye, User2 } from '@tamagui/lucide-icons'

const MnInputDemo = () => {
  return (
    <>
      <YStack
        minHeight={250}
        overflow="hidden"
        gap="$4"
        margin="$3"
        padding="$2"
        backgroundColor={'$white075'}
      >
        <MnInput size={'$4'} placeholder="Size $4..." />
        <MnInput iconLeft={User2} placeholder="Left icon.." />
        <MnInput iconRight={Eye} placeholder="Right icon.." />
        <MnInput helperText="Tamagui is great" placeholder="Placeholder" />
        <MnInput errorText="Email is not correct" placeholder="Your email" error />
        <MnInput roundedBorder placeholder="Rounded" />
      </YStack>
    </>
  )
}

export default MnInputDemo
