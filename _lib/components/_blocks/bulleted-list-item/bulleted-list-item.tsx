import { ChildrenBlocks } from '../children-blocks';
import { List } from '../../list/list';
import { Txt } from '../../typography/txt/txt';
import { BASE, DEPTH_1 } from './bulleted-list-item.css';
import type { NotionComponentPropsWithChildren } from '@/_lib/types/component-common';
import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';

export function BulletedListItem({ block }: NotionComponentPropsWithChildren<'bulleted_list_item'>) {
  return (
    <List as="li" styleVariant={DEPTH_1}>
      {block.bulleted_list_item.rich_text.map((txt: RichTextItemResponse, idx: number) => (
        <Txt key={idx} as="span" richText={txt} />
      ))}
      {block.bulleted_list_item.children && <ChildrenBlocks block={block} />}
    </List>
  );
}
