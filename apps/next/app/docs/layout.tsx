import React from 'react'
import { DocsLayoutContainer } from './_component/DocsLayoutContainer'
import { Sidebar } from './_component/Sidebar'
import MainContent from './_component/MainContent'

const DocsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <DocsLayoutContainer>
      <Sidebar />

      <MainContent>{children}</MainContent>
    </DocsLayoutContainer>
  )
}

export default DocsLayout
