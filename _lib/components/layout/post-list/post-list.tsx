import type { GetPageResponse } from '@notionhq/client/build/src/api-endpoints';
import { List } from '../../list/list';
import { getTitle } from '@/utils/get-title';
import { parsedSlug } from '@/utils/parsed-slug';
import { Heading } from '../../typography/heading/heading';
import { Txt } from '../../typography/txt/txt';
import { getSummary } from '@/utils/get-summary';
// import { getTags } from '@/utils/get-tags';
import { Spacing } from '../spacing/spacing';
import { POST_LINK, POST_LIST_BASE, POST_SUMMARY, POST_TITLE, RELEASED_DATE } from './post-list.css';
import { getDate } from '@/utils/get-date';
import { Flex } from '../flex/flex';
import { View } from '../view/view';
import { PageObject } from '@/_lib/types/notion-response';
import { CategoryType } from '@/constants/category';

interface PostListProps {
  pageData: PageObject;
  category: CategoryType;
}

export function PostList({ pageData, category }: PostListProps) {
  const URI = `/${category}/${parsedSlug(pageData)}`;
  // const TAGS = getTags(pageData);
  // const CATEGORY = TAGS[0].name;
  const TITLE = getTitle(pageData);
  // const SUMMARY = getSummary(pageData);
  const DATE = getDate(pageData);

  return (
    <List as="li" styleVariant={POST_LIST_BASE}>
      <Txt as="Link" href={URI} styleVariant={POST_LINK}>
        <Flex flexDirection="column" justifyContents="center" alignItems="flexStart">
          <Heading as="h3" styleVariant={POST_TITLE}>
            {TITLE}
          </Heading>
        </Flex>
        <View>
          <Txt styleVariant={RELEASED_DATE}>{DATE}</Txt>
        </View>
      </Txt>
    </List>
  );
}
