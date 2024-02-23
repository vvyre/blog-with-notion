import type {
  DatabaseObjectResponse,
  PageObjectResponse,
  PartialDatabaseObjectResponse,
  PartialPageObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';

export function getSummary(
  post: PageObjectResponse | PartialPageObjectResponse | PartialDatabaseObjectResponse | DatabaseObjectResponse
) {
  if ('properties' in post) {
    if ('rich_text' in post.properties.summary) {
      if (Array.isArray(post.properties.summary.rich_text)) {
        const result = post.properties.summary.rich_text[0].plain_text;
        return result;
      }
    }
  }
  return '';
}
