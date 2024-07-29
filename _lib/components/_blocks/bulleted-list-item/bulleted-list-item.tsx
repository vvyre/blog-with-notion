import { ChildrenBlocks } from '../children-blocks';
import { List } from '../../list/list';
import { Txt } from '../../typography/txt/txt';
import type { NotionComponentPropsWithChildren } from '@/_lib/types/component-common';
import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';
export function BulletedListItem({ block }: NotionComponentPropsWithChildren<'bulleted_list_item'>) {
  return (
    <List as="li">
      {block.bulleted_list_item.rich_text.map((txt: RichTextItemResponse, idx: number) => (
        <Txt key={idx} as="span" richText={txt} />
      ))}
      {block.has_children && <ChildrenBlocks childrenBlocks={block.bulleted_list_item.children} />}
    </List>
  );
}
