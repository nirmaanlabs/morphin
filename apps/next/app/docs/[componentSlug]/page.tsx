import DemoInput from 'app/demo/DemoInput'
import DemoChip from 'app/demo/DemoChip'
import DemoSearchbar from 'app/demo/DemoSearchbar'
import { IPageProps } from 'app/types'
import { capitaliseFirstLetter } from 'app/utils/capitaliseFirstLetter'
import Description from 'mdx/renderMdx/Description'
import Header from 'mdx/renderMdx/Header'
import PropsTable from 'mdx/renderMdx/PropsTable'
import Note from 'mdx/renderMdx/Note'
import Pre from 'mdx/renderMdx/Pre'
import { preProcess, postProcess, rehypePrism } from 'mdx/codeHighlight'
import { compileMDX } from 'next-mdx-remote/rsc'
import path from 'path'
import { promises as fs } from 'fs'

import '../../../mdx/codeHighlight/line-style.css'
import '../../../mdx/codeHighlight/theme.css'

export async function generateMetadata({ params }: IPageProps) {
  const { componentSlug } = params

  return {
    title: capitaliseFirstLetter(componentSlug),
  }
}

const Page = async ({ params }: IPageProps) => {
  const { componentSlug } = params
  const content = await fs.readFile(
    path.join(process.cwd(), 'mdx/content', `${componentSlug}.mdx`),
    'utf-8'
  )

  const { content: mdxContent } = await compileMDX({
    source: content,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [preProcess, rehypePrism, postProcess],
      },
    },

    components: {
      Header,
      Description,
      DemoInput,
      DemoChip,
      PropsTable,
      DemoSearchbar,
      Note,
      // Pre,
      //@ts-ignore
      pre: (props) => <Pre {...props} />,
    },
  })

  return <div>{mdxContent}</div>
}

export default Page
