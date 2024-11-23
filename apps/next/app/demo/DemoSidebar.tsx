'use client'

import {
  Avatar,
  Button,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Label,
  RadioGroup,
  Separator,
  Sidebar,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSubMenu,
  SidebarSubMenuButton,
  SidebarSubMenuItem,
  SizableText,
  SizeTokens,
  XStack,
  YStack,
} from '@my/ui'
import {
  Bot,
  Building2,
  ChevronRight,
  FolderLock,
  Key,
  Lock,
  Shield,
  ShieldCheck,
  TerminalSquare,
  Vault,
} from '@tamagui/lucide-icons'
import { useState } from 'react'
import DemoContainer from './DemoContainer'

const navMain = [
  {
    title: 'Vimults',
    url: '#',
    icon: TerminalSquare,
    isActive: true,
    items: [
      {
        title: 'Screenless',
        url: '#',
      },
      {
        title: 'XPass',
        url: '#',
      },
      {
        title: 'Bluehawk',
        url: '#',
      },
    ],
  },
  {
    title: 'Pattern',
    url: '#',
    icon: Bot,
    items: [
      {
        title: '8figure',
        url: '#',
      },
      {
        title: 'Alloptions',
        url: '#',
      },
      {
        title: 'Retina',
        url: '#',
      },
    ],
  },
]

const items = [
  {
    id: '3',
    name: 'Keyflow',
    href: '#',
    IconComponent: Key,
  },
  {
    id: '4',
    name: 'Vaultease',
    href: '#',
    IconComponent: Vault,
  },
  {
    id: '5',
    name: 'Credguard',
    href: '#',
    IconComponent: Shield,
  },
  {
    id: '6',
    name: 'Lockshift',
    href: '#',
    IconComponent: Lock,
  },

  {
    id: '8',
    name: 'Safecore',
    href: '#',
    IconComponent: FolderLock,
  },
  {
    id: '9',
    name: 'Guardstack',
    href: '#',
    IconComponent: ShieldCheck,
  },
]

export function RadioGroupItemWithLabel(props: { size: SizeTokens; value: string; label: string }) {
  const id = `radiogroup-${props.value}`
  return (
    <XStack width={300} alignItems="center" space="$4">
      <RadioGroup.Item value={props.value} id={id} size={props.size}>
        <RadioGroup.Indicator />
      </RadioGroup.Item>

      <Label size={props.size} htmlFor={id}>
        {props.label}
      </Label>
    </XStack>
  )
}

