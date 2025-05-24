'use client'
import { type ComponentPropsWithoutRef } from 'react'
import { View } from 'components/basics/view/view'
import { useBackgroundStore } from './store'

export function RandomColorBackground({ ...props }: ComponentPropsWithoutRef<'div'>) {
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
