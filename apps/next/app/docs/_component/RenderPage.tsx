'use client'

import { Stack, YStack } from '@my/ui'
import DemoButton from 'app/demo/DemoButton'
import Description from 'mdx/renderMdx/Description'
import Header from 'mdx/renderMdx/Header'

export const RenderPage = () => {
  return (
    <>
      <YStack>
        <Header>Introduction</Header>
        <Stack />
        <Description>
          Morphin is UI kit made using Tamagui. It's still in development phase.
        </Description>
        <Description>Feel free to use the code</Description>

        <DemoButton />
      </YStack>
    </>
  )
}
