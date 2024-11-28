import { BlockObjectResponse, RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';
import type { BlockObjectResponseMap, EntireNotionBlockResponse } from './block-object-response-map';
import { blockComponentMap } from '../components/_blocks/block-component-map';
import { vars } from '../styles/themes.css';

/** 타입 가드  */
export function isBlockType(type: string): type is keyof typeof blockComponentMap {
  return type in blockComponentMap;
}

export type NotionBlock = BlockObjectResponseMap[keyof BlockObjectResponseMap];

export type ExtendedRichText<T> = {
  [K in keyof T]: T[K] extends RichTextItemResponse
    ? RichTextItemResponse
    : T[K] extends object
    ? ExtendedRichText<T[K]>
    : T[K];
};

export type NotionComponentProps<T extends keyof BlockObjectResponseMap> = {
  block: BlockObjectResponseMap[T];
};

export type WithChildren<T extends BlockObjectResponse> = T & {
  has_children: true;
} & {
  [K in keyof T]: K extends T['type'] ? T[K] & { children: EntireNotionBlockResponse[] } : T[K];
};

export interface Tag {
  id: 'string';
  name: 'string';
  color: keyof typeof vars.notion;
}
