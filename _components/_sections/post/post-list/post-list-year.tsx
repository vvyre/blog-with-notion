import { ComponentPropsWithoutRef } from 'react'
import { View } from 'components/basics/view/view'
import { BASE } from './post-list-year.css'
import { LayersIcon } from '@radix-ui/react-icons'

export function PostListYear({ ...props }: ComponentPropsWithoutRef<'div'>) {
  return (
    <View as="div" className={BASE} {...props}>
      <LayersIcon />
      <span>{props.children}</span>
    </View>
  )
}
