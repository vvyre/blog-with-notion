import type { GetPageResponse } from '@notionhq/client/build/src/api-endpoints';
import { List } from '../../list/list';
import { getTitle } from '@/utils/get-title';
import { parsedSlug } from '@/utils/parsed-slug';
import { Heading } from '../../typography/heading/heading';
import { Txt } from '../../typography/txt/txt';
import { getSummary } from '@/utils/get-summary';
import { getTags } from '@/utils/get-tags';
import { Spacing } from '../spacing/spacing';
import { POST_BOX, POST_CATEGORY, POST_LINK, POST_SUMMARY, POST_TITLE, RELEASED_DATE } from './post-list.css';
import { getDate } from '@/utils/get-date';
import { Flex } from '../flex/flex';
import { Category } from '../post-list-box/post-list-box';

interface PostListProps {
  pageData: GetPageResponse;
  selectedCategory: Category;
}

export function PostList({ pageData, selectedCategory }: PostListProps) {
  const URI = `/blog/${parsedSlug(pageData)}`;
  const TAGS = getTags(pageData);
  const CATEGORY = TAGS[0].name;
  const IS_ALL_POST = selectedCategory === '전체';
  const TITLE = getTitle(pageData);
  const SUMMARY = getSummary(pageData);
  const DATE = getDate(pageData);

  return (
    <List as="li">
      <Flex justifyContents="center" styleVariant={POST_BOX}>
        <Txt as="Link" href={URI} styleVariant={POST_LINK}>
          {IS_ALL_POST ? (
            <Flex justifyContents="center" alignItems="center">
              <Txt as="span" styleVariant={POST_CATEGORY}>
                {CATEGORY}
              </Txt>
              <Spacing size="0.3rem" dir="hori" />
              <Txt as="span" styleVariant={RELEASED_DATE}>
                {DATE}
              </Txt>
            </Flex>
          ) : (
            <Txt styleVariant={RELEASED_DATE}>{DATE}</Txt>
          )}
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
