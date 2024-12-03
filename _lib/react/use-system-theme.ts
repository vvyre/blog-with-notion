import { useCallback, useEffect, useMemo, useState } from 'react';
import { useIsomorphicLayoutEffect } from '@syyu/util/react';
import { isClient } from '@syyu/util';

type THEME = 'light' | 'dark';

export const useSystemTheme = (): [THEME, boolean, () => void] => {
  const [theme, setTheme] = useState<THEME>('light');
  const [prefersDark, setPrefersDark] = useState(false);

  const setLight = useCallback(() => {
    setTheme('light');
  }, []);

  const setDark = useCallback(() => {
    setTheme('dark');
  }, []);

  const toggle = useCallback(() => {
    theme === 'light' ? setDark() : setLight();
  }, [theme]);

  useIsomorphicLayoutEffect(() => {
    if (isClient() && typeof localStorage !== 'undefined') {
      const storedTheme = localStorage.getItem('bc_blog_theme') as THEME;
      const devicePrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

      setPrefersDark(devicePrefersDark);

      if (storedTheme) setTheme(storedTheme);
      else if (devicePrefersDark) setDark();
    }
  }, []);

  useEffect(() => {
    if (isClient() && typeof localStorage !== 'undefined') {
      localStorage.setItem('bc_blog_theme', theme);
      document.body.dataset.theme = theme;
    }
  }, [theme]);

  return useMemo(() => [theme, prefersDark, toggle], [theme, prefersDark, toggle]);
};
