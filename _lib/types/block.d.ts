import { COLORS } from '../styles/colors.css';
import {
  Bookmark,
  BreadCrumb,
  BulletedListItem,
  BulletedListWrapper,
  Callout,
  ChildDatabase,
  ChildPage,
  CodeBlock,
  Column,
  ColumnList,
  Mention,
  NumberedListItem,
  NumberedListWrapper,
  Paragraph,
  Quote,
  SyncedBlock,
  Table,
  TableOfContents,
  TableRow,
  Text,
} from './components/component-props';

export type BlockTypes =
  | 'bookmark'
  | 'breadcrumb'
  | 'bulleted_list_item'
  | 'bulleted_list_items'
  | 'callout'
  | 'code'
  | 'child_database'
  | 'child_page'
  | 'column'
  | 'column_list'
  | 'divider'
  | 'embed'
  | 'equation'
  | 'file'
  | 'heading_1'
  | 'heading_2'
  | 'heading_3'
  | 'image'
  | 'link_preview'
  | 'link_to_page'
  | 'mention'
  | 'numbered_list_item'
  | 'numbered_list_items'
  | 'paragraph'
  | 'pdf'
  | 'quote'
  | 'synced_block'
  | 'table'
  | 'table_of_contents'
  | 'table_row'
  | 'template'
  | 'text'
  | 'to_do'
  | 'toggle'
  | 'unsupported'
  | 'video';

export interface NotionBlock {
  object?: string;
  id: string;
  parent?: Parent;
  created_time?: string;
  last_edited_time?: string;
  created_by?: User;
  last_edited_by?: User;
  has_children?: boolean;
  archived?: boolean;
}

interface Parent {
  type: string;
  page_id: string;
}

interface User {
  type: 'user';
  object: string;
  id: string;
}

interface TextElement {
  rich_text: RichText[];
  color: string;
  is_toggleable: boolean;
}

interface RichText {
  type: string;
  text: TextProperty;
  annotations: Annotations;
  plain_text: string;
  href: null | string;
}

interface WrittenDate {
  start: 'string' | null;
  end: 'string' | null;
  time_zone: 'string' | null;
}

interface TextProperty {
  type: 'text';
  content: string;
  link: null | Link;
}

interface Link {
  url: string;
}

interface Annotations {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: keyof typeof COLORS;
}

interface TextBlock {
  type: 'text';
  text: {
    content: string;
    link: Object;
  };
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

interface Tag {
  id: 'string';
  name: 'string';
  color: keyof typeof COLORS;
}
