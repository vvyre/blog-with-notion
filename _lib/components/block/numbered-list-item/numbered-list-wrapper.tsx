import { useId } from 'react';
import { List } from '../../list/list';
import { NumberedListItem } from './numbered-list-item';
import { Spacing } from '../../layout/spacing/spacing';
import { NotionComponentPropsWithChildren } from '@/_lib/types/component-common';
import { NumberedListItemBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';

export function NumberedListWrapper({ block }: NotionComponentPropsWithChildren<'numbered_list_items'>) {
  const id = useId();
  return (
    <>
      <List as="ol">
        {block.numbered_list_items.map((item: NumberedListItemBlockObjectResponse) => (
          <NumberedListItem key={id} block={item} />
        ))}
      </List>
      <Spacing size="1rem" />
    </>
  );
}
