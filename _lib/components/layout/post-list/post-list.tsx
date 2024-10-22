import { List } from '../../list/list';
import { getTitle } from '@/utils/get-title';
import { parsedSlug } from '@/utils/parsed-slug';
import { Txt } from '../../typography/txt/txt';
import { Spacing } from '../spacing/spacing';
import { POST_LINK, POST_LIST_BASE, POST_TITLE, RELEASED_DATE } from './post-list.css';
import { getDate } from '@/utils/get-date';
import type { PageObject } from '@/_lib/types/notion-response';
import type { CategoryType } from '@/constants/category';

interface PostListProps {
  pageData: PageObject;
  category: CategoryType;
}

export function PostList({ pageData, category }: PostListProps) {
  const URI = `/${category}/${parsedSlug(pageData)}`;
  const TITLE = getTitle(pageData);
  const DATE = getDate(pageData);

  return (
    <List as="li" styleVariant={POST_LIST_BASE}>
      <Txt as="Link" href={URI} styleVariant={POST_LINK}>
        <Txt as="span" styleVariant={POST_TITLE}>
          {TITLE}
        </Txt>
        <Spacing size="0.5rem" dir="hori" />
        <Txt as="span" styleVariant={RELEASED_DATE}>
          {DATE}
        </Txt>
      </Txt>
    </List>
  );
}
