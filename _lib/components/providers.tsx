'use client'
import { ReactNode } from 'react'
import { PostListProvider } from '../context/post-list-provider'
import { CurrentPostProvider } from '../context/current-post-provider'
import { NavigationProvider } from '../context/navigation-provider'
import { ThemeProvider } from '../context/theme-provider'
import { BackgroundProvider } from '../context/background-provider'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <BackgroundProvider>
        <NavigationProvider>
          <PostListProvider>
            <CurrentPostProvider>{children}</CurrentPostProvider>
          </PostListProvider>
        </NavigationProvider>
      </BackgroundProvider>
    </ThemeProvider>
  )
}
