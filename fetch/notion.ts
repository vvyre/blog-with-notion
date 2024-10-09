import { notion } from './notion-client';
import {
  BlockObjectResponse,
  GetBlockResponse,
  PartialBlockObjectResponse,
  QueryDatabaseParameters,
} from '@notionhq/client/build/src/api-endpoints';
import { PageObject, PostListObject } from '@/_lib/types/notion-response';

export const getPostList = async (database_id: string): Promise<PostListObject> => {
  const query: QueryDatabaseParameters = {
    database_id,
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

  const response = await notion.databases.query(query);
  return response.results as PostListObject;
};

const POST_LIST_CACHE: { [key: string]: { POSTS: PostListObject; TIMESTAMP: number; CACHE_DURATION: number } } = {
  id: {
    POSTS: [],
    TIMESTAMP: 0,
    CACHE_DURATION: 10000,
  },
};

export const getCachedPostList = async (database_id: string) => {
  const now = Date.now();
  if (!POST_LIST_CACHE[database_id])
    POST_LIST_CACHE[database_id] = {
      POSTS: [],
      TIMESTAMP: 0,
      CACHE_DURATION: 10000,
    };
  if (
    POST_LIST_CACHE[database_id].POSTS.length > 0 &&
    now - POST_LIST_CACHE[database_id].TIMESTAMP < POST_LIST_CACHE[database_id].CACHE_DURATION
  ) {
    console.log('cache called');
    return POST_LIST_CACHE[database_id].POSTS;
  } else {
    const posts = await getPostList(database_id);
    console.log('fetch called');
    POST_LIST_CACHE[database_id].POSTS = posts || [];
    POST_LIST_CACHE[database_id].TIMESTAMP = now;
    return posts;
  }
};

export const getPostMetaData = async (page_id: string): Promise<PageObject> => {
  const result = await notion.pages.retrieve({ page_id });

  return result as PageObject;
};

const getChildrenBlocks = async (
  parent_block_id: string
): Promise<(BlockObjectResponse | PartialBlockObjectResponse)[]> => {
  let results = [];
  let blocks = await notion.blocks.children.list({
    block_id: parent_block_id,
    page_size: 100,
  });
  results = [...blocks.results];
  while (blocks.has_more) {
    parent_block_id = blocks.next_cursor || '';
    blocks = await notion.blocks.children.list({
      block_id: parent_block_id,
      page_size: 100,
    });
    results = [...results, ...blocks.results];
  }
  return results;
};

const getAllChildrenBlocks = async (blocks: BlockObjectResponse[]) => {
  const result = await Promise.all(
    blocks.map(async depth_block => {
      if (depth_block.has_children) {
        const children = await getChildrenBlocks(depth_block.id);
        const type = depth_block.type;
        (depth_block as any)[type].children = children;
      }
      return depth_block;
    })
  );
  return result;
};

export const getPost = async (block_id: string): Promise<BlockObjectResponse[]> => {
  const blocks = await getChildrenBlocks(block_id);
  const fullBlocks = await getAllChildrenBlocks(blocks as BlockObjectResponse[]);

  return fullBlocks;
};

export const getSingleBlock = async (block_id: string): Promise<GetBlockResponse> =>
  await notion.blocks.retrieve({ block_id });
