import { Btn } from 'components/common/button/btn'

import { TEXT_COLOR_THEME_VARIANT } from 'components/common/typography/typography.css'
import { NAV_BTN } from '../navigation.css'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { usePathname } from 'next/navigation'

export function LogoButton({ ...props }) {
  const TEXT_COLOR = 'LIGHT'
  const NAV_TEXT_STYLE = [NAV_BTN, TEXT_COLOR_THEME_VARIANT[TEXT_COLOR]].join(' ')

  const path = usePathname()
  if (!path.includes('engineering')) return
  return (
    <Btn
      as="Link"
      href="/"
      className={NAV_TEXT_STYLE}
      aria-label="Go To Post List"
      {...props}
    >
      {<HamburgerMenuIcon width="1.1rem" height="1.1rem" />}
    </Btn>
  )
}
