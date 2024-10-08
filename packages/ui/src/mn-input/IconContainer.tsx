import { getSpace } from '@tamagui/get-token'
import { SizeTokens, Stack, styled, ThemeableStack } from 'tamagui'

export const IconContainer = styled(ThemeableStack, {
  name: 'IconContainer',
  justifyContent: 'center',
  backgroundColor: '$backgroundColor',
  variants: {
    unstyled: {
      false: {
        size: '$true',
        backgroundColor: '$background',
        borderRadius: 0,
      },
    },

    size: {
      '...size': (val: SizeTokens, { tokens }) => {
        return {
          paddingHorizontal: getSpace(val, {
            shift: -4,
          }),
        }
      },
    },

    disabled: {
      true: {
        opacity: 0.5,
        // TODO breaking types
        pointerEvents: 'none' as any,
      },
    },
  } as const,

  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === '1',
  },
})
