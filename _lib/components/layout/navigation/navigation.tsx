'use client'
import { Btn } from '@/_lib/components/basics/button/btn'
import { BASE, FILTER_VARIANT, NAV, NAV_BTN, POST_TITLE_WRAPPER } from './navigation.css'
import { View } from '@/_lib/components/basics/view/view'
import { useContext, useEffect } from 'react'
import { CurrentPostContext } from '@/_lib/components/context/current-post-provider'
import { useCategory } from '@/_lib/hooks/use-category'
import { Spacing } from '@/_lib/components/basics/spacing/spacing'
import { GithubLink } from '../external-logos/github'
import { LogoButton } from './logo-button/logo-button'
import { ThemeContext } from '@/_lib/components/context/theme-provider'
import { TEXT_COLOR_THEME_VARIANT } from '@/_lib/components/basics/typography/typography.css'
import { useBackgroundStore } from '../background/store'

export function Navigation() {
  const { theme, toggle } = useContext(ThemeContext)

  const { setCurrentPost } = useContext(CurrentPostContext)
  const { LIGHT_THEME_RECOMMEMDED } = useBackgroundStore()
  const { isPost } = useCategory()

  const TEXT_COLOR = LIGHT_THEME_RECOMMEMDED() ? 'DARK' : 'LIGHT'
  const NAV_TEXT_STYLE = [NAV_BTN, TEXT_COLOR_THEME_VARIANT[TEXT_COLOR]].join(' ')

  useEffect(() => {
    if (!isPost) setCurrentPost(null)
  }, [isPost])

  return (
    <View as="nav" className={[BASE, isPost && FILTER_VARIANT.isPost].join(' ')}>
      <View as="div" className={NAV}>
        <LogoButton />
        <View className={POST_TITLE_WRAPPER}>
          <GithubLink />
          {isPost && (
            <>
              <Spacing size="0.15rem" dir="hori" />
              <Btn onClick={() => toggle()} className={NAV_TEXT_STYLE}>
                {theme === 'light' ? '🌚' : '🌞'}
              </Btn>
            </>
          )}
        </View>
      </View>
    </View>
  )
}
