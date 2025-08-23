import { useCallback, useEffect, useInsertionEffect, useMemo, useState } from 'react'
import { useIsomorphicLayoutEffect } from '@frfla/react-hooks'
import { isClient } from '@frfla/laser'
import { vars } from 'styles/themes.css'

type THEME = 'light' | 'dark'

const getInitialTheme = (): THEME => {
  if (typeof window === 'undefined') return 'light'
  const stored = localStorage.getItem('wyreBlogTheme') as THEME | null
  if (stored === 'light' || stored === 'dark') return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export const useSystemTheme = (): [THEME, () => void] => {
  const [theme, setTheme] = useState<THEME>(getInitialTheme)

  const setLightWithStorage = () => {
    setTheme('light')
    localStorage.setItem('wyreBlogTheme', 'light')
  }

  const setDarkWithStorage = () => {
    setTheme('dark')
    localStorage.setItem('wyreBlogTheme', 'dark')
  }

  const toggle = useCallback(() => {
    theme === 'light' ? setDarkWithStorage() : setLightWithStorage()
  }, [theme])

  //시스템 설정을 따르는 부분
  useIsomorphicLayoutEffect(() => {
    if (!isClient()) return
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setTheme('dark')
        setDarkWithStorage()
      } else {
        setTheme('light')
        setLightWithStorage()
      }
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  useInsertionEffect(() => {
    document.documentElement.dataset.theme = theme
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) {
      const colorValue = vars.color.default
      meta.setAttribute('content', colorValue)
    }
  }, [theme])

  useEffect(() => {
    if (isClient() && typeof localStorage !== 'undefined') {
      document.body.dataset.theme = theme
    }
  }, [theme])

  return useMemo(() => [theme, toggle], [theme, toggle])
}
