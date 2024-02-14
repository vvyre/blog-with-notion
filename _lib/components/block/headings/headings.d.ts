import type { NotionBlock, RichText } from '../../../types/block';

export interface Heading_1 extends NotionBlock<'heading_1'> {
  block: {
    type: 'heading_1';
    heading_1: {
      rich_text: RichText[];
      color: 'default';
    };
  };
}

export interface Heading_2 extends NotionBlock<'heading_2'> {
  block: {
    type: 'heading_2';
    heading_2: {
      rich_text: RichText[];
      color: 'default';
    };
  };
}

export interface Heading_3 extends NotionBlock<'heading_3'> {
  block: {
    type: 'heading_3';
    heading_3: {
      rich_text: RichText[];
      color: 'default';
    };
  };
}
