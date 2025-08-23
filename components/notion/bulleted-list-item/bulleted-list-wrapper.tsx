import { List } from 'components/common/list/list'
import { BulletedListItem } from './bulleted-list-item'
import type { NotionComponentProps } from 'types/block'
import { BASE } from './bulleted-list-item.css'

export function BulletedListWrapper({
  block,
}: NotionComponentProps<'grouped_bulleted_list_item'>) {
  return (
    <List as="ul" className={BASE}>
      {block.grouped_bulleted_list_item.children.map((item, idx: number) => (
        <BulletedListItem key={idx} block={item} />
      ))}
    </List>
  )
}
