import { createContext } from 'react'
import type { ReactNode } from 'react'
import { noop } from '@frfla/laser'
import { useBooleanState } from '@frfla/react-hooks'
import { useCategory } from '@/_lib/hooks/use-category'

interface NavigationContextType {
  path: string
  displayProfile: boolean
  hideProfile: Function
  handleProfile: Function
}

export const NavigationContext = createContext<NavigationContextType>({
  path: '/',
  displayProfile: false,
  hideProfile: noop,
  handleProfile: noop,
})

export function NavigationProvider({ children }: { children: ReactNode }) {
  const { path, isPost } = useCategory()

  const [displayProfile, _, hideProfile, toggle] = useBooleanState(false)
  const handleProfile = () => {
    toggle()
  }
  return (
    <NavigationContext.Provider
      value={{ path, displayProfile, hideProfile, handleProfile }}
    >
      {children}
    </NavigationContext.Provider>
  )
}
