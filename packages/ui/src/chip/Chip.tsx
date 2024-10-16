import { getFontSize } from '@tamagui/font-size'
import { withStaticProperties } from '@tamagui/helpers'
import { useGetThemedIcon } from '@tamagui/helpers-tamagui'
import { ButtonNestingContext as ChipNestingContext, ThemeableStack } from '@tamagui/stacks'
import type { TextContextStyles, TextParentStyles } from '@tamagui/text'
import { SizableText, wrapChildrenInText } from '@tamagui/text'
import type {
  FontSizeTokens,
  GetProps,
  SizeTokens,
  ThemeableProps,
  VariantSpreadExtras,
} from '@tamagui/web'
import {
  createStyledContext,
  getVariableValue,
  spacedChildren,
  styled,
  useProps,
} from '@tamagui/web'
import type { FunctionComponent } from 'react'
import { useContext } from 'react'

import { getSpace } from '@tamagui/get-token'

const getChipSized = (val: SizeTokens | number, { tokens, props }: VariantSpreadExtras<any>) => {
  if (!val || props.circular) {
    return
  }
  if (typeof val === 'number') {
    return {
      paddingHorizontal: val * 0.25 * 2.5,
      borderRadius: props.circular ? 100_000 : val * 0.2 * 2,
    }
  }
  const xSize = getSpace(val, {
    shift: -1,
  })
  const radiusToken = tokens.radius[val] ?? tokens.radius['$true']
  return {
    paddingHorizontal: xSize,
    borderRadius: props.circular ? 100_000 : radiusToken,
  }
}

type ChipVariant = 'outlined'

export const ChipContext = createStyledContext<
  Partial<
    TextContextStyles & {
      size: SizeTokens
      variant?: ChipVariant
    }
  >
>({
  // keeping these here means they work with styled() passing down color to text
  color: undefined,
  ellipse: undefined,
  fontFamily: undefined,
  fontSize: undefined,
  fontStyle: undefined,
  fontWeight: undefined,
  letterSpacing: undefined,
  maxFontSizeMultiplier: undefined,
  size: undefined,
  textAlign: undefined,
  variant: undefined,
})

type ChipIconProps = { color?: any; size?: any }
type IconProp =
  | JSX.Element
  | FunctionComponent<ChipIconProps>
  | ((props: ChipIconProps) => any)
  | null

type ChipExtraProps = TextParentStyles &
  ThemeableProps & {
    /**
     * add icon before, passes color and size automatically if Component
     */
    icon?: IconProp
    /**
     * add icon after, passes color and size automatically if Component
     */
    iconAfter?: IconProp
    /**
     * adjust icon relative to size
     *
     * @default 1
     */
    scaleIcon?: number
    /**
     * make the spacing elements flex
     */
    spaceFlex?: number | boolean
    /**
     * adjust internal space relative to icon size
     */
    scaleSpace?: number
    /**
     * remove default styles
     */
    unstyled?: boolean

    selected?: boolean
  }

type ChipProps = ChipExtraProps & GetProps<typeof ChipFrame>

const CHIP_NAME = 'Chip'

const ChipFrame = styled(ThemeableStack, {
  name: CHIP_NAME,
  context: ChipContext,

  variants: {
    unstyled: {
      false: {
        size: '$true',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'nowrap',
        flexDirection: 'row',
        hoverTheme: true,
        backgrounded: true,
        // Adds background color
        borderWidth: 0.5,
        borderColor: 'transparent',
        hoverStyle: {
          backgroundColor: '$color6',
          borderColor: '$color3',
        },
      },
    },

    variant: {
      outlined: {
        backgroundColor: 'transparent',
        borderWidth: 1.5,
        borderColor: '$borderColor',
        hoverStyle: {
          backgroundColor: 'transparent',
          borderColor: '$color6',
        },
      },
    },

    size: {
      '...size': getChipSized,
      ':number': getChipSized,
    },

    disabled: {
      true: {
        pointerEvents: 'none',
        opacity: 0.5,
      },
    },
  } as const,

  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === '1',
  },
})

const ChipText = styled(SizableText, {
  name: CHIP_NAME,
  context: ChipContext,

  variants: {
    unstyled: {
      false: {
        userSelect: 'none',
        // flexGrow 1 leads to inconsistent native style where text pushes to start of view
        flexGrow: 0,
        flexShrink: 1,
        ellipse: true,
        color: '$color',
      },
    },
  } as const,

  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === '1',
  },
})

const ChipIcon = (props: { children: React.ReactNode; scaleIcon?: number }) => {
  const { children, scaleIcon = 1 } = props
  const { size, color } = useContext(ChipContext)

  const iconSize =
    (typeof size === 'number' ? size * 0.5 : getFontSize(size as FontSizeTokens)) * scaleIcon

  const getThemedIcon = useGetThemedIcon({ size: iconSize, color: color as any })
  return getThemedIcon(children)
}

const ChipComponent = ChipFrame.styleable<ChipExtraProps>(function Chip(props, ref) {
  // @ts-ignore
  const { props: buttonProps } = useChip(props)
  return <ChipFrame {...buttonProps} ref={ref} />
})

