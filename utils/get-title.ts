import { PageObject, PageProperties } from '@/_lib/types/notion-response';

export function getTitle(post: PageObject) {
  if (Array.isArray(post.properties.title.title)) {
    const result = post.properties.title.title[0].plain_text;
    return result;
  }
  return '';
}
