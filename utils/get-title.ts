import type {
  DatabaseObjectResponse,
  PageObjectResponse,
  PartialDatabaseObjectResponse,
  PartialPageObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';

export function getTitle(
  post: PageObjectResponse | PartialPageObjectResponse | PartialDatabaseObjectResponse | DatabaseObjectResponse
) {
  if ('properties' in post) {
    if ('title' in post.properties.title) {
      if (Array.isArray(post.properties.title.title)) {
        const result = post.properties.title.title[0].plain_text;
        return result;
      }
    }
  }
  return '';
}
