import RSS from 'rss'
import { meta } from 'constants/meta'
import { notion_env, site_env } from 'constants/envs'
import { getCachedPostList } from 'utils/fetch/notion'
import { getTitle } from 'utils/block-processing/get-title'
import { getSummary } from 'utils/block-processing/get-summary'
import { parsedSlug } from 'utils/block-processing/parsed-slug'
import { getDate } from 'utils/block-processing/get-date'
import { KST } from 'utils/time/kst'

export async function GET() {
  const feed = new RSS({
    title: meta.title,
    description: meta.description,
    site_url: meta.openGraph.url,
    feed_url: `${site_env.root}/feed.xml`,
    copyright: 'Seungyoon Yu',
    language: 'ko',
    pubDate: KST().toJSDate(),
  })
  try {
    const postList = await getCachedPostList(notion_env.database_id)
    postList.map(post => {
      feed.item({
        title: getTitle(post),
        description: getSummary(post),
        url: `${site_env.engineering}/${parsedSlug(post)}`,
        date: getDate(post),
        author: 'Seungyoon Yu',
      })
    })
    return new Response(feed.xml(), {
      headers: {
        'Content-Type': 'application/atom+xml; charset=utf-8',
      },
    })
  } catch (err) {
    console.error(err)
    return new Response('error')
  }
}
