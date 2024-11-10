import { MnButton, XStack, YStack } from '@my/ui'

const DemoButton = () => {
  return (
    <>
      <YStack
        minHeight={250}
        overflow="hidden"
        margin="$3"
        padding="$2"
        gap="$4"
        justifyContent="space-between"
      >
        <XStack gap={'$4'}>
          <MnButton loading>Loading</MnButton>
        </XStack>

        <XStack gap={'$4'}>
          <MnButton size={'$1'} circular textProps={{ lineHeight: 16 }}>
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
      </YStack>
    </>
  )
}

export default DemoButton
