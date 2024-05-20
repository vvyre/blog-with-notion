import { PageObject } from '@/_lib/types/notion-response';
export function getSummary(post: PageObject) {
  if (Array.isArray(post.properties.summary.rich_text)) {
    const result = post.properties.summary.rich_text[0].plain_text;
    return result || '';
  } else return '';
}
