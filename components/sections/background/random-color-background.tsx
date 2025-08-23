'use client'
import { type ComponentProps } from 'react'
import { View } from 'components/common/view/view'
import { useBackgroundStore } from './store'

export function RandomColorBackground({ ...props }: ComponentProps<'div'>) {
  const { backgroundColor } = useBackgroundStore()
  return (
    <View
      {...props}
      style={{
        backgroundColor,
      }}
    >
      {props.children}
    </View>
  )
}
