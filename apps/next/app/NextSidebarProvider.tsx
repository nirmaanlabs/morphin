'use client'

import { SidebarProvider } from '@my/ui'
import { ReactNode } from 'react'

export const NextTamaguiSidebarProvider = ({ children }: { children: ReactNode }) => {
  return <SidebarProvider>{children}</SidebarProvider>
}
