import { BlockObjectResponse } from '@notionhq/client'
import { algoliasearch } from 'algoliasearch'
import { TraversableBlock } from 'types/block'
import { PageObject } from 'types/notion-response'
import { extractTxt } from '../block-processing/extract-text'
import { getTags } from '../block-processing/get-tags'
import { getTitle } from '../block-processing/get-title'
import { parsedSlug } from '../block-processing/parsed-slug'

export async function indexing(post: PageObject, blocks: TraversableBlock[]) {
  const client = algoliasearch(process.env.ALGOLIA_APPID!, process.env.ALGOLIA_ADMIN_KEY!)
  try {
    await client.saveObjects({
      indexName: process.env.ALGOLIA_INDEX_NAME!,
      objects: [
        {
          objectID: post.id,
          title: getTitle(post),
          tags: getTags(post),
          slug: parsedSlug(post),
          content: extractTxt(blocks),
        },
      ],
    })
  } catch (err) {
    console.dir(err)
  }
}
