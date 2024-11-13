import { Metadata } from 'next'
import { NextTamaguiProvider } from './NextTamaguiProvider'
import { Header } from './components/Header'
import { SidebarProvider, Theme } from '@my/ui'
import { NextTamaguiSidebarProvider } from './NextSidebarProvider'

const description = 'Morphin are ready to copy and paste ui components made from Tamagui.'
const siteName = 'Morphin Tamagui UI Kit'
const url = ''
const ogImage = `${url}/images/`

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteName}`,
    default: siteName,
  },
  description,
  openGraph: {
    title: 'Acme',
    description,
    url,
    type: 'website',
    siteName,
    locale: 'en_US',
    images: [
      {
        url: ogImage,
        width: 2024,
        height: 1012,
        alt: 'Morphin Tamagui UI Kit',
      },
    ],
  },

  authors: [{ name: 'Nirmaan Labs', url: 'https://github.com/nirmaanlabs/' }],
  creator: 'Nirmaan Labs',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // You can use `suppressHydrationWarning` to avoid the warning about mismatched content during hydration in dev mode
    <html lang="en" suppressHydrationWarning>
      <body>
        <NextTamaguiProvider>
          <NextTamaguiSidebarProvider>
            <Header />
            {children}
          </NextTamaguiSidebarProvider>
        </NextTamaguiProvider>
      </body>
    </html>
  )
}
