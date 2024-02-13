import type { NotionBlock } from '../../../types/block';

export interface Heading_1 extends NotionBlock<'heading_1'> {
  block: {
    type: 'heading_1';
    heading_1: {
      rich_text: [
        {
          type: 'mention';
          mention: {
            type: 'date';
            date: {
              start: '2023-03-01';
              end: null;
              time_zone: null;
            };
          };
          annotations: {
            bold: false;
            italic: false;
            strikethrough: false;
            underline: false;
            code: false;
            color: 'default';
          };
          plain_text: '2023-03-01';
          href: null;
        },
        {
          type: 'text';
          text: {
            content: ' ';
            link: null;
          };
          annotations: {
            bold: false;
            italic: false;
            strikethrough: false;
            underline: false;
            code: false;
            color: 'default';
          };
          plain_text: ' ';
          href: null;
        }
      ];
      color: 'default';
    };
  };
}
