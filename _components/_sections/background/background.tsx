import {
  LAYOUT_BG,
  LAYOUT_CANVAS,
  LAYOUT_FILTER,
  OVERFLOW,
} from 'components/_sections/background/background.css'
import { View } from 'components/basics/view/view'
import { ComponentPropsWithoutRef } from 'react'
import { BackgroundCanvas } from './background-canvas'

export function BackgroundLayout({ ...props }: ComponentPropsWithoutRef<'div'>) {
  return (
    <>
      <View className={props.className ?? LAYOUT_BG} {...props}>
        <BackgroundCanvas className={LAYOUT_CANVAS} />
        <View className={OVERFLOW}>{props.children}</View>
      </View>
    </>
  )
}
