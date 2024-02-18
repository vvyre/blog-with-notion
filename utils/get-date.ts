import {
  DatabaseObjectResponse,
  GetPageResponse,
  PartialDatabaseObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { PageFullData, PageObject } from '../_lib/types/notion-response';

export function getDate(post: PageFullData | GetPageResponse | PartialDatabaseObjectResponse | DatabaseObjectResponse) {
  if ('properties' in post) {
    if ('date' in post.properties.date) {
      const result = post.properties.date.date?.start;
      return result ? result.split('-').join('. ') : '아직 작성 중인 글이에요.';
    }
  }
  return '아직 작성 중인 글이에요.';
}
