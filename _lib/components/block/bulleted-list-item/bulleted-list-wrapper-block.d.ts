import { COLORS } from '@/_lib/styles/colors.css';
import { NotionBlock, RichText } from '@/_lib/types/block';

export interface BulletedListWrapper extends NotionPolymorphicComponentProps<'bulleted_list_items'> {
  block: {
    type: string;
    id: string;
    bulleted_list_item: BulletedListItem[];
  };
}
