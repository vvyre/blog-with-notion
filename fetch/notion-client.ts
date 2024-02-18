import { Client } from '@notionhq/client';
const notionFetch = () => new Client({ auth: process.env.NOTION_KEY });
export const notion: Client = notionFetch();
