import RSS from 'rss';
import { meta } from '@/constants/meta';
import { notion_env, site_env } from '@/env';
import { getCachedPostList } from '@/fetch/notion';
import { getTitle } from '@/utils/get-title';
import { getSummary } from '@/utils/get-summary';
import { parsedSlug } from '@/utils/parsed-slug';
import { getDate } from '@/utils/get-date';

export async function GET() {
  const feed = new RSS({
    title: '숭늉',
    description: '숭늉',
    site_url: meta.og.url + '/asdf',
    feed_url: `${site_env.asdf}feed.xml`,
    copyright: '숭늉',
    language: 'ko',
    pubDate: new Date(),
  });
  try {
    const postList = await getCachedPostList(notion_env.asdf_id);
    postList.map(post => {
      feed.item({
        title: getTitle(post),
        description: getSummary(post),
        url: `${site_env.asdf}${parsedSlug(post)}`,
        date: getDate(post),
        author: '숭늉',
      });
    });
    return new Response(feed.xml(), {
      headers: {
        'Content-Type': 'application/atom+xml; charset=utf-8',
      },
    });
  } catch (err) {
    console.log(err);
    return new Response('error');
  }
}
