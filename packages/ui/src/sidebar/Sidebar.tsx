import { getSize, getSpace } from '@tamagui/get-token'
import { composeEventHandlers, withStaticProperties } from '@tamagui/helpers'
import {
  GetProps,
  SizeTokens,
  Stack,
  StackProps,
  VariantSpreadExtras,
  createStyledContext,
  styled,
  useTheme,
} from '@tamagui/web'
import * as React from 'react'
import {
  Button,
  SizableText,
  Text,
  ThemeableStack,
  ThemeableStackProps,
  Tooltip,
  TooltipProps,
  YStack,
} from 'tamagui'
import './sidebar.css'

/**
 * when size is undefined or not explicitly passed by user
 * Font size h,w = 1 rem
 *
 */

/** TODO MERGE CLASSNAMES */

const getButtonSized = (val: SizeTokens | number, { tokens, props }: VariantSpreadExtras<any>) => {
  if (!val || props.circular) {
    return
  }
  if (typeof val === 'number') {
    return {
      padding: val * 0.25,
    }
  }

  const xSize = getSpace(val, {
    shift: -4,
  })
  return {
    padding: xSize,
    gap: xSize,
  }
}

/* -------------------------------------------------------------------------------------------------
 * Sidebar Constants
 * -----------------------------------------------------------------------------------------------*/

const SIDEBAR_NAME = 'Sidebar'
const SIDEBAR_WIDTH = '16rem'
// const SIDEBAR_WIDTH_MOBILE = '18rem'
const SIDEBAR_WIDTH_ICON = '3rem'
const SIDEBAR_KEYBOARD_SHORTCUT = 'b'

/* -------------------------------------------------------------------------------------------------
 * Sidebar Context
 * -----------------------------------------------------------------------------------------------*/

type ScopedProps<P> = P & { __scopeSidebar?: string }

type SidebarContextValue = {
  contentId: string
  state: 'expanded' | 'collapsed'
  open: boolean
  setOpen: (open: boolean) => void
  openMobile: boolean
  setOpenMobile: (open: boolean) => void
  isMobile: boolean
  toggleSidebar: () => void
  disabled?: boolean
  size?: SizeTokens
}

const SidebarContext = createStyledContext<SidebarContextValue>()

/* -------------------------------------------------------------------------------------------------
 * Sidebar Component
 * -----------------------------------------------------------------------------------------------*/

interface SidebarProps extends StackProps {
  side?: 'left'
  collapsible?: 'offcanvas' | 'icon' | 'none'
}

interface SidebarProviderProps {
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children?: React.ReactNode
}

const SidebarProvider: React.FC<SidebarProviderProps> = ({ children }) => {
  const [open, setOpen] = React.useState(true)
  const toggleSidebar = React.useCallback(() => setOpen((prev) => !prev), [])

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        toggleSidebar()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [toggleSidebar])

  const state = open ? 'expanded' : 'collapsed'

  return (
    <SidebarContext.Provider open={open} toggleSidebar={toggleSidebar} state={state}>
      {children}
    </SidebarContext.Provider>
  )
}

const _Sidebar = React.forwardRef<Stack, ScopedProps<SidebarProps>>((props, forwardedRef) => {
  const { __scopeSidebar, collapsible = 'icon', ...sidebarProps } = props
  const { useStyledContext: useSidebarContext } = SidebarContext

  const { open, state } = useSidebarContext() // Get open state and toggle function from context

  const width = open ? SIDEBAR_WIDTH : collapsible === 'offcanvas' ? 0 : SIDEBAR_WIDTH_ICON

  if (collapsible === 'none') {
    return (
      <Stack
        ref={forwardedRef}
        className="sidebar group peer"
        style={{
          // @ts-ignore
          '--sidebar-width': SIDEBAR_WIDTH,
          width: 'var(--sidebar-width)',
        }}
        {...sidebarProps}
      />
    )
  }

  return (
    <Stack
      data-state={state}
      data-disabled={false}
      data-collapsible={state === 'collapsed' ? collapsible : ''}
      width={width}
      ref={forwardedRef}
      className="sidebar group peer w-0"
      $sm={{
        display: 'none',
      }}
      overflow="hidden"
      transition="width 0.3s ease"
      {...sidebarProps}
    />
  )
})

