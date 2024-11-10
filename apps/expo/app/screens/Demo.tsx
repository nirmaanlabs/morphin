import { Theme } from '@my/ui'
import DemoButton from '../demo/DemoButton'
import MnInputDemo from '../demo/MnInputDemo'

export const Demo = ({ id }: { id: string }) => {
  if (id === 'Button') {
    return (
      <Theme name="purple_active">
        <DemoButton />
      </Theme>
    )
  } else if (id === 'Input') {
    return <MnInputDemo />
  }
  return null
}
