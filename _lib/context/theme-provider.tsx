import { THEMES } from '@/_lib/styles/themes';
import { ReactNode, createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext<[number, () => void]>([0, () => {}]);

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<number>(0);
  const [changing, setChanging] = useState<boolean>(true);

  useEffect(() => {
    if (changing) {
      setTheme(Math.floor(Math.random() * THEMES.length));
      setChanging(false);
    }
  }, [changing]);

  const changeTheme = () => setChanging(true);

  return <ThemeContext.Provider value={[theme, changeTheme]}>{children}</ThemeContext.Provider>;
}
