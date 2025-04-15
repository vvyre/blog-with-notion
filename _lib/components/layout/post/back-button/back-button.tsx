'use client'
import { Btn } from '@/_lib/components/basics/button/btn'
import { View } from '@/_lib/components/basics/view/view'
import { BACK_BUTTON_BASE } from './back-button.css'
import { Txt } from '@/_lib/components/basics/typography/txt/txt'
import { DoubleArrowLeftIcon } from '@radix-ui/react-icons'

export function BackButton({ ...props }) {
  return (
    <View {...props}>
      <Btn as="Link" href={'/'} className={BACK_BUTTON_BASE}>
        <Txt as="span" className={BACK_BUTTON_BASE}>
          <DoubleArrowLeftIcon width="1.5rem" height="1.5rem" />
        </Txt>
      </Btn>
    </View>
  )
}
