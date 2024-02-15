import type { NumberedListItem } from './numbered-list-item-block';
import type { RichText } from '@/_lib/types/block';
import { useId } from 'react';
import { ChildrenBlocks } from '../children-blocks';
import { List } from '../../list/list';
import { Txt } from '../../typography/txt/txt';
import { BASE, DEPTH_1 } from './numbered-list-item.css';

export function NumberedListItem({ block }: NumberedListItem) {
  const id = useId();
  return (
    <List as="li" styleVariant={`${BASE} ${DEPTH_1}`}>
      {block.numbered_list_item.rich_text.map((txt: RichText) => (
        <Txt key={id} as="span" richText={txt} />
      ))}
      {block.numbered_list_item.children && <ChildrenBlocks block={block.numbered_list_item.children} />}
    </List>
  );
}
