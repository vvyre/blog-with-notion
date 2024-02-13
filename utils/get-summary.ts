import { PageDataRow } from '../_lib/types/notion-response';

export function getSummary(post: PageDataRow) {
  return post.properties.summary.rich_text[0]?.plain_text || '-';
}
