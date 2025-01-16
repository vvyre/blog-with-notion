'use client'
import { useCategory } from '@/_lib/hooks/use-category'
import { Btn } from '../../basics/button/btn'
import { View } from '../../basics/view/view'
import { BACK_BUTTON_BASE } from './back-button.css'
import { Txt } from '../../basics/typography/txt/txt'

export function BackButton({ ...props }) {
  const { path } = useCategory()

  return (
    <View as="span" {...props}>
      <Btn as="Link" href={path}>
        <Txt as="span" className={BACK_BUTTON_BASE}>
          {'←'}
        </Txt>
      </Btn>
    </View>
  )
}
