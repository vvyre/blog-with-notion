import {
  BlockObjectResponse,
  BookmarkBlockObjectResponse,
  BreadcrumbBlockObjectResponse,
  BulletedListItemBlockObjectResponse,
  CalloutBlockObjectResponse,
  ChildDatabaseBlockObjectResponse,
  ChildPageBlockObjectResponse,
  CodeBlockObjectResponse,
  ColumnBlockObjectResponse,
  ColumnListBlockObjectResponse,
  DividerBlockObjectResponse,
  EmbedBlockObjectResponse,
  EquationBlockObjectResponse,
  FileBlockObjectResponse,
  Heading1BlockObjectResponse,
  Heading2BlockObjectResponse,
  Heading3BlockObjectResponse,
  ImageBlockObjectResponse,
  LinkPreviewBlockObjectResponse,
  LinkToPageBlockObjectResponse,
  MentionRichTextItemResponse,
  NumberedListItemBlockObjectResponse,
  ParagraphBlockObjectResponse,
  PdfBlockObjectResponse,
  QuoteBlockObjectResponse,
  RichTextItemResponse,
  SyncedBlockBlockObjectResponse,
  TableBlockObjectResponse,
  TableOfContentsBlockObjectResponse,
  TableRowBlockObjectResponse,
  TemplateBlockObjectResponse,
  ToDoBlockObjectResponse,
  ToggleBlockObjectResponse,
  UnsupportedBlockObjectResponse,
  VideoBlockObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { COLORS } from '../styles/colors.css';
import {
  Bookmark,
  BreadCrumb,
  BulletedListItem,
  BulletedListWrapper,
  BulletedListWrapperResponse,
  Callout,
  ChildDatabase,
  ChildPage,
  CodeBlock,
  Column,
  ColumnList,
  ExtendedCalloutBlockObjectResponse,
  ExtendedImageBlockObjectResponse,
  Mention,
  NotionImageResponse,
  NumberedListItem,
  NumberedListWrapper,
  NumberedListWrapperResponse,
  Paragraph,
  Quote,
  SyncedBlock,
  Table,
  TableOfContents,
  TableRow,
  Text,
} from './component-props';

export type BlockTypes =
  | 'audio'
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

export type BlockObjectResponseMap = {
  bookmark: BookmarkBlockObjectResponse;
  breadcrumb: BreadcrumbBlockObjectResponse;
  bulleted_list_item: BulletedListItemBlockObjectResponse;
  bulleted_list_items: BulletedListWrapperResponse;
  callout: ExtendedCalloutBlockObjectResponse;
  code: CodeBlockObjectResponse;
  child_database: ChildDatabaseBlockObjectResponse;
  child_page: ChildPageBlockObjectResponse;
  column: ColumnBlockObjectResponse;
  column_list: ColumnListBlockObjectResponse;
  divider: DividerBlockObjectResponse;
  embed: EmbedBlockObjectResponse;
  equation: EquationBlockObjectResponse;
  file: FileBlockObjectResponse;
  heading_1: Heading1BlockObjectResponse;
  heading_2: Heading2BlockObjectResponse;
  heading_3: Heading3BlockObjectResponse;
  image: ExtendedImageBlockObjectResponse;
  link_preview: LinkPreviewBlockObjectResponse;
  link_to_page: LinkToPageBlockObjectResponse;
  mention: MentionRichTextItemResponse;
  numbered_list_item: NumberedListItemBlockObjectResponse;
  numbered_list_items: NumberedListWrapperResponse;
  paragraph: ParagraphBlockObjectResponse;
  pdf: PdfBlockObjectResponse;
  quote: QuoteBlockObjectResponse;
  synced_block: SyncedBlockBlockObjectResponse;
  table: TableBlockObjectResponse;
  table_of_contents: TableOfContentsBlockObjectResponse;
  table_row: TableRowBlockObjectResponse;
  template: TemplateBlockObjectResponse;
  text: TextBlock;
  to_do: ToDoBlockObjectResponse;
  toggle: ToggleBlockObjectResponse;
  unsupported: UnsupportedBlockObjectResponse;
  video: VideoBlockObjectResponse;
};

export type NotionComponentTypesWithChildren<T extends BlockTypes> = BlockObjectResponseMap[T] & {
  children: NotionPolymorphicComponentTypes[];
};

export type NotionPolymorphicComponentTypes<T extends BlockTypes> = BlockObjectResponseMap[T];

export type NotionPolymorphicComponentTypesWithChildren<T extends BlockTypes> = BlockObjectResponseMap[T] & {
  children: NotionPolymorphicComponentTypes[];
};

export type NotionBlock = BlockObjectResponse;

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