_Sidebar.displayName = SIDEBAR_NAME

/* -------------------------------------------------------------------------------------------------
 * SidebarTrigger Component
 * -----------------------------------------------------------------------------------------------*/

const TRIGGER_NAME = 'SidebarTrigger'

type SidebarTriggerProps = GetProps<typeof Stack>

const SidebarTriggerFrame = styled(Stack, {
  name: TRIGGER_NAME,
  tag: 'button',
})

const SidebarTrigger = SidebarTriggerFrame.styleable(
  (props: ScopedProps<SidebarTriggerProps>, forwardedRef) => {
    const { __scopeSidebar, children, ...triggerProps } = props
    const { useStyledContext: useSidebarContext } = SidebarContext
    const context = useSidebarContext(__scopeSidebar)

    return (
      <SidebarTriggerFrame
        aria-controls={context.contentId}
        aria-expanded={context.open}
        data-state={getState(context.open)}
        data-disabled={context.disabled ? '' : undefined}
        disabled={context.disabled}
        ref={forwardedRef}
        onPress={composeEventHandlers(props.onPress as any, context.toggleSidebar)}
        {...(triggerProps as any)}
      >
        {typeof children === 'function' ? children({ open: context.open }) : children}
      </SidebarTriggerFrame>
    )
  }
)

SidebarTrigger.displayName = TRIGGER_NAME

/* -------------------------------------------------------------------------------------------------
 * SidebarHeader Component
 * -----------------------------------------------------------------------------------------------*/

const HEADER_NAME = 'SidebarHeader'

type SidebarHeaderProps = GetProps<typeof Stack>

const SidebarHeaderFrame = styled(Stack, {
  name: HEADER_NAME,
  padding: '0.5rem',
})

const SidebarHeader = SidebarHeaderFrame.styleable<SidebarHeaderProps>((props, forwardedRef) => {
  const { children, ...headerProps } = props

  return (
    <SidebarHeaderFrame className="sidebar-header" {...headerProps} ref={forwardedRef}>
      {children}
    </SidebarHeaderFrame>
  )
})

SidebarHeader.displayName = HEADER_NAME

/* -------------------------------------------------------------------------------------------------
 * SidebarFooter Component
 * -----------------------------------------------------------------------------------------------*/

const FOOTER_NAME = 'SidebarFooter'

type SidebarFooterProps = GetProps<typeof Stack>

const SidebarFooterFrame = styled(Stack, {
  name: FOOTER_NAME,
  padding: '0.5rem',
})

const SidebarFooter = SidebarFooterFrame.styleable<SidebarFooterProps>((props, forwardedRef) => {
  const { children, ...footerProps } = props

  return (
    <SidebarFooterFrame className="sidebar-footer" ref={forwardedRef} {...footerProps}>
      {children}
    </SidebarFooterFrame>
  )
})

SidebarFooter.displayName = FOOTER_NAME

/* -------------------------------------------------------------------------------------------------
 * SidebarContent Component
 * -----------------------------------------------------------------------------------------------*/

interface SidebarContentProps extends StackProps {
  forceMount?: true
}

const CONTENT_NAME = 'SidebarContent'

const SidebarContentFrame = styled(Stack, {
  name: CONTENT_NAME,
  // @ts-ignore
  overflowY: 'auto',
  flex: 1,
})

const SidebarContent = SidebarContentFrame.styleable<ScopedProps<SidebarContentProps>>(
  (props, forwardedRef) => {
    const { forceMount, children, __scopeSidebar, ...contentProps } = props

    return (
      <SidebarContentFrame
        ref={forwardedRef}
        className="sidebar-content sidebar-content-overflow-hidden"
        {...contentProps}
      >
        {children}
      </SidebarContentFrame>
    )
  }
)

SidebarContent.displayName = CONTENT_NAME

