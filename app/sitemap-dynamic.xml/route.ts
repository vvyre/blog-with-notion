import { notion_env, site_env } from '@/env'
import { getCachedPostList } from '@/_lib/utils/fetch/notion'
import { parsedSlug } from '@/_lib/utils/block-processing/parsed-slug'
import { getServerSideSitemap, ISitemapField } from 'next-sitemap'

export async function GET() {
  const engineeringPosts = await getCachedPostList(notion_env.database_id)

  const engineeringSlugs = engineeringPosts.map(post => `${site_env.engineering}/${parsedSlug(post)}`)

  const slugs = [...getSiteMapField(engineeringSlugs, 'daily')]

  return getServerSideSitemap(slugs)
}

const getSiteMapField = (slugs: string[], changefreq?: ISitemapField['changefreq']): ISitemapField[] =>
  slugs.map(slug => {
    return {
      loc: slug,
      lastmod: new Date().toISOString(),
      changefreq,
      priority: 1,
    }
  })
