import { useId } from 'react';
import { List } from '../../list/list';
import { BulletedListItem } from './bulleted-list-item';
import { BulletedListWrapper } from './bulleted-list-wrapper-block';
import { Spacing } from '../../layout/spacing/spacing';

export function BulletedListWrapper({ block }: BulletedListWrapper) {
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
