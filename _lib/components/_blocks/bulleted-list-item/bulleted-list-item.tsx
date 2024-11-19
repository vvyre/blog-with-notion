import { ChildrenBlocks } from '../children-blocks';
import { List } from '../../basics/list/list';
import { Txt } from '../../basics/typography/txt/txt';
import type { NotionComponentProps } from '@/_lib/types/block';
import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';
export function BulletedListItem({ block }: NotionComponentProps<'bulleted_list_item'>) {
  return (
    <List as="li">
      <Txt as="p">
        {block.bulleted_list_item.rich_text.map((txt: RichTextItemResponse, idx: number) => (
          <Txt key={idx} as="span" richText={txt} />
        ))}
      </Txt>
      {block.has_children && <ChildrenBlocks childrenBlocks={block.bulleted_list_item.children} />}
    </List>
  );
}
