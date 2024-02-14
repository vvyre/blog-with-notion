import type { BulletedListItem } from './bulleted-list-item-block';
import type { RichText } from '@/_lib/types/block';
import { useId } from 'react';
import { ChildrenBlocks } from '../ChildrenBlocks';
import { List } from '../../list/list';
import { Txt } from '../../typography/txt/txt';
import { DEPTH_1 } from './bulleted-list-item.css';

export function BulletedListItem({ block }: BulletedListItem) {
  const id = useId();
  return (
    <List as="li" styleVariant={DEPTH_1}>
      {block.bulleted_list_item.rich_text.map((txt: RichText) => (
        <Txt key={id} as="span" richText={txt} />
      ))}
      {block.bulleted_list_item.children && <ChildrenBlocks block={block.bulleted_list_item.children} />}
    </List>
  );
}
