import {
  RetreiveBlockChild,
  PageDataRow,
  PageMetaData,
  QueryDatabase,
  RetrievePage,
} from '@/_lib/types/notion-response';
import { NotionBlock } from '@/_lib/types/block';
import { DatabaseQuery } from '@/_lib/types/notion-request';
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

  const response = await notionFetch<DatabaseQuery, QueryDatabase>(endpoint, 'POST', query);
  return response.results || response;
};

const POST_LIST_CACHE: { POSTS: PageDataRow[]; TIMESTAMP: number; CACHE_DURATION: number } = {
  POSTS: [],
  TIMESTAMP: 0,
  CACHE_DURATION: 1000,
};

/**
 * 페이지 하나 빌드 시 같은 API를 너무 많이 중복호출해서 간단하게 캐시 로직을 실험하려고 간단히 만들었는데,
 * 실제로 빌드 시나 ISR revalidate될 때에 캐시된 데이터가 리턴되지 않음... DEV 환경에서는 잘 리턴되는데 무슨 이슈일까
 */
export const getCachedPostList = async () => {
  const now = Date.now();
  if (POST_LIST_CACHE.POSTS.length > 0 && now - POST_LIST_CACHE.TIMESTAMP < POST_LIST_CACHE.CACHE_DURATION) {
    console.log('cache called');
    return POST_LIST_CACHE.POSTS;
  } else {
    const posts = await getPostList();
    console.log('fetch called');
    POST_LIST_CACHE.POSTS = posts;
    POST_LIST_CACHE.TIMESTAMP = now;
    return posts;
  }
};

export const getPostMetaData = async (page_id: string): Promise<PageMetaData> => {
  const endpoint = `https://api.notion.com/v1/pages/${page_id}`;
  const response = await notionFetch<undefined, PageMetaData>(endpoint, 'GET');
  return response;
};

export const getPost = async (block_id: string): Promise<NotionBlock[]> => {
  const endpoint = `https://api.notion.com/v1/blocks/${block_id}/children?`;
  const query = new URLSearchParams();
  query.set('page_size', '100');

  let results = [];
  let blocks = await notionFetch<undefined, RetreiveBlockChild>(endpoint + query);
  results = [...blocks.results];
  while (blocks.has_more) {
    query.set('start_cursor', blocks.next_cursor || '');
    blocks = await notionFetch<undefined, RetreiveBlockChild>(endpoint + query);
    results = [...results, ...blocks.results];
  }

  return results;
};

export const getSingleBlock = async <T>(block_id: string): Promise<T> => {
  const endpoint = `https://api.notion.com/v1/blocks/${block_id}`;
  const result = await notionFetch<undefined, T>(endpoint);
  return result;
};
