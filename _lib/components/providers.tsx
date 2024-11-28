'use client';
import { ModalProvider } from '@syyu/util/react';
import { ReactNode } from 'react';
import { PostListProvider } from '../context/post-list-provider';
import { CurrentPostProvider } from '../context/current-post-provider';
import { NavigationProvider } from '../context/navigation-provider';
import { ThemeProvider } from '../context/theme-provider';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <ModalProvider>
        <NavigationProvider>
          <PostListProvider>
            <CurrentPostProvider>{children}</CurrentPostProvider>
          </PostListProvider>
        </NavigationProvider>
      </ModalProvider>
    </ThemeProvider>
  );
}
