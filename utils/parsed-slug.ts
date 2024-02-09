import { PageDataRow } from '../fetch/notion-response';

export function parsedSlug(post: PageDataRow) {
  const str = post.properties.title.title[0].plain_text;
  const blankToHypen = str.replace(/\s+/g, '-');
  const sanitized = blankToHypen.replace(/[^a-zA-Z0-9-_\u3131-\uD79D]+/g, '');
  return sanitized;
}
