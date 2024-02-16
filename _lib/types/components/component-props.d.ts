import { COLORS } from '@/_lib/styles/colors.css';
import { NotionBlock, RichText, TextProperty } from '../block';

export interface NotionImage extends NotionBlock<'image'> {
  image: {
    caption: RichText[];
    type: 'file';
    file: {
      url: string;
      expiry_time: string;
    };
  };
}

export interface Text extends NotionBlock<'text'> {
  text: TextProperty;
  annotations: Annotations;
  plain_text: string;
  href: string | null;
}

export interface Paragraph extends NotionBlock<'paragraph'> {
  paragraph: {
    rich_text: RichText[];
    color: keyof typeof COLORS;
    children: Partial<NotionBlock[]>;
  };
}

export interface NumberedListItem extends NotionBlock<'numbered_list_item'> {
  numbered_list_item: {
    rich_text: RichText[];
    color: keyof typeof COLORS;
    children: Partial<NotionBlock[]>;
  };
}

export interface NumberedListWrapper extends NotionBlock<'numbered_list_items'> {
  id: string;
  numbered_list_items: NumberedListItem[];
}

export interface Mention extends NotionBlock<'mention'> {
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
  column_list: {};
}

export interface Column extends NotionBlock<'column'> {
  column: {};
}

export interface CodeBlock extends NotionBlock<'code'> {
  code: {
    caption: RichText[];
    rich_text: RichText[];
    language: string;
  };
}

export interface ChildPage extends NotionBlock<'child_page'> {
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
  callout: {
    rich_text: RichText[];
    color: 'default';
  };
}

export interface BulletedListItem extends NotionBlock<'bulleted_list_item'> {
  bulleted_list_item: {
    rich_text: RichText[];
    color: keyof typeof COLORS;
    children: Partial<NotionBlock[]>;
  };
}

export interface BulletedListWrapper extends NotionBlock<'bulleted_list_items'> {
  bulleted_list_items: BulletedListItem[];
}

export interface BreadCrumb extends NotionBlock<'breadcrumb'> {
  breadcrumb: {};
}

export interface Bookmark extends NotionBlock<'bookmark'> {
  bookmark: {
    caption: RichText[];
    url: string;
  };
}

export interface Quote extends NotionBlock<'quote'> {
  quote: {
    rich_text: RichText[];
    color: keyof typeof COLORS;
    children?: NotionBlock[];
  };
}

export interface Quote extends NotionBlock<'quote'> {
  quote: {
    rich_text: RichText[];
    color: keyof typeof COLORS;
    children?: NotionBlock[];
  };
}

/**
 * 블록 자체에 type이라는 key가 없어서 이 블록 처리하는 컴포넌트를 따로 구현해야함
 * duplicated의 경우 api call을 통해 원본 페이지에서 따로 불러온 후 이 synced block에 합쳐야 함.
 * 이때 원본 페이지가 integration에 포함되어있지 않으면 권한 문제로 안 불러와질 수도 있음..
 */
export interface SyncedBlock extends NotionBlock('synced_block') {
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
