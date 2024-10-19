'use client'

import { SizableText, Stack, styled, Theme, YGroup, YStack } from '@my/ui'
import Link from 'next/link'

const SidebarContainer = styled(YStack, {
  minWidth: '$18',
  padding: '$4',
})

type TSidebarLinkConfig = {
  href: string
  name: string
}

export const Sidebar = ({ links }: { links: TSidebarLinkConfig[] }) => {
  return (
    <SidebarContainer elevation={2}>
      <Theme name={'orange_active'}>
        <YGroup size="$5" width={'100%'}>
          {links.map((e) => (
            <YGroup.Item key={e.href}>
              {/**TODO Fix the List Item Spacing */}
              <Link style={{ textDecoration: 'none' }} href={e.href}>
                <Stack
                  alignItems="flex-end"
                  paddingRight="$4"
                  hoverStyle={{
                    backgroundColor: '$blue3Light',
                  }}
                >
                  <SizableText size={'$3'} lineHeight={'unset'}>
                    {e.name}
                  </SizableText>
                </Stack>
              </Link>
              {/* <Separator /> */}
            </YGroup.Item>
          ))}
        </YGroup>
      </Theme>
    </SidebarContainer>
  )
}
