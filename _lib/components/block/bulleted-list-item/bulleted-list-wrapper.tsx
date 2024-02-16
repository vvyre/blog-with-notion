import { useId } from 'react';
import { List } from '../../list/list';
import { BulletedListItem } from './bulleted-list-item';
import { Spacing } from '../../layout/spacing/spacing';
import { BulletedListWrapperResponse } from '@/_lib/types/components/component-props';

export function BulletedListWrapper({ block }: BulletedListWrapperResponse) {
  const id = useId();
  return (
    <>
      <List as="ul">
        {block.bulleted_list_items.map(item => (
          <BulletedListItem key={id} block={item} />
        ))}
      </List>
      <Spacing size="1rem" />
    </>
  );
}
