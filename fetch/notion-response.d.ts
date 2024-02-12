import { NotionBlock, RichText } from '../_lib/types/block';

export interface QueryDatabase {
  object: string;
  results: PageDataRow[];
  next_cursor: Object | null;
  has_more: boolean;
  type: string;
  request_id: string;
}
export interface PageDataRow {
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
  title: { title: [{ rich_text: RichText; plain_text: string }] };
  summary: { rich_text: RichText };
  published: {};
  thumbnail: { thumbnail: [] };
  date: {};
};
export type RetrievePage = PageMetaData[];

export interface PageMetaData {
  object: 'page';
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: Object;
  last_edited_by: Object;
  cover: null;
  icon: null;
  parent: {
    type: string;
    database_id: string;
  };
  archived: false;
  properties: PageProperties;
  url: string;
  public_url: string | null;
  request_id: string;
}

export interface RetreiveBlockChild {
  object: 'list';
  results: NotionBlock[];
  next_cursor: string | null;
  has_more: boolean;
  type: 'block';
  block: Object;
}
export interface DatabaseColumn {
  date: { date: {} };
  title: { title: [{ rich_text: RichText; plain_text: string }] };
  summary: { rich_text: RichText };
  published: {};
  thumbnail: { thumbnail: [] };
  tags: { tags: [] };
}
