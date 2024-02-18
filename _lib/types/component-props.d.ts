import { COLORS } from '@/_lib/styles/colors.css';
import { NotionBlock, RichText, TextProperty } from './block';
import { CalloutBlockObjectResponse, ImageBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';

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

export interface NumberedListWrapperResponse {
  block: {
    type: 'numbered_list_items';
    id: string;
    numbered_list_items: NumberedListItem[];
  } & NotionBlock;
}

export interface BulletedListWrapperResponse {
  block: {
    type: 'bulleted_list_items';
    bulleted_list_items: BulletedListItem[];
  } & NotionBlock;
}

export interface BookmarkResponse {
  block: {
    type: 'bookmark';
    bookmark: {
      caption: RichText[];
      url: string;
    };
  } & NotionBlock;
}
