'use client'
import React, { ReactNode } from 'react'
import { SizableText, styled, Theme, XStack, YStack } from 'tamagui'

const Card2 = styled(YStack, {
  //@ts-ignore

  elevation: '$1',
  y: 0,
  ov: 'hidden',
  bg: '$background',
  br: '$4',
})

const Note = ({ children }: { children: ReactNode }) => {
  return (
    <Theme name="yellow_active">
      <YStack elevation={'$1'} paddingHorizontal="$4" background={'$background'} mb={'$4'}>
        <XStack>
          <SizableText>{children}</SizableText>
        </XStack>
      </YStack>
    </Theme>
  )
}

export default Note
