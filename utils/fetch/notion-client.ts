import { notion_env } from 'constants/envs'
import { Client } from '@notionhq/client'
const notionFetch = () => new Client({ auth: notion_env.api_key })

export const notion: Client = notionFetch()
