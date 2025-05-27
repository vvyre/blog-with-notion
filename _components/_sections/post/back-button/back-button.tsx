'use client'
import { Btn } from 'components/basics/button/btn'

import { Txt } from 'components/basics/typography/txt/txt'
import { BACK_BUTTON_BASE, BACK_BUTTON_INNER } from './back-button.css'

export function BackButton() {
  return (
    <Btn as="Link" href={'/'} className={BACK_BUTTON_BASE}>
      <Txt as="span" className={BACK_BUTTON_INNER}>
        ←
      </Txt>
    </Btn>
  )
}
