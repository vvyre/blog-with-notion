import { List } from '../../list/list';
import { BulletedListItem } from './bulleted-list-item';
import { Spacing } from '../../layout/spacing/spacing';
import type { NotionComponentPropsWithChildren } from '@/_lib/types/component-common';
import type { BulletedListItemBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { BASE } from './bulleted-list-item.css';

export function BulletedListWrapper({ block }: NotionComponentPropsWithChildren<'grouped_bulleted_list_item'>) {
  return (
    <>
      <List as="ul" styleVariant={BASE}>
        {block.grouped_bulleted_list_item.map((item: BulletedListItemBlockObjectResponse, idx: number) => (
          <BulletedListItem key={idx} block={item} />
        ))}
      </List>
      <Spacing size="1rem" />
    </>
  );
}
