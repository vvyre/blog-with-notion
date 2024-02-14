import { COLORS } from '@/_lib/styles/colors.css';
import { NotionBlock, RichText } from '@/_lib/types/block';

export interface NumberedListItem extends NotionPolymorphicComponentProps<'numbered_list_item'> {
  block: {
    type: 'numbered_list_item';
    numbered_list_item: {
      rich_text: RichText[];
      color: keyof typeof COLORS;
      children: Partial<NotionBlock[]>;
    };
  };
}
