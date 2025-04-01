'use client'
import { ReactNode } from 'react'
import { PostListProvider } from '@/_lib/components/context/post-list-provider'
import { CurrentPostProvider } from '@/_lib/components/context/current-post-provider'
import { ThemeProvider } from '@/_lib/components/context/theme-provider'
import { ModalProvider } from '@frfla/react-hooks'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <ModalProvider>
        <PostListProvider>
          <CurrentPostProvider>{children}</CurrentPostProvider>
        </PostListProvider>
      </ModalProvider>
    </ThemeProvider>
  )
}
