import { ReactNode, createContext } from 'react';
import { useSystemTheme } from '../react/use-system-theme';

export const ThemeContext = createContext<{ theme: string; prefersDark: boolean; toggle: Function }>({
  theme: 'light',
  prefersDark: false,
  toggle: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, prefersDark, toggle] = useSystemTheme();

  return <ThemeContext.Provider value={{ theme, prefersDark, toggle }}>{children}</ThemeContext.Provider>;
}
