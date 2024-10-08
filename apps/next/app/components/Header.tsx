'use client'

import { Button, SizableText, styled, Text, ThemeableStack, XGroup, XStack, YStack } from '@my/ui'

import { Github, Syringe } from '@tamagui/lucide-icons'
import { Link } from 'solito/link'

const StyledXStack = styled(XStack, {
  justifyContent: 'space-between',
  alignItems: 'center',
})

const PageContainer = styled(YStack, {
  backgroundImage: 'linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);',
  // @ts-ignore
})

const GhostButton = styled(Button, {
  hoverStyle: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  focusStyle: {
    borderColor: 'transparent',
  },
})

const IconContainer = styled(ThemeableStack, {
  borderRadius: '$12',
  backgroundColor: 'black',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '$3',
  minWidth: '$3',
})

const GithubIcon = (props: any) => {
  return (
    <IconContainer>
      <Github {...props} />
    </IconContainer>
  )
}

export function Header() {
  return (
    <>
      <PageContainer>
        <StyledXStack padding="$1.5">
          <Link href={'/'}>
            <XGroup>
              <Syringe color={'#86A8E7'} />
              &nbsp;
              <SizableText>Morphin</SizableText>
            </XGroup>
          </Link>

          <Text>Hire Me !!!</Text>

          <XGroup>
            <Link href={'https://github.com/nirmaanlabs/morphin'} target="_blank">
              <GhostButton icon={<GithubIcon fill={'white'} />} chromeless>
                <SizableText
                  hoverStyle={{
                    color: '$orange2Light',
                  }}
                >
                  Github
                </SizableText>
              </GhostButton>
            </Link>
          </XGroup>
        </StyledXStack>
      </PageContainer>
    </>
  )
}
