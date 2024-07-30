import { notion_env, site_env } from '@/env';
import { getCachedPostList } from '@/fetch/notion';
import { parsedSlug } from '@/utils/parsed-slug';
import { getServerSideSitemap } from 'next-sitemap';

export async function GET(request: Request) {
  const engineeringPosts = await getCachedPostList(notion_env.database_id);
  // const asdfPosts = await getCachedPostList(notion_env.asdf_id);

  const engineeringSlugs = engineeringPosts.map(post => `${site_env.engineering}${parsedSlug(post)}`);
  // const asdfSlugs = asdfPosts.map(post => `${site_env.asdf}${parsedSlug(post)}`);

  const slugs = [...engineeringSlugs];

  return getServerSideSitemap(
    slugs.map(slug => {
      return {
        loc: slug,
        lastmod: new Date().toISOString(),
        changefreq: 'daily',
        priority: 1,
      };
    })
  );
}