const SidebarButtonBase = styled(ThemeableStack, {
  tag: 'button',
  role: 'button',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  width: '100%',
  cursor: 'pointer',
  focusable: true,
  variants: {
    unstyled: {
      false: {
        size: '$true',
        pressStyle: {
          borderColor: 'transparent',
        },
        hoverStyle: {
          backgroundColor: '$color4',
          borderColor: 'transparent',
        },

        // Shows focus when we click tab button
        focusVisibleStyle: {
          outlineColor: '$outlineColor',
          outlineStyle: 'solid',
          outlineWidth: 2,
        },
      },
    },
    size: {
      '...size': getButtonSized,
      ':number': getButtonSized,
    },
  },

  justifyContent: 'flex-start',
  overflow: 'hidden',

  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === '1',
  },
})

/* -------------------------------------------------------------------------------------------------
 * SidebarGroup Component
 * -----------------------------------------------------------------------------------------------*/

const SIDEBAR_GROUP = 'SidebarGroup'

const SidebarGroupFrame = styled(YStack, {
  name: SIDEBAR_GROUP,
  position: 'relative',
  transition: 'padding 0.3s ease',
  padding: '0.5rem',
  //@ts-ignore
  overflowX: 'hidden',
})

const SidebarGroup = SidebarGroupFrame.styleable((props, forwardedRef) => {
  const { children, ...contentProps } = props

  return (
    <SidebarGroupFrame
      data-sidebar="group"
      className={'sidebar-group'}
      ref={forwardedRef}
      {...contentProps}
    >
      {children}
    </SidebarGroupFrame>
  )
})

SidebarGroup.displayName = SIDEBAR_GROUP

/* -------------------------------------------------------------------------------------------------
 * SidebarGroupLabel Component
 * -----------------------------------------------------------------------------------------------*/

const SidebarGroupLabelFrame = styled(SizableText, {
  whiteSpace: 'nowrap',
  transition: 'margin 0.3s ease',
})

const SidebarGroupLabel = SidebarGroupLabelFrame.styleable((props, forwardedRef) => {
  const { children, ...restProps } = props
  return (
    <SidebarGroupLabelFrame
      ref={forwardedRef}
      data-sidebar="group-label"
      className="sidebar-group-label group-data-[collapsible=icon]:opacity-0"
      {...restProps}
    >
      {children}
    </SidebarGroupLabelFrame>
  )
})

SidebarGroupLabel.displayName = 'SidebarGroupLabel'

/* -------------------------------------------------------------------------------------------------
 * SidebarGroupAction Component
 * -----------------------------------------------------------------------------------------------*/

/** Maybe use button base ? */
const SidebarGroupActionFrame = styled(Button, {
  position: 'absolute',
  top: '50%',
  right: '1.5px',
  transform: 'translateY(-50%)',
  pressStyle: {
    borderColor: 'transparent',
  },
  circular: true,
  chromeless: true,
})

const SidebarGroupAction = SidebarGroupActionFrame.styleable((props, forwardedRef) => {
  return (
    <SidebarGroupActionFrame
      className="sidebar-group-action group-data-[collapsible=icon]:opacity-0"
      ref={forwardedRef}
      data-sidebar="group-action"
      {...props}
    />
  )
})
SidebarGroupAction.displayName = 'SidebarGroupAction'

/* -------------------------------------------------------------------------------------------------
 * SidebarGroupContent Component
 * -----------------------------------------------------------------------------------------------*/

const SidebarGroupContentFrame = styled(ThemeableStack, {})

const SidebarGroupContent = SidebarGroupContentFrame.styleable((props, forwardedRef) => (
  <SidebarGroupContentFrame ref={forwardedRef} data-sidebar="group-content" {...props} />
))
SidebarGroupContent.displayName = 'SidebarGroupContent'

/* -------------------------------------------------------------------------------------------------
 * SidebarMenu Component
 * -----------------------------------------------------------------------------------------------*/
const SIDEBAR_MENU = 'SidebarMenu'

const SidebarMenuFrame = styled(YStack, {
  name: SIDEBAR_MENU,
  tag: 'ul',
  style: {
    listStyle: 'none',
  },
  //@ts-ignore
})

const SidebarMenu = SidebarMenuFrame.styleable((props, forwardedRef) => (
  <SidebarMenuFrame ref={forwardedRef} data-sidebar="menu" {...props} />
))
SidebarMenu.displayName = 'SidebarMenu'

