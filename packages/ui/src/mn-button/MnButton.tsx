import { SizeTokens, TokensParsed } from '@tamagui/web';
import { FunctionComponent } from 'react';
import { Button, ButtonProps, getTokens, Spinner } from 'tamagui';

type InputComponentIconProps = { color?: any; size?: any }
type IconProp = JSX.Element | FunctionComponent<InputComponentIconProps> | null

export interface IMnButtonProps extends ButtonProps {
  loading?: boolean
  loadingIcon?: IconProp
  loadingIconAligment?: 'left' | 'right'
  square?: boolean
}

export const getSquareShapeSize = (size, { tokens }) => {
  const width = tokens.size[size] ?? size
  const height = tokens.size[size] ?? size

  return {
    width,
    height,
    minWidth: width,
    maxWidth: width,
    maxHeight: height,
    minHeight: height,
    padding: 0,
  }
}

const getShapeSize = ({
  size,
  tokens,
  shape,
}: {
  size: number | SizeTokens | undefined
  tokens: TokensParsed
  shape?: 'square'
}) => {
  if (!shape) {
    return {}
  }

  return getSquareShapeSize(size, {
    tokens,
  })
}

export const MnButton = (props: IMnButtonProps) => {
  const {
    loading = false,
    loadingIcon = Spinner,
    loadingIconAligment,
    children,
    square = false,
    ...rest
  } = props

  const size = props.size || (props.unstyled ? undefined : '$true')

  const tokens = getTokens({ prefixed: true })
  const shapeSize = getShapeSize({
    size,
    tokens,
    shape: square ? 'square' : undefined,
  })

  return (
    // @ts-ignore
    <Button
      size={size}
      {...rest}
      disabled={loading}
      {...(loading
        ? loadingIconAligment === 'left'
          ? { left: Spinner, opacity: 0.5 }
          : { iconAfter: Spinner, opacity: 0.5 }
        : {})}
      {...(square && shapeSize)}
    >
      {children}
    </Button>
  )
}
