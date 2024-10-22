import { createContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { PageObject } from '../types/notion-response';
import { noop } from '@syyu/util';
import { useBooleanState } from '@syyu/util/react';
import { usePathname } from 'next/navigation';

interface NavigationContextType {
  path: string;
  isPost: boolean;
  displayProfile: boolean;
  handleProfile: Function;
}

export const NavigationContext = createContext<NavigationContextType>({
  path: '/',
  isPost: true,
  displayProfile: false,
  handleProfile: noop,
});

export function NavigationProvider({ children }: { children: ReactNode }) {
  const path = usePathname();
  const isPost = !(path === '/');

  const [displayProfile, _, __, toggle] = useBooleanState(false);
  const handleProfile = () => {
    if (isPost) return;
    toggle();
  };
  return (
    <NavigationContext.Provider value={{ path, isPost, displayProfile, handleProfile }}>
      {children}
    </NavigationContext.Provider>
  );
}
