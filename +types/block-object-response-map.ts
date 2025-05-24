import type {
  AudioBlockObjectResponse,
  BlockObjectResponse,
  BreadcrumbBlockObjectResponse,
  BulletedListItemBlockObjectResponse,
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
} from '@notionhq/client/build/src/api-endpoints'
import type {
  ExtendedBookmarkObjectResponse,
  ExtendedCalloutBlockObjectResponse,
  ExtendedImageBlockObjectResponse,
  ExtendedTextResponse,
  GroupedBulletedListItemResponse,
  GroupedNumberedListItemResponse,
} from './block-transformed'
import { WithChildren } from './block'
import { ComponentType, ElementType } from 'react'

type PrefixedBlockTypes = 'grouped_bulleted_list_item' | 'grouped_numbered_list_item'
export type BlockType = BlockObjectResponse['type'] | PrefixedBlockTypes
export type BlockComponentMap = {
  [T in keyof BlockObjectResponseMap]:
    | ComponentType<{ block: BlockObjectResponseMap[T] }>
    | ElementType
}
export type EntireNotionBlockResponse = {
  [K in keyof BlockObjectResponseMap]: BlockObjectResponseMap[K] & {
    type: K
  } & { id: string }
}[keyof BlockObjectResponseMap]

/**
 * children이 필요한 경우 WithChildren 제네릭을 사용하세요
 */
export type BlockObjectResponseMap = {
  audio: AudioBlockObjectResponse
  bookmark: ExtendedBookmarkObjectResponse
  breadcrumb: BreadcrumbBlockObjectResponse
  bulleted_list_item: WithChildren<BulletedListItemBlockObjectResponse>
  grouped_bulleted_list_item: WithChildren<GroupedBulletedListItemResponse>
  callout: ExtendedCalloutBlockObjectResponse
  code: CodeBlockObjectResponse
  child_database: ChildDatabaseBlockObjectResponse
  child_page: ChildPageBlockObjectResponse
  column: ColumnBlockObjectResponse
  column_list: ColumnListBlockObjectResponse
  divider: DividerBlockObjectResponse
  embed: EmbedBlockObjectResponse
  equation: EquationBlockObjectResponse
  file: FileBlockObjectResponse
  heading_1: Heading1BlockObjectResponse
  heading_2: Heading2BlockObjectResponse
  heading_3: Heading3BlockObjectResponse
  image: ExtendedImageBlockObjectResponse
  link_preview: LinkPreviewBlockObjectResponse
  link_to_page: LinkToPageBlockObjectResponse
  mention: MentionRichTextItemResponse
  numbered_list_item: WithChildren<NumberedListItemBlockObjectResponse>
  grouped_numbered_list_item: WithChildren<GroupedNumberedListItemResponse>
  paragraph: WithChildren<ParagraphBlockObjectResponse>
  pdf: PdfBlockObjectResponse
  quote: WithChildren<QuoteBlockObjectResponse>
  synced_block: SyncedBlockBlockObjectResponse
  table: WithChildren<TableBlockObjectResponse>
  table_of_contents: WithChildren<TableOfContentsBlockObjectResponse>
  table_row: TableRowBlockObjectResponse
  template: TemplateBlockObjectResponse
  text: WithChildren<ExtendedTextResponse>
  to_do: ToDoBlockObjectResponse
  toggle: WithChildren<ToggleBlockObjectResponse>
  unsupported: UnsupportedBlockObjectResponse
  video: VideoBlockObjectResponse
}
