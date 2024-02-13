import { PageDataRow, PageMetaData } from '../_lib/types/notion-response';

export function getTitle(post: PageDataRow | PageMetaData) {
  return post.properties.title.title[0].plain_text;
}
