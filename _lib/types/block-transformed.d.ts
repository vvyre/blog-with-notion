import { COLORS } from '@/_lib/styles/colors.css';
import type { NotionBlock, RichText, TextProperty } from './block';
import type {
  BlockObjectResponse,
  BookmarkBlockObjectResponse,
  CalloutBlockObjectResponse,
  ImageBlockObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { Metadata } from 'unfurl.js/dist/types';
import { BookmarkMeta } from '@/utils/get-bookmark-metadata';
import { BlockObjectResponseMap } from './block-object-response-map';

interface Image_File {
  caption: RichText[];
  type: 'file' | 'external';
  file?: {
    url: string;
    expiry_time: string;
  };
}
interface Image_External {
  caption: RichText[];
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

export interface TextResponse {
  block: {
    type: 'text';
    text: TextProperty;
    annotations: Annotations;
    plain_text: string;
    href: string | null;
  } & NotionBlock;
}

export type GroupedBulletedListItemResponse = {
  grouped_bulleted_list_item: {
    children: BlockObjectResponseMap['bulleted_list_item'][];
  };
};

export type GroupedNumberedListItemResponse = {
  grouped_numbered_list_item: {
    children: BlockObjectResponseMap['numbered_list_item'][];
  };
};
export type ExtendedBookmarkObjectResponse = BookmarkBlockObjectResponse & {
  bookmarkInfo: BookmarkMeta;
};
