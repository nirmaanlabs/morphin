import React from 'react'
import { DocsLayoutContainer } from './_component/DocsLayoutContainer'
import { Sidebar } from './_component/Sidebar'
import MainContent from './_component/MainContent'
import { promises as fs } from 'fs'
import path from 'path'

const linksWithoutMdxContent = [
  {
    href: '/docs',
    name: 'Introduction',
  },
]

function generateLinks(filenames: string[]) {
  return filenames.map((filename) => {
    const name = filename.toLowerCase().replace('.mdx', '')
    return {
      name: name.charAt(0).toUpperCase() + name.slice(1),
      href: `/docs/${name}`,
    }
  })
}

const DocsLayout = async ({ children }: { children: React.ReactNode }) => {
  const filenames = await fs.readdir(path.join(process.cwd(), 'mdx/content'))

  const links = generateLinks(filenames)

  return (
    <DocsLayoutContainer>
      <Sidebar links={[...linksWithoutMdxContent, ...links]} />

      <MainContent>{children}</MainContent>
    </DocsLayoutContainer>
  )
}

export default DocsLayout
