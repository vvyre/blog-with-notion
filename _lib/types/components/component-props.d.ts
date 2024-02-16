import { COLORS } from '@/_lib/styles/colors.css';
import { NotionBlock, TextProperty } from '../block';

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
  column_list: {};
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
  type: 'bulleted_list_item';
  bulleted_list_item: {
    rich_text: RichText[];
    color: keyof typeof COLORS;
    children: Partial<NotionBlock[]>;
  };
}

export interface BulletedListWrapper extends NotionBlock<'bulleted_list_items'> {
  type: string;
  id: string;
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
    url: 'string';
  };
}
