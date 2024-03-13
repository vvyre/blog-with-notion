import type { GetPageResponse } from '@notionhq/client/build/src/api-endpoints';
import { List } from '../../list/list';
import { getTitle } from '@/utils/get-title';
import { parsedSlug } from '@/utils/parsed-slug';
import { Heading } from '../../typography/heading/heading';
import { Txt } from '../../typography/txt/txt';
import { getSummary } from '@/utils/get-summary';
// import { getDate } from '@/utils/get-date';
import { getTags } from '@/utils/get-tags';
import { View } from '../view/view';
import { Spacing } from '../spacing/spacing';
import {
  GRID_SPAN,
  POST_BOX,
  POST_BOX_BORDER,
  POST_CATEGORY_TEXT,
  POST_LINK,
  POST_SUMMARY,
  POST_THUMBNAIL,
  POST_TITLE,
} from './post-list.css';

interface PostListProps {
  pageData: GetPageResponse;
}

export function PostList({ pageData }: PostListProps) {
  const URI = `/blog/${parsedSlug(pageData)}`;
  const TAGS = getTags(pageData);
  const CATEGORY = TAGS[0];
  const TITLE = getTitle(pageData);
  const SUMMARY = getSummary(pageData);
  // const REL_DATE = getDate(pageData);

  return (
    <List as="li" styleVariant={GRID_SPAN}>
      <View styleVariant={`${POST_BOX}}`}>
        <Txt as="Link" href={URI} styleVariant={POST_LINK}>
          <View styleVariant={POST_THUMBNAIL}>
            {/* THUMBNAIL */}
            <></>
          </View>
          <Spacing size="0.5rem" />
          <Heading as="h1" styleVariant={POST_TITLE}>
            {TITLE}
          </Heading>
          <Spacing size="0.25rem" />
          <Txt styleVariant={POST_SUMMARY}>{SUMMARY}</Txt>
          <Spacing size="0.5rem" />
          {TAGS.map(t => (
            <Txt key={t.id} styleVariant={POST_CATEGORY_TEXT}>
              {t.name}
            </Txt>
          ))}
        </Txt>
      </View>
      <Spacing size="1rem" />
    </List>
  );
}
