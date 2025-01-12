'use client';
import { List } from '../../basics/list/list';
import { getTitle } from '@/utils/get-title';
import { parsedSlug } from '@/utils/parsed-slug';
import { Txt } from '../../basics/typography/txt/txt';
import { POST_LINK, POST_LIST_BASE, POST_TITLE, RELEASED_DATE } from './post-list.css';
import { getDate } from '@/utils/get-date';
import type { PageObject } from '@/_lib/types/notion-response';
import { useContext } from 'react';
import { BackgroundContext } from '@/_lib/context/background-provider';
import { TEXT_COLOR_THEME_VARIANT } from '../../basics/typography/typography.css';

interface PostListProps {
  post: PageObject;
  category: string;
}

export function PostList({ post, category }: PostListProps) {
  const URI = `/${category}/${parsedSlug(post)}`;
  const TITLE = getTitle(post);
  const DATE = getDate(post);

  const { DARK_TEXT_PREFERED } = useContext(BackgroundContext);
  const TEXT_COLOR = DARK_TEXT_PREFERED ? 'DARK' : 'LIGHT';
  const TEXT_COLOR_STYLE = TEXT_COLOR_THEME_VARIANT[TEXT_COLOR];

  return (
    <List as="li" className={POST_LIST_BASE}>
      <Txt as="Link" href={URI} className={POST_LINK}>
        <Txt as="div" className={`${RELEASED_DATE} ${TEXT_COLOR_STYLE}`}>
          {DATE}
        </Txt>
        <Txt as="div" className={POST_TITLE}>
          {TITLE}
        </Txt>
      </Txt>
    </List>
  );
}
