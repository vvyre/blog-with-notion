import { PageObject } from '@/_lib/types/notion-response';

export function parsedSlug(post: PageObject) {
  if (Array.isArray(post.properties.slug.rich_text)) {
    const result = post.properties.slug.rich_text[0].plain_text;
    return result ?? '';
  } else return '';
}
