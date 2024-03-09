import { site_env } from '@/env';
import { getCachedPostList } from '@/fetch/notion';
import { parsedSlug } from '@/utils/parsed-slug';
import { getServerSideSitemap } from 'next-sitemap';

export async function GET(request: Request) {
  const posts = await getCachedPostList();

  const slugs = posts.map(post => `${site_env.root}/blog/${parsedSlug(post)}`);

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
