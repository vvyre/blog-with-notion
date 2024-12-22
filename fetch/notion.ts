import { notion } from './notion-client';
import {
  BlockObjectResponse,
  GetBlockResponse,
  PartialBlockObjectResponse,
  QueryDatabaseParameters,
} from '@notionhq/client/build/src/api-endpoints';
import { PageObject } from '@/_lib/types/notion-response';

const POST_LIST_CACHE: Record<string, Promise<PageObject[]>> = {
  id: new Promise(() => []),
};

export const getPostList = async (database_id: string): Promise<PageObject[]> => {
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
  try {
    const response = await notion.databases.query(query);
    console.log(database_id, '>>>> POSTLIST FETCH CALL');
    return response.results as PageObject[];
  } catch (err) {
    console.log('\n', database_id, err, '\n', '>>>> POSTLIST FETCH ERROR');
    return [];
  }
};

export const getCachedPostList = async (database_id: string) => {
  if (!POST_LIST_CACHE[database_id]) {
    POST_LIST_CACHE[database_id] = getPostList(database_id);
  } else console.log(database_id, '>>>> CACHED POSTLIST');

  return POST_LIST_CACHE[database_id];
};

export const getPostMetaData = async (page_id: string): Promise<PageObject> => {
  const result = await notion.pages.retrieve({ page_id });

  return result as PageObject;
};

const getChildrenBlocks = async (
  parent_block_id: string
): Promise<(BlockObjectResponse | PartialBlockObjectResponse)[]> => {
  console.log(parent_block_id, '>>>> BLOCK FETCH CALL');
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
  return await getAllChildrenBlocks(blocks as BlockObjectResponse[]);
};

export const getSingleBlock = async (block_id: string): Promise<GetBlockResponse> => {
  console.log(block_id, '>>>> SINGLE BLOCK FETCH CALL');
  return await notion.blocks.retrieve({ block_id });
};
