import { ComponentProps } from 'react'
import { BASE } from './tag.css'
import { List } from 'components/common/list/list'

export function Tag({ ...props }: ComponentProps<typeof List>) {
  return <List className={BASE} as="li" {...props} />
}
