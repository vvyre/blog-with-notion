import { createContext } from 'react';
import type { ReactNode } from 'react';
import { noop } from '@syyu/util';
import { useBooleanState } from '@syyu/util/react';
import { useCategory } from '../react/use-category';

interface NavigationContextType {
  path: string;
  displayProfile: boolean;
  handleProfile: Function;
}

export const NavigationContext = createContext<NavigationContextType>({
  path: '/',
  displayProfile: false,
  handleProfile: noop,
});

export function NavigationProvider({ children }: { children: ReactNode }) {
  const { path, isPost } = useCategory();

  const [displayProfile, _, __, toggle] = useBooleanState(false);
  const handleProfile = () => {
    if (isPost) return;
    toggle();
  };
  return (
    <NavigationContext.Provider value={{ path, displayProfile, handleProfile }}>{children}</NavigationContext.Provider>
  );
}
