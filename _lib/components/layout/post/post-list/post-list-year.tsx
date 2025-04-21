import { ComponentPropsWithoutRef } from 'react'
import { View } from '@/_lib/components/basics/view/view'
import { BASE } from './post-list-year.css'
import { RocketIcon } from '@radix-ui/react-icons'

export function PostListYear({ ...props }: ComponentPropsWithoutRef<'div'>) {
  return (
    <View as="div" className={BASE} {...props}>
      <span>{props.children}</span>
      <RocketIcon />
    </View>
  )
}
