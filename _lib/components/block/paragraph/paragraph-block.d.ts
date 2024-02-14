import type { NotionBlock, RichText } from '../../../types/block';

export interface Paragraph extends NotionPolymorphicComponentProps<'paragraph'> {
  block: {
    type: 'paragraph';
    paragraph: {
      rich_text: RichText[];
      color: 'default';
      children: Partial<NotionBlock[]>;
    };
  };
}
