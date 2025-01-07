import { notion_env, site_env } from '@/env';
import { getCachedPostList } from '@/fetch/notion';
import { parsedSlug } from '@/utils/parsed-slug';
import { getServerSideSitemap, ISitemapField } from 'next-sitemap';

export async function GET(request: Request) {
  const engineeringPosts = await getCachedPostList(notion_env.database_id);
  const studyArchivePosts = await getCachedPostList(notion_env.study_database_id);

  const engineeringSlugs = engineeringPosts.map(post => `${site_env.engineering}/${parsedSlug(post)}`);
  const studyArchiveSlugs = studyArchivePosts.map(post => `${site_env.study}/${parsedSlug(post)}`);

  const slugs = [...getSiteMapField(engineeringSlugs, 'daily'), ...getSiteMapField(studyArchiveSlugs, 'never')];

  return getServerSideSitemap(slugs);
}

const getSiteMapField = (slugs: string[], changefreq?: ISitemapField['changefreq']): ISitemapField[] =>
  slugs.map(slug => {
    return {
      loc: slug,
      lastmod: new Date().toISOString(),
      changefreq,
      priority: 1,
    };
  });
