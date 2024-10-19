'use client'

import { Stack, YStack } from '@my/ui'
import MainPageDemo from 'app/demo/MainPageDemo'
import Description from 'mdx/renderMdx/Description'
import Header from 'mdx/renderMdx/Header'

export const RenderPage = () => {
  return (
    <>
      <YStack>
        <Header>Introduction</Header>
        <Stack />
        <Description>
          Morphin is UI kit made using Tamagui. It's still in development phase. Feel free to use
          the code
        </Description>
        <Header size={'$8'}>Demo</Header>
        <MainPageDemo />
      </YStack>
    </>
  )
}
