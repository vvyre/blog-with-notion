import { useId } from 'react';
import { List } from '../../list/list';
import { BulletedListItem } from './bulleted-list-item';
import { Spacing } from '../../layout/spacing/spacing';
import type { NotionComponentPropsWithChildren } from '@/_lib/types/component-common';
import type { BulletedListItemBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';

export function BulletedListWrapper({ block }: NotionComponentPropsWithChildren<'grouped_bulleted_list_item'>) {
  const id = useId();
  return (
    <>
      <List as="ul">
        {block.grouped_bulleted_list_item.map((item: BulletedListItemBlockObjectResponse) => (
          <BulletedListItem key={id} block={item} />
        ))}
      </List>
      <Spacing size="1rem" />
    </>
  );
}
