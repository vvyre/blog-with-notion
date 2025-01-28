'use client'
import { useEffect, useRef } from 'react'
import { Btn } from '../../../basics/button/btn'
import { LOGO } from './about-btn.css'
import { useBackgroundStore } from '../../background/store'
import { TEXT_COLOR_THEME_VARIANT } from '@/_lib/components/basics/typography/typography.css'
import { NAV_BTN } from '../navigation.css'
export function AboutBtn({ ...props }) {
  const aboutBtnRef = useRef<HTMLButtonElement>(null)

  const { addRef, brightness } = useBackgroundStore()

  const key = 'aboutBtn'
  const isDark = brightness.get(key)! > 186
  const TEXT_COLOR = isDark ? 'DARK' : 'LIGHT'

  const NAV_TEXT_STYLE = [NAV_BTN, TEXT_COLOR_THEME_VARIANT[TEXT_COLOR]].join(
    ' '
  )

  useEffect(() => {
    addRef('aboutBtn', aboutBtnRef)
  }, [aboutBtnRef.current])

  return (
    <Btn
      ref={aboutBtnRef}
      className={NAV_TEXT_STYLE}
      aria-label="About Me"
      {...props}
    >
      Brewcold
    </Btn>
  )
}
