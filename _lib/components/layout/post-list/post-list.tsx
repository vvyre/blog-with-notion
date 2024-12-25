import { List } from '../../basics/list/list';
import { getTitle } from '@/utils/get-title';
import { parsedSlug } from '@/utils/parsed-slug';
import { Txt } from '../../basics/typography/txt/txt';
import { POST_LINK, POST_LIST_BASE, POST_TITLE, RELEASED_DATE } from './post-list.css';
import { getDate } from '@/utils/get-date';
import type { PageObject } from '@/_lib/types/notion-response';

interface PostListProps {
  post: PageObject;
  category: string;
}

export function PostList({ post, category }: PostListProps) {
  const URI = `/${category}/${parsedSlug(post)}`;
  const TITLE = getTitle(post);
  const DATE = getDate(post);

  return (
    <List as="li" className={POST_LIST_BASE}>
      <Txt as="Link" href={URI} className={POST_LINK}>
        <Txt as="span" className={POST_TITLE}>
          {TITLE}
        </Txt>
        <Txt as="span" className={RELEASED_DATE}>
          {DATE}
        </Txt>
      </Txt>
    </List>
  );
}
