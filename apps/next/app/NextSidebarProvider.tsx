'use client'

import { SidebarProvider } from '@my/ui'
import { ReactNode } from 'react'

export const NextSidebarProvider = ({ children }: { children: ReactNode }) => {
  return <SidebarProvider>{children}</SidebarProvider>
}
