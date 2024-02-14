import { COLORS } from '@/_lib/styles/colors.css';
import { NotionBlock, RichText } from '@/_lib/types/block';

export interface BulletedListItem extends NotionPolymorphicComponentProps<'bulleted_list_item'> {
  block: {
    type: 'bulleted_list_item';
    bulleted_list_item: {
      rich_text: RichText[];
      color: keyof typeof COLORS;
      children: Partial<NotionBlock[]>;
    };
  };
}
