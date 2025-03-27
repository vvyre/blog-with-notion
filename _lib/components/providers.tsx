'use client'
import { ReactNode } from 'react'
import { PostListProvider } from '@/_lib/components/context/post-list-provider'
import { CurrentPostProvider } from '@/_lib/components/context/current-post-provider'
import { NavigationProvider } from '@/_lib/components/context/navigation-provider'
import { ThemeProvider } from '@/_lib/components/context/theme-provider'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <NavigationProvider>
        <PostListProvider>
          <CurrentPostProvider>{children}</CurrentPostProvider>
        </PostListProvider>
      </NavigationProvider>
    </ThemeProvider>
  )
}
