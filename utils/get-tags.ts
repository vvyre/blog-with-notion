import type { GetPageResponse, PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

export function getTags(post: PageObjectResponse | GetPageResponse) {
  if ('properties' in post) {
    if ('multi_select' in post.properties.tags) {
      const result = post.properties.tags.multi_select;
      return result;
    }
  }
  return [];
}
