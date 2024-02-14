import type { NotionBlock, RichText } from '../../../types/block';

export interface Mention extends NotionPolymorphicComponentProps<'mention'> {
  block: {
    type: 'mention';
    mention: { type: 'link_preview'; link_preview: {} };
    annotations: {
      bold: false;
      italic: false;
      strikethrough: false;
      underline: false;
      code: false;
      color: 'default';
    };
    plain_text: string;
    href: string;
  };
}
