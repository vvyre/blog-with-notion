import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_KEY as string });
export const getPostList = async () => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_BLOG_ID as string,
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
  });
  return response.results;
};
export const getPostMetaData = async (id: string) => {
  return await notion.pages.retrieve({ page_id: id });
};

export const getPost = async (id: string) => {
  const query = {
    block_id: id,
    page_size: 100,
  };
  let results = [];
  let blocks = await notion.blocks.children.list(query);
  results = [...blocks.results];
  while (blocks.has_more) {
    blocks = await notion.blocks.children.list({
      ...query,
      start_cursor: blocks.next_cursor as string | undefined,
    });
    results = [...results, ...blocks.results];
  }
  return results;
};
