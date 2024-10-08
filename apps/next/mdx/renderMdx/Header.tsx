'use client'

import { H1, HeadingProps, Stack } from '@my/ui'

const Header = ({ children, ...rest }: HeadingProps) => {
  return (
    <Stack>
      <H1 color={'$blue12Light'} marginBottom={'$2'} letterSpacing={-0.25} {...rest}>
        {children}
      </H1>
    </Stack>
  )
}

export default Header