const DemoSidebar = () => {
  const [collapsibleVal, setCollapsibleVal] = useState<'icon' | 'offcanvas' | 'none'>('icon')

  return (
    <>
      <DemoContainer limit={1}>
        <YStack
          minHeight={100}
          overflow="hidden"
          margin="$3"
          padding="$2"
          justifyContent="space-between"
        >
          <XStack gap={'$4'}>
            <Sidebar
              collapsible={collapsibleVal}
              borderColor={'aliceblue'}
              borderStyle="solid"
              //@ts-ignore
              maxHeight={'70svh'}
              //@ts-ignore
              minHeight={'70svh'}
            >
              <Sidebar.Header>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      className="collapsible-icon-pl-4"
                      transition="padding-left 0.3s ease"
                      tooltipProps={{
                        title: 'Armac LLC',
                        placement: 'right-start',
                        delay: {
                          open: 0,
                          close: 0.5,
                        },
                      }}
                    >
                      <XStack padding="$1" bg={'$purple7'} borderRadius={'$1'}>
                        <SidebarMenuButton.Icon>
                          <Building2 />
                        </SidebarMenuButton.Icon>
                      </XStack>
                      <SidebarMenuButton.Text
                        whiteSpace="nowrap"
                        lineHeight={'unset'}
                        fontSize={14}
                        fontWeight={'bold'}
                      >
                        Armac LLC
                      </SidebarMenuButton.Text>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </Sidebar.Header>
              <Sidebar.Content>
                <SidebarGroup>
                  <SidebarGroupLabel fontSize={12} color={'$color.gray10Light'}>
                    Vaultions
                  </SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {navMain.map((item) => (
                        <Collapsible
                          key={item.title}
                          asChild
                          defaultOpen={item.isActive}
                          className="group/collapsible"
                        >
                          <SidebarMenuItem>
                            <CollapsibleTrigger asChild transition="height 3s ease">
                              <SidebarMenuButton
                                tooltipProps={{
                                  title: `${item.title}`,
                                  placement: 'right-start',
                                  delay: {
                                    open: 0,
                                    close: 0.5,
                                  },
                                }}
                              >
                                {item.icon && (
                                  <SidebarMenuButton.Icon>
                                    <item.icon flexShrink={0} />
                                  </SidebarMenuButton.Icon>
                                )}
                                <SidebarMenuButton.Text fontSize={14}>
                                  {item.title}
                                </SidebarMenuButton.Text>
                                <SidebarMenuButton.Icon className="rotate-90deg">
                                  <ChevronRight flexShrink={0} style={{ marginLeft: 'auto' }} />
                                </SidebarMenuButton.Icon>
                              </SidebarMenuButton>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                              <SidebarSubMenu>
                                {item.items?.map((subItem) => (
                                  <SidebarSubMenuItem key={subItem.title}>
                                    <SidebarSubMenuButton asChild>
                                      <a href={subItem.url} style={{ textDecoration: 'none' }}>
                                        <SizableText whiteSpace="nowrap" textOverflow="ellipsis">
                                          {subItem.title}
                                        </SizableText>
                                      </a>
                                    </SidebarSubMenuButton>
                                  </SidebarSubMenuItem>
                                ))}
                              </SidebarSubMenu>
                            </CollapsibleContent>
                          </SidebarMenuItem>
                        </Collapsible>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                  <SidebarGroupLabel fontSize={12} color={'$color.gray10Light'}>
                    Vaults
                  </SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {items.map(({ id, name, IconComponent }) => {
                        return (
                          <SidebarMenuItem key={id}>
                            <SidebarMenuButton>
                              <SidebarMenuButton.Icon>
                                <IconComponent flexShrink={0} />
                              </SidebarMenuButton.Icon>
                              <SidebarMenuButton.Text lineHeight={'unset'} fontSize={14}>
                                {name}
                              </SidebarMenuButton.Text>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        )
                      })}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              </Sidebar.Content>
              <Separator />
              <Sidebar.Footer>
                <SidebarMenuButton
                  className="collapsible-icon-pl-0"
                  transition="padding-left 0.3s ease"
                >
                  <Avatar circular size="$2">
                    <Avatar.Image
                      accessibilityLabel="Nate Wienert"
                      src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?&w=100&h=100&dpr=2&q=80"
                    />
                    <Avatar.Fallback delayMs={600} backgroundColor="$blue10" />
                  </Avatar>
                  <YStack>
                    <SidebarMenuButton.Text
                      lineHeight={'unset'}
                      fontSize={14}
                      fontWeight={'bold'}
                      color={'$gray11Light'}
                    >
                      Someone
                    </SidebarMenuButton.Text>
                    <SidebarMenuButton.Text lineHeight={'unset'} fontSize={10}>
                      someone@com.in
                    </SidebarMenuButton.Text>
                  </YStack>
                </SidebarMenuButton>
              </Sidebar.Footer>
            </Sidebar>
            <YStack>
              <Sidebar.Trigger asChild>
                <Button>Toggle Sidebar</Button>
              </Sidebar.Trigger>
              <YStack>
                <Separator marginVertical={15} />
                <SizableText>Collapsible Type</SizableText>
                <RadioGroup
                  onValueChange={(v) => {
                    // @ts-ignore
                    setCollapsibleVal(v)
                  }}
                  gap="$2"
                  name="form"
                  value={collapsibleVal}
                >
                  <YStack>
                    <XStack width={300} alignItems="center" space="$4">
                      <RadioGroup.Item value="icon" id="icon-radio-item">
                        <RadioGroup.Indicator />
                      </RadioGroup.Item>
                      <Label size={3} htmlFor={'icon-radio-item'}>
                        Icon
                      </Label>
                    </XStack>
                    <XStack width={300} alignItems="center" space="$4">
                      <RadioGroup.Item value="offcanvas" id="offcanvas-radio-item">
                        <RadioGroup.Indicator />
                      </RadioGroup.Item>
                      <Label size={3} htmlFor={'offcanvas-radio-item'}>
                        Offcanvas
                      </Label>
                    </XStack>
                    <XStack width={300} alignItems="center" space="$4">
                      <RadioGroup.Item value="none" id="none-radio-item">
                        <RadioGroup.Indicator />
                      </RadioGroup.Item>
                      <Label size={3} htmlFor={'none-radio-item'}>
                        None
                      </Label>
                    </XStack>
                  </YStack>
                </RadioGroup>
              </YStack>
            </YStack>
          </XStack>
        </YStack>
      </DemoContainer>
    </>
  )
}

export default DemoSidebar
