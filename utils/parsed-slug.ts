import { PageDataRow } from '../_lib/types/notion-response';

export function parsedSlug(post: PageDataRow) {
  const str = post.properties.ID.unique_id.number;
  return String(str);
}
