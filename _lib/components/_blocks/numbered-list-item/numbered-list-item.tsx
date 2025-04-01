import { ChildrenBlocks } from '../children-blocks'
import { List } from '@/_lib/components/basics/list/list'
import { Txt } from '@/_lib/components/basics/typography/txt/txt'
import type { NotionComponentProps } from '@/_lib/types/block'
import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'

export function NumberedListItem({ block }: NotionComponentProps<'numbered_list_item'>) {
  return (
    <List as="li">
      <Txt as="p">
        {block.numbered_list_item.rich_text.map((txt: RichTextItemResponse, idx: number) => (
          <Txt key={idx} as="span" richText={txt} />
        ))}
      </Txt>
      {block.has_children && <ChildrenBlocks childrenBlocks={block.numbered_list_item.children} />}
    </List>
  )
}
