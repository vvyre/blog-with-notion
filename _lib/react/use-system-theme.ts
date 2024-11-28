import { useCallback, useLayoutEffect, useMemo, useState } from 'react';

type THEME = 'light' | 'dark';

export const useSystemTheme = (): [string, boolean, Function] => {
  const get_theme = typeof window === 'undefined' ? 'light' : localStorage.getItem('bc_blog_theme');
  const STORED_THEME: THEME = (get_theme ? get_theme : 'light') as THEME;
  let [theme, setTheme] = useState<THEME>(STORED_THEME);
  const [prefersDark, setPrefersDark] = useState(false);

  const setLight = useCallback(() => {
    setTheme('light');
  }, []);

  const setDark = useCallback(() => {
    setTheme('dark');
  }, []);

  const toggle = () => (theme === 'light' ? setDark() : setLight());

  useLayoutEffect(() => {
    //디바이스(또는 브라우저 설정)의 기본 선호에 반응해 블로그 테마를 변화시킵니다.
    const DevicePrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setPrefersDark(DevicePrefersDark);

    if (DevicePrefersDark) setDark();
  }, []);

  useLayoutEffect(() => {
    //store의 변화에 반응해 React 외부의 값을 업데이트합니다
    localStorage.setItem('bc_blog_theme', theme);
    document.body.dataset.theme = theme;
  }, [theme]);

  return useMemo(() => [theme, prefersDark, toggle], [theme, prefersDark]);
};
