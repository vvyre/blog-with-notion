import { useId } from 'react';
import { List } from '../../list/list';
import { NumberedListItem } from './numbered-list-item';
import { NumberedListWrapper } from './numbered-list-wrapper-block';
import { Spacing } from '../../layout/spacing/spacing';

export function NumberedListWrapper({ block }: NumberedListWrapper) {
  const id = useId();
  return (
    <>
      <List as="ol">
        {block.numbered_list_items.map(item => (
          <NumberedListItem key={id} block={item} />
        ))}
      </List>
      <Spacing size="1rem" />
    </>
  );
}
