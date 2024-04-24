import type { GetPageResponse } from '@notionhq/client/build/src/api-endpoints';
import { List } from '../../list/list';
import { getTitle } from '@/utils/get-title';
import { parsedSlug } from '@/utils/parsed-slug';
import { Heading } from '../../typography/heading/heading';
import { Txt } from '../../typography/txt/txt';
import { getSummary } from '@/utils/get-summary';
import { getTags } from '@/utils/get-tags';
import { Spacing } from '../spacing/spacing';
import {
  POST_BOX,
  HOVER_TEXT,
  POST_CATEGORY_TEXT,
  POST_LINK,
  POST_SUMMARY,
  POST_TITLE,
  RELEASED_DATE,
} from './post-list.css';
import { getDate } from '@/utils/get-date';
import { Flex } from '../flex/flex';

interface PostListProps {
  pageData: GetPageResponse;
}

export function PostList({ pageData }: PostListProps) {
  const URI = `/blog/${parsedSlug(pageData)}`;
  const TAGS = getTags(pageData);
  const CATEGORY = TAGS[0];
  const TITLE = getTitle(pageData);
  const SUMMARY = getSummary(pageData);
  const DATE = getDate(pageData);

  return (
    <List as="li">
      <Flex justifyContents="center" styleVariant={POST_BOX}>
        <Txt as="Link" href={URI} styleVariant={`${POST_LINK} ${HOVER_TEXT[CATEGORY.color]}`}>
          <Txt styleVariant={RELEASED_DATE}>
            {CATEGORY.name} – {DATE}
          </Txt>
          <Heading as="h1" styleVariant={POST_TITLE}>
            {TITLE}
          </Heading>
          <Spacing size="0.2rem" />
          <Txt styleVariant={POST_SUMMARY}>{SUMMARY}</Txt>
        </Txt>
      </Flex>
    </List>
  );
}
