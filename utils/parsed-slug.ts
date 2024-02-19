import {
  DatabaseObjectResponse,
  PageObjectResponse,
  PartialDatabaseObjectResponse,
  PartialPageObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';

export function parsedSlug(
  post: PageObjectResponse | PartialPageObjectResponse | PartialDatabaseObjectResponse | DatabaseObjectResponse
) {
  if ('properties' in post) {
    if ('unique_id' in post.properties.ID) {
      if ('number' in post.properties.ID.unique_id) {
        const str = post.properties.ID.unique_id.number;
        return String(str);
      }
    }
  }
  return '';
}
