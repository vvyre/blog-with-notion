import { useId } from 'react';
import { List } from '../../list/list';
import { NumberedListItem } from './numbered-list-item';
import { Spacing } from '../../layout/spacing/spacing';
import { NumberedListWrapperResponse } from '@/_lib/types/components/component-props';

export function NumberedListWrapper({ block }: NumberedListWrapperResponse) {
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