/* -------------------------------------------------------------------------------------------------
 * SidebarMenuAction Component
 * -----------------------------------------------------------------------------------------------*/
const SIDEBAR_MENU_ACTION = 'SidebarMenuAction'

const SidebarMenuActionFrame = styled(SidebarButtonBase, {
  name: SIDEBAR_MENU_ACTION,
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  circular: true,
  width: 'unset',
})

const SidebarMenuAction = SidebarMenuActionFrame.styleable((props, forwardedRef) => (
  <SidebarMenuActionFrame
    ref={forwardedRef}
    data-sidebar="sidebar-menu-action"
    className="group-data-[collapsible=icon]:opacity-0"
    {...props}
  />
))

SidebarMenuAction.displayName = SIDEBAR_MENU_ACTION

/* -------------------------------------------------------------------------------------------------
 * SidebarMenuItem Component
 * -----------------------------------------------------------------------------------------------*/
const SIDEBAR_MENUITEM = 'SidebarMenuItem'

const SidebarMenuItemFrame = styled(YStack, {
  name: SIDEBAR_MENUITEM,
  tag: 'li',
  // @ts-ignore˝
  display: 'list-item',
  position: 'relative',
})

const SidebarMenuItem = SidebarMenuItemFrame.styleable((props, forwardedRef) => (
  <SidebarMenuItemFrame ref={forwardedRef} data-sidebar="menu-item" {...props} />
))
SidebarMenuItemFrame.displayName = 'SidebarMenuItem'

/* -------------------------------------------------------------------------------------------------
 * SidebarMenuButton Component
 * -----------------------------------------------------------------------------------------------*/
const SIDEBAR_MENUBUTTON = 'SidebarMenuButton'

const SidebarMenuButtonFrame = styled(SidebarButtonBase, {
  name: SIDEBAR_MENUBUTTON,
  tag: 'button',
  role: 'button',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  width: '100%',
  cursor: 'pointer',
  focusable: true,

  variants: {
    unstyled: {
      false: {
        size: '$true',
        pressStyle: {
          borderColor: 'transparent',
        },
        hoverStyle: {
          backgroundColor: '$color4',
          borderColor: 'transparent',
        },

        // Shows focus when we click tab button
        focusVisibleStyle: {
          outlineColor: '$outlineColor',
          outlineStyle: 'solid',
          outlineWidth: 2,
        },
      },
    },
    size: {
      '...size': getButtonSized,
      ':number': getButtonSized,
    },
  },

  justifyContent: 'flex-start',
  overflow: 'hidden',

  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === '1',
  },
})

type SidebarMenuButtonProps = ThemeableStackProps & {
  tooltipProps?: TooltipProps & { title?: string }
}

const SidebarMenuButtonC = SidebarMenuButtonFrame.styleable<SidebarMenuButtonProps>(
  (props, forwardedRef) => {
    const { tooltipProps, className, ...restProps } = props

    if (tooltipProps) {
      const { title, ...restTooltipProps } = tooltipProps
      return (
        <Tooltip {...restTooltipProps}>
          <Tooltip.Trigger>
            <SidebarMenuButtonFrame
              ref={forwardedRef}
              data-sidebar="menu-button"
              className={`${className} sidebar-menu-btn`}
              {...restProps}
            />
          </Tooltip.Trigger>
          <Tooltip.Content>
            <Tooltip.Arrow />
            <SizableText>{title}</SizableText>
          </Tooltip.Content>
        </Tooltip>
      )
    }

    return (
      <SidebarMenuButtonFrame
        ref={forwardedRef}
        data-sidebar="menu-button"
        className={`${props.className} sidebar-menu-btn`}
        {...props}
      />
    )
  }
)

export const SidebarMenuButtonText = styled(Text, {
  name: 'ButtonText',
  color: '$color',
  userSelect: 'none',
  lineHeight: 'unset',

  variants: {
    size: {
      '...fontSize': (name, { font }) => {
        return {
          fontSize: font?.size[name],
        }
      },
    },
  } as const,
})

