'use client'
import { ReactNode } from 'react'
import { PostListProvider } from 'components/context/post-list-provider'
import { CurrentPostProvider } from 'components/context/current-post-provider'
import { ThemeProvider } from 'components/context/theme-provider'
import { ModalProvider } from '@frfla/react-hooks'
import { WorkerProvider } from './context/global-worker-provider'

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
