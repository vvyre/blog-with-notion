import {
  DatabaseObjectResponse,
  PageObjectResponse,
  PartialDatabaseObjectResponse,
  PartialPageObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';

export function parsedSlug(
  post:
    | PageObjectResponse
    | PartialPageObjectResponse
    | PartialDatabaseObjectResponse
    | DatabaseObjectResponse
) {
  //@ts-expect-error
  const str = post.properties.title.title[0].plain_text;
  const blankToHypen = str.replace(/\s+/g, '-');
  const sanitized = blankToHypen.replace(/[^a-zA-Z0-9-_\u3131-\uD79D]+/g, '');
  return sanitized;
}
