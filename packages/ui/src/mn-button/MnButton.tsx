import { SizeTokens, TokensParsed } from '@tamagui/web'
import { FunctionComponent } from 'react'
import { Button, ButtonProps, getTokens, Spinner } from 'tamagui'

type InputComponentIconProps = { color?: any; size?: any }
type IconProp = JSX.Element | FunctionComponent<InputComponentIconProps> | null

export interface IMnButtonProps extends ButtonProps {
  loading?: boolean
  loadingIcon?: IconProp
  loadingIconAligment?: 'left' | 'right'
  circled?: boolean
}

export const getCircularButtonSize = (size, { tokens }) => {
  const width = tokens.size[size] ?? size
  const height = tokens.size[size] ?? size

  return {
    width,
    height,
    minWidth: width,
    maxWidth: width,
    maxHeight: height,
    minHeight: height,

    // Other props related to making circular button
    padding: 0,
    borderRadius: '50%',
  }
}

const getFinalSize = (
  size: number | SizeTokens | undefined,
  { tokens }: { tokens: TokensParsed }
) => {
  return getCircularButtonSize(size, {
    tokens,
  })
}

export const MnButton = (props: IMnButtonProps) => {
  const {
    loading = false,
    loadingIcon = Spinner,
    loadingIconAligment,
    children,
    circled = false,
    ...rest
  } = props

  const tokens = getTokens({ prefixed: true })
  const finalSize = getFinalSize(props.size, { tokens })

  return (
    // @ts-ignore
    <Button
      {...rest}
      disabled={loading}
      {...(loading
        ? loadingIconAligment === 'left'
          ? { left: Spinner, opacity: 0.5 }
          : { iconAfter: Spinner, opacity: 0.5 }
        : {})}
      {...(circled && finalSize)}
    >
      {children}
    </Button>
  )
}
