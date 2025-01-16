'use client'
import { Btn } from '../../basics/button/btn'
import { View } from '../../basics/view/view'
import { BACK_BUTTON_BASE } from './back-button.css'
import { Txt } from '../../basics/typography/txt/txt'

export function BackButton({ ...props }) {
  return (
    <View as="span" {...props}>
      <Btn as="Link" href={'/'}>
        <Txt as="span" className={BACK_BUTTON_BASE}>
          {'←'}
        </Txt>
      </Btn>
    </View>
  )
}
