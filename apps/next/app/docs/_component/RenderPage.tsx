'use client'

import Header from 'mdx/renderMdx/Header'
import Description from 'mdx/renderMdx/Description'
import React from 'react'
import { Button, Chip, Stack, Theme, XStack, YStack } from '@my/ui'
import { X } from 'vitest/dist/chunks/reporters.WnPwkmgA'

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
      </YStack>
    </>
  )
}
