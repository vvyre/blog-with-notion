import { useId } from 'react';
import { List } from '../../list/list';
import { BulletedListItem } from './bulleted-list-item';
import { Spacing } from '../../layout/spacing/spacing';
import { NotionComponentPropsWithChildren } from '@/_lib/types/component-common';
import { BulletedListItemBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';

export function BulletedListWrapper({ block }: NotionComponentPropsWithChildren<'bulleted_list_items'>) {
  const id = useId();
  return (
    <>
      <List as="ul">
        {block.bulleted_list_items.map((item: BulletedListItemBlockObjectResponse) => (
          <BulletedListItem key={id} block={item} />
        ))}
      </List>
      <Spacing size="1rem" />
    </>
  );
}
