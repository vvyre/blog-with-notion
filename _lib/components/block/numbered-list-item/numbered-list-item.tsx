import { useId } from 'react';
import { ChildrenBlocks } from '../children-blocks';
import { List } from '../../list/list';
import { Txt } from '../../typography/txt/txt';
import { BASE, DEPTH_1 } from './numbered-list-item.css';
import type { NotionComponentPropsWithChildren } from '@/_lib/types/component-common';
import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';
import { Flex } from '../../layout/flex/flex';

export function NumberedListItem({ block }: NotionComponentPropsWithChildren<'numbered_list_item'>) {
  const id = useId();
  return (
    <List as="li" styleVariant={`${BASE} ${DEPTH_1}`}>
      <Flex flexDirection="column" justifyContents="flexStart" alignItems="flexStart">
        {block.numbered_list_item.rich_text.map((txt: RichTextItemResponse) => (
          <Txt key={id} as="span" richText={txt} />
        ))}
        {block.numbered_list_item.children && <ChildrenBlocks block={block} />}
      </Flex>
    </List>
  );
}
