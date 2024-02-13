import { PageDataRow, PageMetaData } from '../_lib/types/notion-response';

export function getDate(post: PageDataRow | PageMetaData) {
  const d = post.properties.date.date.start;
  return d ? d.split('-').join('. ') : '아직 작성 중인 글이에요.';
}
