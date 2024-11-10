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
          Kickstart Your UI Projects with Ready-to-Use Components. Morphin is UI kit made using
          Tamagui.
        </Description>
        <Header size={'$8'}>Demo</Header>
        <MainPageDemo />
      </YStack>
    </>
  )
}
