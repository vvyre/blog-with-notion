import { PageDataRow } from '../fetch/notion-response';

export function getSummary(post: PageDataRow) {
  return post.properties.summary.rich_text.plain_text || '-';
}
