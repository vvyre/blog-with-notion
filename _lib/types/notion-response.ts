import type {
  GetPageResponse,
  PageObjectResponse,
  TextRichTextItemResponse,
} from '@notionhq/client/build/src/api-endpoints';
import type { Tag } from './block';

export interface QueryDatabase {
  object: string;
  results: unknown;
  next_cursor: Object | null;
  has_more: boolean;
  type: string;
  request_id: string;
}
export interface PageFullData {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: Object;
  last_edited_by: Object;
  cover: Object | null;
  icon: Object | null;
  parent: Object;
  archived: boolean;
  properties: PageProperties;
  url: string;
  public_url: string | null;
}

type RichText = {
  rich_text: {
    type: string;
    text: { content: string; link: string | null; type: string };
    plain_text: string;
    annotations: Annotations;
    href: string | null;
  };
  plain_text: string;
};

type Annotations = {
  bold: false;
  italic: false;
  strikethrough: false;
  underline: false;
  code: false;
  color: string;
};

export type PageProperties = {
  date: { date: { start: string | null; end: string | null; time_zone: string | null } };
  title: {
    title: TextRichTextItemResponse[];
  };
  summary: { rich_text: RichText[] };
  slug: { rich_text: RichText[] };
  published: {};
  thumbnail: { thumbnail: [] };
  tags: { multi_select: Tag[] };
  ID: {
    id: 'string';
    type: 'unique_id';
    unique_id: { prefix: string | null; number: number };
  };
};

export type RetrievePages = PageMetaDataResponse[];

export type PageMetaDataResponse = {
  meta: PageObjectResponse;
};

export type PageObject = {
  properties: PageProperties;
  last_edited_time: string;
} & GetPageResponse;

export type PostListObject = PageObject[];

export type ExtendedPostListObject = Partial<PostListObject & { properties: PageProperties }>[];
