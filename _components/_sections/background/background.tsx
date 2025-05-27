import {
  LAYOUT_BG,
  LAYOUT_CANVAS,
  OVERFLOW,
} from 'components/_sections/background/background.css'
import { View } from 'components/basics/view/view'
import { ComponentProps } from 'react'
import { BackgroundCanvas } from './background-canvas'

export function BackgroundLayout({ ...props }: ComponentProps<'div'>) {
  return (
    <>
      <View className={props.className ?? LAYOUT_BG} {...props}>
        <BackgroundCanvas className={LAYOUT_CANVAS} />
        <View className={OVERFLOW}>{props.children}</View>
      </View>
    </>
  )
}
