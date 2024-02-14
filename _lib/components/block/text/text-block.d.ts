import type { Annotations, NotionBlock, RichText } from '../../../types/block';

export interface Text extends NotionPolymorphicComponentProps<'text'> {
  block: {
    type: 'text';
    text: { content: string; link: string | null };
    annotations: Annotations;
    plain_text: string;
    href: string | null;
  };
}