const SidebarMenuButtonIcon = (props: { children: any; className?: string }) => {
  const { size = '$true' } = React.useContext(SidebarContext)
  const smaller = getSize(size, {
    // default size is 1 rem
    shift: -3,
  })

  const theme = useTheme()
  return React.isValidElement(props.children)
    ? React.cloneElement(props.children, {
        // @ts-ignore
        size: smaller.val * 0.5,
        color: theme?.color?.get(),
        // @ts-ignore
        className: props?.className,
      })
    : null
}

const SidebarMenuButton = withStaticProperties(SidebarMenuButtonC, {
  Text: SidebarMenuButtonText,
  Icon: SidebarMenuButtonIcon,
})

SidebarMenuButton.displayName = SIDEBAR_MENUBUTTON

/* -------------------------------------------------------------------------------------------------
 * SidebarSubMenu Component
 * -----------------------------------------------------------------------------------------------*/
const SIDEBAR_SUB_MENU = 'SidebarSubMenu'

const SidebarSubMenuFrame = styled(YStack, {
  name: SIDEBAR_MENU,
  tag: 'ul',
  marginHorizontal: '$3',
  paddingHorizontal: '$2.5',
  borderLeftWidth: '1px',
  borderLeftColor: '$gray4Light',
})

const SidebarSubMenu = SidebarSubMenuFrame.styleable((props, forwardedRef) => (
  <SidebarSubMenuFrame
    ref={forwardedRef}
    data-sidebar="sub-menu"
    className="group-data-[collapsible=icon]:hidden"
    style={{ listStyle: 'none' }}
    {...props}
  />
))
SidebarSubMenu.displayName = SIDEBAR_SUB_MENU

/* -------------------------------------------------------------------------------------------------
 * SidebarSubMenuItem Component
 * -----------------------------------------------------------------------------------------------*/
const SIDEBAR_SUB_MENU_ITEM = 'SidebarSubMenuItem'

const SidebarSubMenuItemFrame = styled(YStack, {
  name: SIDEBAR_MENUITEM,
  tag: 'li',
  // @ts-ignore˝
  display: 'list-item',
  position: 'relative',
})

const SidebarSubMenuItem = SidebarSubMenuItemFrame.styleable((props, forwardedRef) => (
  <SidebarSubMenuItemFrame ref={forwardedRef} data-sidebar="menu-item" {...props} />
))
SidebarSubMenuItemFrame.displayName = SIDEBAR_SUB_MENU_ITEM

/* -------------------------------------------------------------------------------------------------
 * SidebarSubMenuButton Component
 * -----------------------------------------------------------------------------------------------*/
const SIDEBAR_SUB_MENU_BUTTON = 'SidebarSubMenuButton'

const SidebarSubMenuButtonFrame = styled(SidebarMenuButtonFrame, {
  name: SIDEBAR_SUB_MENU_BUTTON,
})

/***
 * Tooltip support add
 *
 */

const SidebarSubMenuButtonC = SidebarSubMenuButtonFrame.styleable((props, forwardedRef) => {
  return (
    <SidebarSubMenuButtonFrame
      ref={forwardedRef}
      data-sidebar="menu-button"
      className="sidebar-menu-btn"
      {...props}
    />
  )
})

const SidebarSubMenuButtonText = SidebarMenuButtonText
const SidebarSubMenuButtonIcon = SidebarMenuButtonIcon
const SidebarSubMenuButton = withStaticProperties(SidebarSubMenuButtonC, {
  Text: SidebarSubMenuButtonText,
  Icon: SidebarSubMenuButtonIcon,
})

SidebarSubMenuButton.displayName = SIDEBAR_SUB_MENU_BUTTON

/* -----------------------------------------------------------------------------------------------*/

function getState(open?: boolean) {
  return open ? 'open' : 'closed'
}

/* -----------------------------------------------------------------------------------------------*/

const Sidebar = withStaticProperties(_Sidebar, {
  Trigger: SidebarTrigger,
  Header: SidebarHeader,
  Footer: SidebarFooter,
  Content: SidebarContent,
})

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarSubMenu,
  SidebarSubMenuButton,
  SidebarSubMenuItem,
  SidebarTrigger,
}

export type {
  SidebarContentProps,
  SidebarFooterProps,
  SidebarHeaderProps,
  SidebarProps,
  SidebarTriggerProps,
}
