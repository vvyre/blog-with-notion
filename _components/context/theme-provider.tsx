import { ReactNode, createContext } from 'react'
import { useSystemTheme } from 'hooks/use-system-theme'
import { useServerInsertedHTML } from 'next/navigation'

export const ThemeContext = createContext<{ theme: string; toggle: () => void }>({
  theme: 'light',
  toggle: () => {},
})

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, toggle] = useSystemTheme()

  useServerInsertedHTML(() => {
    return (
      <>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Mona+Sans:ital,wght@0,200..900;1,200..900&family=Noto+Sans+KR:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </>
    )
  })

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>
  )
}
