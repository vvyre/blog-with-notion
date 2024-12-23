import { PageObject } from '@/_lib/types/notion-response';

export function getTags(post: PageObject) {
  const result = post.properties?.tags?.multi_select;
  return result ?? [];
}
