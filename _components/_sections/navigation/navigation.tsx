'use client'
import { Btn } from 'components/basics/button/btn'
import {
  BASE,
  NAV_FLEX,
  HIDE,
  NAV,
  NAV_BTN,
  MENU_WRAPPER,
  BACKGROUND_BASE,
} from './navigation.css'
import { View } from 'components/basics/view/view'
import { useContext, useEffect, useState } from 'react'
import { CurrentPostContext } from 'components/context/current-post-provider'
import { useCategory } from 'hooks/use-category'
import { ThemeContext } from 'components/context/theme-provider'
import { TEXT_COLOR_THEME_VARIANT } from 'components/basics/typography/typography.css'
import { Half2Icon, MagnifyingGlassIcon, SunIcon } from '@radix-ui/react-icons'

export function Navigation() {
  const [hydrated, setHydrated] = useState<boolean>(false)
  const { theme, toggle } = useContext(ThemeContext)
  const { setCurrentPost } = useContext(CurrentPostContext)
  const { isPost } = useCategory()

  const TEXT_COLOR = theme === 'light' ? 'DARK' : 'LIGHT'
  const NAV_MENU = [NAV_BTN, TEXT_COLOR_THEME_VARIANT[TEXT_COLOR]].join(' ')

  useEffect(() => {
    if (!isPost) setCurrentPost(null)
  }, [isPost, setCurrentPost])

  useEffect(() => {
    setHydrated(true)
  }, [])
  if (!hydrated) return null
  return (
    <View
      as="nav"
      className={[BASE, BACKGROUND_BASE[isPost ? 'isPost' : 'isMain']].join(' ')}
    >
      <View as="div" className={[NAV, NAV_FLEX.isPost].join(' ')}>
        <View className={MENU_WRAPPER}>
          <Btn onClick={() => {}} className={NAV_MENU}>
            <MagnifyingGlassIcon width="1.1rem" height="1.1rem" />
          </Btn>
          <Btn onClick={() => toggle()} className={NAV_MENU}>
            {theme === 'light' ? (
              <Half2Icon width="1.1rem" height="1.1rem" />
            ) : (
              <SunIcon width="1.1rem" height="1.1rem" />
            )}
          </Btn>
        </View>
      </View>
    </View>
  )
}
