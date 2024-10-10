'use client'

import { H3, Stack } from '@my/ui'
import { ReactNode } from 'react'

const Description = ({ children }: { children: ReactNode }) => {
  return (
    <Stack>
      <H3
        fontFamily={'$body'}
        size={'$8'}
        //@ts-ignore
        lh="$7"
        ls={-0.5}
        color={'$gray9'}
        mb={'$3'}
        tag="h6"
        $sm={{
          size: '$6',
        }}
      >
        {children}
      </H3>
    </Stack>
  )
}

export default Description
