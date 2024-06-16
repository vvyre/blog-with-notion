import { useId } from 'react';
import { List } from '../../list/list';
import { NumberedListItem } from './numbered-list-item';
import { Spacing } from '../../layout/spacing/spacing';
import type { NotionComponentPropsWithChildren } from '@/_lib/types/component-common';
import { NumberedListItemBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { BASE } from './numbered-list-item.css';

export function NumberedListWrapper({ block }: NotionComponentPropsWithChildren<'grouped_numbered_list_item'>) {
  const id = useId();
  return (
    <>
      <List as="ol" styleVariant={BASE}>
        {block.grouped_numbered_list_item.map((item: NumberedListItemBlockObjectResponse) => (
          <NumberedListItem key={id} block={item} />
        ))}
      </List>
      <Spacing size="1rem" />
    </>
  );
}
