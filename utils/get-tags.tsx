import { Tag } from '@/_lib/components/typography/tag/tag';
import { PageDataRow, PageMetaData } from '../_lib/types/notion-response';

export function getTags(post: PageDataRow | PageMetaData) {
  //TODO: BREADCRUMB COMPONENT + tag id를 통한 검색 기능
  const tags = post.properties.tags.multi_select;

  return tags;
}
