import type { NotionComponentProps } from '@/_lib/types/components/component-common';
import type { BulletedListItem } from '@/_lib/types/components/component-props';
import type { RichText } from '@/_lib/types/block';
import { useId } from 'react';
import { ChildrenBlocks } from '../children-blocks';
import { List } from '../../list/list';
import { Txt } from '../../typography/txt/txt';
import { BASE, DEPTH_1 } from './bulleted-list-item.css';

export function BulletedListItem({ block }: NotionComponentProps<BulletedListItem>) {
  const id = useId();
  return (
    <List as="li" styleVariant={`${BASE} ${DEPTH_1}`}>
      {block.bulleted_list_item.rich_text.map((txt: RichText) => (
        <Txt key={id} as="span" richText={txt} />
      ))}
      {block.bulleted_list_item.children && <ChildrenBlocks block={block} />}
    </List>
  );
}
