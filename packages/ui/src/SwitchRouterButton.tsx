import { Anchor, Button } from 'tamagui'

export const SwitchRouterButton = ({ pagesMode = false }: { pagesMode?: boolean }) => {
  return (
    //@ts-expect-error
    <Anchor ta="center" color="$color12" href={pagesMode ? '/doc-mdx' : '/pages-example'}>
      <Button>Change router: {pagesMode ? 'pages' : 'app'}</Button>
    </Anchor>
  )
}
