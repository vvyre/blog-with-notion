import { useId } from 'react';
import { List } from '../../list/list';
import { NumberedListItem } from './numbered-list-item';
import { NumberedListWrapper } from './numbered-list-wrapper-block';

export function NumberedListWrapper({ block }: NumberedListWrapper) {
  const id = useId();
  return (
    <List as="ol">
      {block.numbered_list_item.map(item => (
        <NumberedListItem key={id} block={item} />
      ))}
    </List>
  );
}
