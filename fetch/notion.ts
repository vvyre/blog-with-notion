import {
  BlockChildRetreive,
  PageDataRow,
  QueryDatabase,
  RetrievePage,
} from '@/fetch/notion-response';
import { NotionBlock } from '@/_lib/types/block';
import { DatabaseQuery } from '@/fetch/notion-request';
import { notionFetch } from './notion-fetch';

export const getPostList = async (): Promise<PageDataRow[]> => {
  const endpoint = `https://api.notion.com/v1/databases/${process.env.NOTION_BLOG_ID}/query`;
  const query = {
    sorts: [
      {
        property: 'date',
        direction: 'descending',
      },
    ],
    filter: {
      and: [
        {
          property: 'published',
          checkbox: {
            equals: true,
          },
        },
      ],
    },
  };

  const response = await notionFetch<DatabaseQuery, QueryDatabase>(
    endpoint,
    'POST',
    query
  );
  return response.results;
};
export const getPostMetaData = async (page_id: string): Promise<RetrievePage> => {
  const endpoint = `https://api.notion.com/v1/pages/${page_id}`;
  const response = await notionFetch<undefined, RetrievePage>(endpoint, 'GET');
  return response;
};

export const getPost = async (block_id: string): Promise<NotionBlock[]> => {
  const endpoint = `https://api.notion.com/v1/blocks/${block_id}/children?`;
  const query = new URLSearchParams();
  query.set('page_size', '100');

  let results = [];
  let blocks = await notionFetch<undefined, BlockChildRetreive>(endpoint + query);
  results = [...blocks.results];
  while (blocks.has_more) {
    query.set('start_cursor', blocks.next_cursor || '');
    blocks = await notionFetch<undefined, BlockChildRetreive>(endpoint + query);
    results = [...results, ...blocks.results];
  }

  return results;
};
