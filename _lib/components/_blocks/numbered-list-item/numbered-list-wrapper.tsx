import { List } from '../../list/list';
import { NumberedListItem } from './numbered-list-item';
import type { NotionComponentProps } from '@/_lib/types/block';
import { NumberedListItemBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { BASE } from './numbered-list-item.css';

export function NumberedListWrapper({ block }: NotionComponentProps<'grouped_numbered_list_item'>) {
  return (
    <List as="ol" styleVariant={BASE}>
      {block.grouped_numbered_list_item.children.map((item, idx: number) => (
        <NumberedListItem key={idx} block={item} />
      ))}
    </List>
  );
}
