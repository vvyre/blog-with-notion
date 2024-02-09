export type BlockTypes =
  | 'bookmark'
  | 'breadcrumb'
  | 'bulleted_list_item'
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
  object: string;
  id: string;
  parent: Parent;
  created_time: string;
  last_edited_time: string;
  created_by: User;
  last_edited_by: User;
  has_children: boolean;
  archived: boolean;
  type: T;
  [P in T]: TextElement;
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
  color: string;
}
