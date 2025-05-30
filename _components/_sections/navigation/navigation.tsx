'use client'
import { Btn } from 'components/basics/button/btn'
import { BASE, FILTER_VARIANT, NAV, NAV_BTN, POST_TITLE_WRAPPER } from './navigation.css'
import { View } from 'components/basics/view/view'
import { useContext, useEffect } from 'react'
import { CurrentPostContext } from 'components/context/current-post-provider'
import { useCategory } from 'hooks/use-category'
import { Spacing } from 'components/basics/spacing/spacing'
import { ThemeContext } from 'components/context/theme-provider'
import { TEXT_COLOR_THEME_VARIANT } from 'components/basics/typography/typography.css'
import { Half2Icon, SunIcon } from '@radix-ui/react-icons'

export function Navigation() {
  const { theme, toggle } = useContext(ThemeContext)
  const { setCurrentPost } = useContext(CurrentPostContext)
  const { isPost } = useCategory()

  const TEXT_COLOR = theme === 'light' ? 'DARK' : 'LIGHT'
  const NAV_TEXT_STYLE = [NAV_BTN, TEXT_COLOR_THEME_VARIANT[TEXT_COLOR]].join(' ')

  useEffect(() => {
    if (!isPost) setCurrentPost(null)
  }, [isPost, setCurrentPost])

  return (
    <View as="nav" className={[BASE, isPost && FILTER_VARIANT.isPost].join(' ')}>
      <View as="div" className={NAV}>
        <View className={POST_TITLE_WRAPPER}>
          {isPost && (
            <>
              <Spacing size="0.15rem" dir="hori" />
              <Btn onClick={() => toggle()} className={NAV_TEXT_STYLE}>
                {theme === 'light' ? (
                  <Half2Icon width="1.1rem" height="1.1rem" />
                ) : (
                  <SunIcon width="1.1rem" height="1.1rem" />
                )}
              </Btn>
            </>
          )}
        </View>
      </View>
    </View>
  )
}
