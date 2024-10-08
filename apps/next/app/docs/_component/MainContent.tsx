'use client'

import React, { ReactNode } from 'react'
import { styled, XStack } from '@my/ui'

const MainContentContainer = styled(XStack, {
  padding: '$4',
  flex: 1,
})

const MainContent = ({ children }: { children: ReactNode }) => {
  return <MainContentContainer className="main-container">{children}</MainContentContainer>
}

export default MainContent
