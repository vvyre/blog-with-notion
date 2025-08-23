'use client'
import { ReactNode } from 'react'
import { PostListProvider } from './post-list-provider'
import { CurrentPostProvider } from './current-post-provider'
import { ThemeProvider } from './theme-provider'
import { ModalProvider } from '@frfla/react-hooks'
import { WorkerProvider } from './global-worker-provider'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <WorkerProvider>
      <ThemeProvider>
        <ModalProvider>
          <PostListProvider>
            <CurrentPostProvider>{children}</CurrentPostProvider>
          </PostListProvider>
        </ModalProvider>
      </ThemeProvider>
    </WorkerProvider>
  )
}
