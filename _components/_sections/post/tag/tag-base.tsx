import { List } from 'components/basics/list/list'
import { TAG_BASE } from './tag.css'
import { ReactNode } from 'react'

export function TagBase({ children }: { children: ReactNode }) {
  return (
    <List as="ul" className={TAG_BASE}>
      {children}
    </List>
  )
}
