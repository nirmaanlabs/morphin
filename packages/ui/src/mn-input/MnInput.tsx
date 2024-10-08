import React, { FunctionComponent, useState } from 'react'

import {
  composeEventHandlers,
  getFontSize,
  SizableText,
  styled,
  InputProps as TamaInputProps,
  useComposedRefs,
  useGetThemedIcon,
  useProps,
  XGroup,
  YStack,
} from 'tamagui'
import { IconContainer } from './IconContainer'
import { StyledInput } from './StyledInput'

type MnInputVariant = 'outlined'
type InputComponentIconProps = { color?: any; size?: any }
type IconProp = JSX.Element | FunctionComponent<InputComponentIconProps> | null

interface MnInputProps extends TamaInputProps {
  iconLeft?: IconProp
  iconRight?: IconProp
  scaleIcon?: number
  scaleSpace?: number
  variant?: MnInputVariant
  roundedBorder?: boolean
  error?: boolean
  helperText?: string
  errorText?: string
}

const XGroupStyled = styled(XGroup, {
  name: 'Input',
  borderStyle: 'solid',
  borderWidth: '$0.5',
  borderColor: '$borderColor',
  overflow: 'hidden',

  variants: {
    unstyled: {
      false: {
        height: 'auto',
        borderRadius: 0,
        hoverStyle: {
          borderColor: '$color7',
        },
      },
    },
    variant: {
      outlined: {
        borderColor: '$borderColor',
      },
    },
    roundedBorder: {
      true: {
        borderRadius: '$2',
      },
    },
    isFocused: {
      true: {
        // This should have been the outlineColor, need to understand the theme better
        outlineColor: '$color7',
        outlineWidth: 2,
        outlineStyle: 'solid',
      },
    },
    isError: {
      true: {
        borderColor: 'red',
        outlineColor: 'red',
        hoverStyle: {
          borderColor: 'red',
        },
      },
    },
  } as const,

  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === '1',
  },
})

export const MnInput = React.forwardRef((inProps: MnInputProps, forwardedRef) => {
  const {
    onFocus,
    onBlur,
    variant = 'outlined',
    iconLeft,
    iconRight,
    scaleIcon = 1,
    scaleSpace = 1,
    helperText,
    errorText,
    roundedBorder = false,
    error = false,
    color,
    space,
    ...rest
  } = useProps(inProps)
  const [isFocused, setIsFocused] = useState(false)
  const ref = React.useRef<HTMLInputElement>(null)
  const composedRefs = useComposedRefs<any>(forwardedRef, ref)

  const size = inProps.size || '$true'
  const iconSize = getFontSize(size as any) * scaleIcon
  const getThemedIcon = useGetThemedIcon({ size: iconSize, color: color as any })
  const [themedIconLeft, themedIconRight] = [iconLeft, iconRight].map(getThemedIcon)

  return (
    <YStack>
      <XGroupStyled
        testID="mn-input"
        variant={variant}
        isFocused={isFocused}
        isError={error}
        roundedBorder={roundedBorder}
        size={'$0'}
      >
        <XGroup.Item>
          {themedIconLeft && <IconContainer>{themedIconLeft}</IconContainer>}
        </XGroup.Item>
        <XGroup.Item>
          <StyledInput
            ref={composedRefs}
            onFocus={composeEventHandlers(onFocus, () => {
              setIsFocused(true)
            })}
            onBlur={composeEventHandlers(onBlur, () => {
              setIsFocused(false)
            })}
            height={'auto'}
            {...(error && { placeholderTextColor: 'red' })}
            {...rest}
          />
        </XGroup.Item>

        <XGroup.Item>
          {themedIconRight && <IconContainer>{themedIconRight}</IconContainer>}
        </XGroup.Item>
      </XGroupStyled>
      {helperText && (
        <SizableText theme="alt1" size="$1">
          {helperText}
        </SizableText>
      )}
      {error && (
        <SizableText theme="red_alt1" size="$1">
          {errorText}
        </SizableText>
      )}
    </YStack>
  )
})
