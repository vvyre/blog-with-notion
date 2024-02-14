import { useId } from 'react';
import { List } from '../../list/list';
import { BulletedListItem } from './bulleted-list-item';
import { BulletedListWrapper } from './bulleted-list-wrapper-block';

export function BulletedListWrapper({ block }: BulletedListWrapper) {
  const id = useId();
  return (
    <List as="ul">
      {block.bulleted_list_item.map(item => (
        <BulletedListItem key={id} block={item} />
      ))}
    </List>
  );
}
