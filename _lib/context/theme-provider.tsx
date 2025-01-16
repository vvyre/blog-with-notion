import { ReactNode, createContext } from 'react'
import { useSystemTheme } from '../hooks/use-system-theme'

export const ThemeContext = createContext<{ theme: string; toggle: Function }>({
  theme: 'light',
  toggle: () => {},
})

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, toggle] = useSystemTheme()

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}
