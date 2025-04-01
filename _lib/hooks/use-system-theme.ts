import { useCallback, useEffect, useMemo, useState } from 'react'
import { useIsomorphicLayoutEffect } from '@frfla/react-hooks'
import { isClient } from '@frfla/laser'

type THEME = 'light' | 'dark'

export const useSystemTheme = (): [THEME, () => void] => {
  const [theme, setTheme] = useState<THEME>('light')

  const setLightWithStorage = () => {
    setTheme('light')
    localStorage.setItem('bc_blog_theme', 'light')
  }

  const setDarkWithStorage = () => {
    setTheme('dark')
    localStorage.setItem('bc_blog_theme', 'dark')
  }

  const toggle = useCallback(() => {
    theme === 'light' ? setDarkWithStorage() : setLightWithStorage()
  }, [theme])

  //시스템 설정을 따르는 부분
  useIsomorphicLayoutEffect(() => {
    if (isClient() && typeof localStorage !== 'undefined') {
      const storedTheme = localStorage.getItem('bc_blog_theme') as THEME
      if (storedTheme) setTheme(storedTheme)

      const deviceThemeMediaQuery = window.matchMedia(
        '(prefers-color-scheme: dark)'
      )

      // 시스템 테마 변경이 있다면 시스템 테마 변경을 따릅니다
      const handleThemeChange = (e: MediaQueryListEvent) => {
        e.matches ? setDarkWithStorage() : setLightWithStorage()
      }

      deviceThemeMediaQuery.addEventListener('change', handleThemeChange)

      return () =>
        deviceThemeMediaQuery.removeEventListener('change', handleThemeChange)
    }
  }, [])

  useIsomorphicLayoutEffect(() => {
    const metaThemeColor = document.querySelector('meta[name="theme-color"]')
    metaThemeColor?.setAttribute(
      'content',
      theme === 'dark' ? '#303236' : '#F7F8FB'
    )
  }, [theme])

  useEffect(() => {
    if (isClient() && typeof localStorage !== 'undefined') {
      document.body.dataset.theme = theme
    }
  }, [theme])

  return useMemo(() => [theme, toggle], [theme, toggle])
}
