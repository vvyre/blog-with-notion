import { useCallback, useEffect, useMemo, useState } from 'react';
import { useIsomorphicLayoutEffect } from '@syyu/util/react';
import { isClient } from '@syyu/util';

type THEME = 'light' | 'dark';

export const useSystemTheme = (): [THEME, () => void] => {
  const [theme, setTheme] = useState<THEME>('light');

  const setLight = () => setTheme('light');

  const setDark = () => setTheme('dark');

  const setLightWithStorage = () => {
    setTheme('light');
    localStorage.setItem('bc_blog_theme', 'light');
  };

  const setDarkWithStorage = () => {
    setTheme('dark');
    localStorage.setItem('bc_blog_theme', 'dark');
  };

  const toggle = useCallback(() => {
    theme === 'light' ? setDarkWithStorage() : setLightWithStorage();
  }, [theme]);

  //시스템 설정을 따르는 부분
  useIsomorphicLayoutEffect(() => {
    if (isClient() && typeof localStorage !== 'undefined') {
      const storedTheme = localStorage.getItem('bc_blog_theme') as THEME;
      if (storedTheme) setTheme(storedTheme);

      const deviceThemeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleThemeChange = (e: MediaQueryListEvent) =>
        //스토리지에 저장된 아이템이 없으면 시스템을 따릅니다
        !localStorage.getItem('bc_blog_theme') && e.matches ? setDark() : setLight();
      deviceThemeMediaQuery.addEventListener('change', handleThemeChange);

      return () => deviceThemeMediaQuery.removeEventListener('change', handleThemeChange);
    }
  }, []);

  useEffect(() => {
    if (isClient() && typeof localStorage !== 'undefined') document.body.dataset.theme = theme;
  }, [theme]);

  return useMemo(() => [theme, toggle], [theme, toggle]);
};
