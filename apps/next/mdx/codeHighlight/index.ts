import rehypePrism from 'rehype-prism-plus'
import { visit } from 'unist-util-visit'

export { rehypePrism }

export const preProcess = () => (tree: any) => {
  visit(tree, (node) => {
    if (node?.type === 'element' && node?.tagName === 'pre') {
      const [codeEl] = node.children

      if (codeEl.tagName !== 'code') return

      node.raw = codeEl.children?.[0].value
    }
  })
}

export const postProcess = () => (tree: any) => {
  visit(tree, 'element', (node) => {
    if (node?.type === 'element' && node?.tagName === 'pre') {
      node.properties['raw'] = node.raw
      // console.log({ node })
      // console.{log}(node) here to see if you're getting the raw text
    }
  })
}
