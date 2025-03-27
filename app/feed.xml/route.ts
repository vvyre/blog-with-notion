import RSS from 'rss'
import { meta } from '@/_lib/constants/meta'
import { notion_env, site_env } from '@/env'
import { getCachedPostList } from '@/_lib/utils/fetch/notion'
import { getTitle } from '@/_lib/utils/block-processing/get-title'
import { getSummary } from '@/_lib/utils/block-processing/get-summary'
import { parsedSlug } from '@/_lib/utils/block-processing/parsed-slug'
import { getDate } from '@/_lib/utils/block-processing/get-date'

export async function GET() {
  const feed = new RSS({
    title: meta.siteTitle,
    description: meta.siteDiscription,
    site_url: meta.og.url,
    feed_url: `${site_env.root}/feed.xml`,
    copyright: 'Seungyoon Yu',
    language: 'ko',
    pubDate: new Date(),
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
