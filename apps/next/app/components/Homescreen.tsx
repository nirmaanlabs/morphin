import {
  Button,
  SizableStack,
  SizableText,
  Spacer,
  styled,
  Text,
  Theme,
  XStack,
  YStack,
} from '@my/ui'

import { Link } from 'solito/link'

const BorderedContainer = styled(SizableStack, {})

const PageContainer = styled(YStack, {
  backgroundImage: 'linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);',
  // @ts-ignore
  height: '100vh',
})

export function Homescreen() {
  return (
    <>
      <PageContainer>
        <YStack alignItems="center" margin="auto">
          <SizableText size={'$16'} fontFamily={'$heading'}>
            Morphin
          </SizableText>
          <BorderedContainer alignSelf="flex-end">
            <Text opacity={0.2}>painless</Text>
          </BorderedContainer>
          <Spacer direction="horizontal" size={'$12'}></Spacer>
          <XStack>
            <Theme name="dark">
              <Link href={'/docs'}>
                <Button>Get Started</Button>
              </Link>
            </Theme>
          </XStack>
        </YStack>
      </PageContainer>
    </>
  )
}
