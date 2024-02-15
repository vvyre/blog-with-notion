import { COLORS } from '@/_lib/styles/colors.css';
import { NotionBlock, RichText } from '@/_lib/types/block';

export interface NumberedListWrapper extends NotionPolymorphicComponentProps<'numbered_list_items'> {
  block: {
    type: string;
    id: string;
    numbered_list_items: NumberedListItem[];
  };
}
