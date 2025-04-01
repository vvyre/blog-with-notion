import { ComponentPropsWithoutRef } from 'react'
import { View } from '@/_lib/components/basics/view/view'
import { Txt } from '@/_lib/components/basics/typography/txt/txt'
import { BASE } from './post-list-year.css'

export function PostListYear({ ...props }: ComponentPropsWithoutRef<'div'>) {
  return (
    <View {...props}>
      <Txt as="div" className={BASE}>
        {props.children}
      </Txt>
    </View>
  )
}
