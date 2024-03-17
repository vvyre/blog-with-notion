import type {
  DatabaseObjectResponse,
  GetPageResponse,
  PartialDatabaseObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';
import type { PageFullData } from '../_lib/types/notion-response';

export function getLastEditedTime(
  post: PageFullData | GetPageResponse | PartialDatabaseObjectResponse | DatabaseObjectResponse
) {
  if ('last_edited_time' in post) {
    const date = new Date(post.last_edited_time);
    const formatter = new Intl.DateTimeFormat('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      timeZone: 'Asia/Seoul',
    });
    const formatted = formatter.format(date);
    return formatted.slice(0, formatted.length - 1);
  }
  return '';
}
