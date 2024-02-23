import type {
  DatabaseObjectResponse,
  GetPageResponse,
  PageObjectResponse,
  PartialDatabaseObjectResponse,
  PartialPageObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';
import type { NotionBlock, RichText, Tag, TextElement, WrittenDate } from './block';

export interface QueryDatabase {
  object: string;
  results: PageDataRow[];
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
export type PageProperties = {
  date: { date: WrittenDate };
  title: { title: [{ rich_text: RichText; plain_text: string }] };
  summary: { rich_text: RichText[] };
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
} & GetPageResponse;

export type PostListObject = GetPageResponse[];

export type ExtendedPostListObject = Partial<PostListObject & { properties: PageProperties }>[];
