'use client'
import { ComponentProps } from 'react'
import { BASE } from './divider.css'
import { View } from '../view/view'
import { Flex } from '../flex/flex'
import { BorderDashedIcon } from '@radix-ui/react-icons'

interface DividerProps extends ComponentProps<'hr'> {
  className?: string
}

export function Divider({ className, ...props }: DividerProps) {
  return (
    <View as="hr" className={className ?? BASE} ref={props.ref} {...props}>
      <Flex>
        <BorderDashedIcon />
      </Flex>
    </View>
  )
}
