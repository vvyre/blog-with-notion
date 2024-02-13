import { PageDataRow } from '../_lib/types/notion-response';

export function getSummary(post: PageDataRow) {
  console.log(post.properties.summary.rich_text);
  return post.properties.summary.rich_text[0]?.plain_text || '-';
}
