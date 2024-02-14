import { COLORS } from '../styles/colors.css';

export type BlockTypes =
  | 'bookmark'
  | 'breadcrumb'
  | 'bulleted_list_item'
  | 'bulleted_list_items'
  | 'callout'
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
  | 'to_do'
  | 'toggle'
  | 'unsupported'
  | 'video';

export type NotionBlock<T = BlockTypes> = {
  object?: string;
  id?: string;
  parent?: Parent;
  created_time?: string;
  last_edited_time?: string;
  created_by?: User;
  last_edited_by?: User;
  has_children?: boolean;
  archived?: boolean;
  type: T;
  bookmark?: any;
  breadcrumb?: any;
  bulleted_list_item?: any;
  bulleted_list_items?: any;
  callout?: any;
  child_database?: any;
  child_page?: any;
  column?: any;
  column_list?: any;
  divider?: any;
  embed?: any;
  equation?: any;
  file?: any;
  heading_1?: any;
  heading_2?: any;
  heading_3?: any;
  image?: any;
  link_preview?: any;
  link_to_page?: any;
  numbered_list_item?: any;
  numbered_list_items?: any;
  paragraph?: any;
  pdf?: any;
  quote?: any;
  synced_block?: any;
  table?: any;
  table_of_contents?: any;
  table_row?: any;
  template?: any;
  to_do?: any;
  toggle?: any;
  unsupported?: any;
  video?: any;
};

interface Parent {
  type: string;
  page_id: string;
}

interface User {
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
  text: Text;
  annotations: Annotations;
  plain_text: string;
  href: null | string;
}

interface WrittenDate {
  start: 'string' | null;
  end: 'string' | null;
  time_zone: 'string' | null;
}

interface Text {
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
