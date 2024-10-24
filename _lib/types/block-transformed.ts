import type {
  BlockObjectResponse,
  BookmarkBlockObjectResponse,
  CalloutBlockObjectResponse,
  ImageBlockObjectResponse,
  RichTextItemResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { BookmarkMeta } from '@/utils/get-bookmark-metadata';
import { BlockObjectResponseMap } from './block-object-response-map';

export interface Image_File {
  caption: RichTextItemResponse[];
  type: 'file' | 'external';
  file?: {
    url: string;
    expiry_time: string;
  };
}
export interface Image_External {
  caption: RichTextItemResponse[];
  type: 'file' | 'external';
  external?: {
    url: string;
    expiry_time: string;
  };
}
export type ExtendedImageBlockObjectResponse = {
  blurDataURL?: string;
} & ImageBlockObjectResponse;

export type ExtendedCalloutBlockObjectResponse = CalloutBlockObjectResponse;

export type ExtendedTextResponse = RichTextItemResponse & BlockObjectResponse;

export type GroupedBulletedListItemResponse = BlockObjectResponse & {
  grouped_bulleted_list_item: {
    children: BlockObjectResponseMap['bulleted_list_item'][];
  };
};

export type GroupedNumberedListItemResponse = BlockObjectResponse & {
  grouped_numbered_list_item: {
    children: BlockObjectResponseMap['numbered_list_item'][];
  };
};
export type ExtendedBookmarkObjectResponse = BookmarkBlockObjectResponse & {
  bookmarkInfo: BookmarkMeta;
};
