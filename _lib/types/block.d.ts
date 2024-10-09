import type { BlockObjectResponseMap, BlockType } from './block-object-response-map';

export type NotionBlock =
  | Exclude<BlockObjectResponse, ImageBlockObjectResponse | BookmarkBlockObjectResponse | EquationBlockObjectResponse>
  | ExtendedImageBlockObjectResponse
  | BookmarkBlockObjectResponse;

type ExtendedRichText<T> = {
  [K in keyof T]: T[K] extends RichTextItemResponse ? RichText : T[K] extends object ? ExtendedRichText<T[K]> : T[K];
};

export type NotionComponentProps<T extends BlockType> = {
  block: BlockObjectResponseMap[T];
};

export type WithChildren<T extends BlockObjectResponse> = T & {
  has_children: true;
} & {
  [K in T['type']]: T[K] & { children: BlockObjectResponse[] };
};

interface Tag {
  id: 'string';
  name: 'string';
  color: keyof typeof COLORS;
}
