import { COLORS } from '@/_lib/styles/colors.css';
import { NotionBlock, RichText, TextProperty } from '../block';

export interface NotionImage extends NotionBlock<'image'> {
  type: 'image';
  image: {
    caption: RichText[];
    type: 'file';
    file: {
      url: string;
      expiry_time: string;
    };
  };
  blurDataURL?: string;
}

export interface Text extends NotionBlock<'text'> {
  type: 'text';
  text: TextProperty;
  annotations: Annotations;
  plain_text: string;
  href: string | null;
}

export interface Paragraph extends NotionBlock<'paragraph'> {
  type: 'paragraph';
  paragraph: {
    rich_text: RichText[];
    color: keyof typeof COLORS;
    children: Partial<NotionBlock[]>;
  };
}

export interface NumberedListItem extends NotionBlock<'numbered_list_item'> {
  type: 'numbered_list_item';
  numbered_list_item: {
    rich_text: RichText[];
    color: keyof typeof COLORS;
    children: Partial<NotionBlock[]>;
  };
}

export interface NumberedListWrapper extends NotionBlock<'numbered_list_items'> {
  type: 'numbered_list_items';
  id: string;
  numbered_list_items: NumberedListItem[];
}

export interface Mention extends NotionBlock<'mention'> {
  type: 'mention';
  mention: NotionBlock;
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: keyof typeof COLORS;
  };
  plain_text: string;
  href: string;
}

export interface ColumnList extends NotionBlock<'column_list'> {
  type: 'column_list';
  column_list: {};
}

export interface Column extends NotionBlock<'column'> {
  type: 'column';
  column: {};
}

export interface CodeBlock extends NotionBlock<'code'> {
  type: 'code';
  code: {
    caption: RichText[];
    rich_text: RichText[];
    language: string;
  };
}

export interface ChildPage extends NotionBlock<'child_page'> {
  type: 'child_page';
  child_page: {
    title: string;
  };
}

export interface ChildDatabase extends NotionBlock<'child_database'> {
  child_database: {
    title: string;
  };
}

export interface Callout extends NotionBlock<'callout'> {
  type: 'callout';
  callout: {
    rich_text: RichText[];
    color: 'default';
  };
}

export interface BulletedListItem extends NotionBlock<'bulleted_list_item'> {
  type: 'bulleted_list_item';
  bulleted_list_item: {
    rich_text: RichText[];
    color: keyof typeof COLORS;
    children: Partial<NotionBlock[]>;
  };
}

export interface BulletedListWrapper extends NotionBlock<'bulleted_list_items'> {
  type: 'bulleted_list_items';
  bulleted_list_items: BulletedListItem[];
}

export interface BreadCrumb extends NotionBlock<'breadcrumb'> {
  type: 'breadcrumb';
  breadcrumb: {};
}

export interface Bookmark extends NotionBlock<'bookmark'> {
  type: 'bookmark';
  bookmark: {
    caption: RichText[];
    url: string;
  };
}

export interface Quote extends NotionBlock<'quote'> {
  type: 'quote';
  quote: {
    rich_text: RichText[];
    color: keyof typeof COLORS;
    children?: NotionBlock[];
  };
}

export interface Table extends NotionBlock<'table'> {
  type: 'table';
  table: {
    table_width: number;
    has_column_header: boolean;
    has_row_header: boolean;
  };
}

export interface TableRow extends NotionBlock<'table_row'> {
  type: 'table_row';
  table_row: {
    cells: NotionBlock[];
  };
}

export interface TableOfContents extends NotionBlock<'table_of_contents'> {
  type: 'table_of_contents';
  table_of_contents: {
    color: keyof typeof COLORS;
  };
}

export interface Heading_1 extends NotionBlock<'heading_1'> {
  type: 'heading_1';
  heading_1: {
    rich_text: RichText[];
    color: 'default';
  };
}

export interface NotionDivider extends NotionBlock('divider') {}

export interface Heading_2 extends NotionBlock<'heading_2'> {
  type: 'heading_2';
  heading_2: {
    rich_text: RichText[];
    color: 'default';
  };
}

export interface Heading_3 extends NotionBlock<'heading_3'> {
  type: 'heading_3';
  heading_3: {
    rich_text: RichText[];
    color: 'default';
  };
}

export interface FileBlock extends NotionBlock<'file'> {
  block: NotionBlock<'file'>['block'] & InternalFile & ExternalFile;
}

export interface InternalFile {
  type: 'file';
  file: {
    url: string;
    expiry_time: string;
  };
}

export interface ExternalFile {
  type: 'external';
  external: {
    url: 'https://website.domain/images/image.png';
  };
}

/**
 * 블록 자체에 type이라는 key가 없어서 이 블록 처리하는 컴포넌트를 따로 구현해야 함.
 * duplicated_synced_block의 경우 api call을 통해 원본 페이지에서 따로 불러온 후 이 synced block에 합쳐야 함.
 * 이때 원본 페이지가 integration에 포함되어있지 않으면 권한 문제로 안 불러와질 수도 있음..
 */
export interface SyncedBlock extends NotionBlock('synced_block') {
  type: 'synced_block';
  synced_block: {
    synced_from: string | null;
    children: NotionBlock[];
    /**
     * {

        callout: {
          rich_text: [
            {
              type: 'text';
              text: {
                content: 'Callout in synced block';
              };
            }
          ];
        };
      }
     */
  };
}
