'use client'
import { Btn } from 'components/basics/button/btn'

import { BACK_BUTTON_BASE } from './back-button.css'
import { Txt } from 'components/basics/typography/txt/txt'

export function BackButton() {
  return (
    <Btn as="Link" href={'/'} className={BACK_BUTTON_BASE}>
      <Txt as="span" className={BACK_BUTTON_BASE}>
        ←
      </Txt>
    </Btn>
  )
}
