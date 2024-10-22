import { createContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { PageObject } from '../types/notion-response';
import { noop } from '@syyu/util';

interface CurrentPostContextType {
  currentPost: PageObject | null;
  setCurrentPost: Function;
}

export const CurrentPostContext = createContext<CurrentPostContextType>({
  currentPost: null,
  setCurrentPost: noop,
});

export function CurrentPostProvider({ children }: { children: ReactNode }) {
  const [currentPost, setCurrentPost] = useState<PageObject | null>(null);

  return <CurrentPostContext.Provider value={{ currentPost, setCurrentPost }}>{children}</CurrentPostContext.Provider>;
}