/**
 * @deprecated Instead of useChip, see the Chip docs for the newer and much improved Advanced customization pattern: https://tamagui.dev/docs/components/button
 */
const chipStaticConfig = {
  inlineProps: new Set([
    // text props go here (can't really optimize them, but we never fully extract button anyway)
    // may be able to remove this entirely, as the compiler / runtime have gotten better
    'color',
    'fontWeight',
    'fontSize',
    'fontFamily',
    'fontStyle',
    'letterSpacing',
    'textAlign',
    'unstyled',
  ]),
}

/**
 * Chip Component - A customizable chip (or tag) element with optional icons and text.
 *
 * - Use it to display short labels, tags, or categories with optional icons.
 * - Can be styled with different sizes, variants, and other visual properties.
 *
 * Props:
 * - `icon`: JSX element or function for rendering an icon before the text.
 * - `iconAfter`: JSX element or function for rendering an icon after the text.
 * - `scaleIcon`: Adjusts the size of the icon relative to the Chip size (default is 1).
 * - `variant`: Customize the style, e.g., 'outlined'.
 * - `size`: Adjusts the size of the Chip.
 * - `selected`: Boolean, indicates if the chip is selected.
 * - `disabled`: Boolean, disables interaction.
 *
 * Usage Example:
 * ```jsx
 * <Chip icon={<MyIcon />} variant="outlined" size="$3">
 *   Label
 * </Chip>
 * ```
 */

const Chip = withStaticProperties(ChipComponent, {
  Text: ChipText,
  Icon: ChipIcon,
})

/**
 * @deprecated Instead of useChip, see the Chip docs for the newer and much improved Advanced customization pattern: https://tamagui.dev/docs/components/button
 */
function useChip<Props extends ChipProps>(
  { textProps, ...propsIn }: Props,
  { Text = Chip.Text }: { Text: any } = { Text: Chip.Text }
) {
  const isNested = useContext(ChipNestingContext)
  const propsActive = useProps(propsIn, {
    noNormalize: true,
    noExpand: true,
  }) as any as ChipProps

  // careful not to destructure and re-order props, order is important
  const {
    icon,
    iconAfter,
    space,
    spaceFlex,
    scaleIcon = 1,
    scaleSpace = 0.66,
    separator,
    noTextWrap,
    fontFamily,
    fontSize,
    fontWeight,
    fontStyle,
    letterSpacing,
    tag,
    ellipse,

    maxFontSizeMultiplier,

    ...restProps
  } = propsActive

  const size = propsActive.size || (propsActive.unstyled ? undefined : '$true')

  const color = propsActive.color as any

  const iconSize =
    (typeof size === 'number'
      ? size * 0.5
      : getFontSize(size as FontSizeTokens, {
          font: fontFamily?.[0] === '$' ? (fontFamily as any) : undefined,
        })) * scaleIcon

  const getThemedIcon = useGetThemedIcon({
    size: iconSize,
    color,
  })

  const [themedIcon, themedIconAfter] = [icon, iconAfter].map(getThemedIcon)
  const spaceSize = space ?? getVariableValue(iconSize) * scaleSpace
  const contents = noTextWrap
    ? [propsIn.children]
    : wrapChildrenInText(
        Text,
        {
          children: propsIn.children,
          fontFamily,
          fontSize,
          textProps,
          fontWeight,
          fontStyle,
          letterSpacing,
          ellipse,
          maxFontSizeMultiplier,
        },
        Text === ChipText && propsActive.unstyled !== true
          ? {
              unstyled: process.env.TAMAGUI_HEADLESS === '1',
              size,
            }
          : undefined
      )

  const inner = spacedChildren({
    // a bit arbitrary but scaling to font size is necessary so long as button does
    space: spaceSize,
    spaceFlex,
    ensureKeys: true,
    separator,
    direction:
      propsActive.flexDirection === 'column' || propsActive.flexDirection === 'column-reverse'
        ? 'vertical'
        : 'horizontal',
    // for keys to stay the same we keep indices as similar a possible
    // so even if icons are undefined we still pass them
    children: [themedIcon, ...contents, themedIconAfter],
  })

  const props = {
    size,
    ...(propsIn.disabled && {
      // in rnw - false still has keyboard tabIndex, undefined = not actually focusable
      focusable: undefined,
      // even with tabIndex unset, it will keep focusVisibleStyle on web so disable it here
      focusVisibleStyle: {
        borderColor: '$background',
      },
    }),
    // fixes SSR issue + DOM nesting issue of not allowing button in button
    tag: tag ?? 'span',
    ...restProps,

    children: <ChipNestingContext.Provider value={true}>{inner}</ChipNestingContext.Provider>,
    // forces it to be a runtime pressStyle so it passes through context text colors
    disableClassName: true,
  } as Props

  return {
    spaceSize,
    isNested,
    props,
  }
}

export {
  Chip,
  ChipFrame,
  ChipIcon,
  chipStaticConfig,
  ChipText,
  // legacy
  useChip,
}

export type { ChipProps }
