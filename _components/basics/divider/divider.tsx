'use client'
import { ComponentPropsWithRef } from 'react'
import { BASE } from './divider.css'
import { View } from '../view/view'
import { Flex } from '../flex/flex'
import { BorderDashedIcon } from '@radix-ui/react-icons'

interface DividerProps extends ComponentPropsWithRef<'hr'> {
  className?: string
}

export function Divider({ className, ref, ...props }: DividerProps) {
  return (
    <View as="hr" className={className ?? BASE} ref={ref} {...props}>
      <Flex>
        <BorderDashedIcon />
      </Flex>
    </View>
  )
}
