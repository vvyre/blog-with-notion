import type {
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
import type {
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
  ExtendedBookmarkObjectResponse,
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

type PrefixedBlockTypes = 'grouped_bulleted_list_item' | 'grouped_numbered_list_item';
export type BlockTypes = BlockObjectResponse['type'] | PrefixedBlockTypes;

export type BlockObjectResponseMap = {
  bookmark: ExtendedBookmarkObjectResponse;
  breadcrumb: BreadcrumbBlockObjectResponse;
  bulleted_list_item: BulletedListItemBlockObjectResponse;
  grouped_bulleted_list_item: BulletedListWrapperResponse;
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
  grouped_numbered_list_item: NumberedListWrapperResponse;
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

export type NotionBlock =
  | Exclude<BlockObjectResponse, ImageBlockObjectResponse | BookmarkBlockObjectResponse | EquationBlockObjectResponse>
  | ExtendedImageBlockObjectResponse
  | BookmarkBlockObjectResponse;

type ExtendedRichText<T> = {
  [K in keyof T]: T[K] extends RichTextItemResponse ? RichText : T[K] extends object ? ExtendedRichText<T[K]> : T[K];
};

export type ExtendedNotionBlock<T> = ExtendedRichText<T> & WithChildren;

export type WithChildren = {
  children: NotionBlockWithChildren;
};

export type NotionBlockWithChildren = ExtendedNotionBlock<NotionBlock>;

export type NotionComponentTypesWithChildren<T extends BlockTypes> = BlockObjectResponseMap[T] & {
  children: NotionPolymorphicComponentTypes[];
};

export type NotionPolymorphicComponentTypes<T extends BlockTypes> = BlockObjectResponseMap[T];

export type NotionPolymorphicComponentTypesWithChildren<T extends BlockTypes> = BlockObjectResponseMap[T] & {
  children: NotionPolymorphicComponentTypes[];
};
interface Tag {
  id: 'string';
  name: 'string';
  color: keyof typeof COLORS;
}
