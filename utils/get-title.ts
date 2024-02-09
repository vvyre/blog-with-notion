import { PageDataRow } from '../fetch/notion-response';

export function getTitle(post: PageDataRow) {
  return post.properties.title.title[0].plain_text;
}
