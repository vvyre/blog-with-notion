'use client'
import { useEffect, useRef } from 'react'
import { Btn } from 'components/basics/button/btn'
import { useBackgroundStore } from 'components/_sections/background/store'
import { TEXT_COLOR_THEME_VARIANT } from 'components/basics/typography/typography.css'
import { NAV_BTN } from '../navigation.css'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { usePathname } from 'next/navigation'
export function LogoButton({ ...props }) {
  const logoButtonRef = useRef<HTMLButtonElement>(null)

  const { addRef, brightness } = useBackgroundStore()

  const key = 'logoButton'
  const isDark = brightness.get(key)! > 186
  const TEXT_COLOR = isDark ? 'DARK' : 'LIGHT'

  const NAV_TEXT_STYLE = [NAV_BTN, TEXT_COLOR_THEME_VARIANT[TEXT_COLOR]].join(' ')

  useEffect(() => {
    addRef('logoButton', logoButtonRef)
  }, [logoButtonRef.current])

  const path = usePathname()

  return (
    <Btn
      as="Link"
      href="/"
      ref={logoButtonRef}
      className={NAV_TEXT_STYLE}
      aria-label="About Me"
      {...props}
    >
      {path === '/' ? 'WYRE' : <HamburgerMenuIcon width="1.1rem" height="1.1rem" />}
    </Btn>
  )
}
