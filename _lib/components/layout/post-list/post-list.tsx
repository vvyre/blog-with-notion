'use client'
import { List } from '../../basics/list/list'
import { getTitle } from '@/utils/get-title'
import { parsedSlug } from '@/utils/parsed-slug'
import { Txt } from '../../basics/typography/txt/txt'
import {
  POST_LINK,
  POST_LINK_THEME_VARIANT,
  POST_LIST_BASE,
  POST_TITLE,
  RELEASED_DATE,
} from './post-list.css'
import { getDate } from '@/utils/get-date'
import type { PageObject } from '@/_lib/types/notion-response'
import { useBackgroundStore } from '../background/store'

interface PostListProps {
  post: PageObject
  category: string
}

export function PostList({ post, category }: PostListProps) {
  const URI = `/${category}/${parsedSlug(post)}`
  const TITLE = getTitle(post)
  const DATE = getDate(post)

  const { PREFERS_BLACK_TEXT } = useBackgroundStore()
  const COLOR_KEY = PREFERS_BLACK_TEXT() ? 'DARK' : 'LIGHT'
  const LIST_HOVER_STYLE = POST_LINK_THEME_VARIANT[COLOR_KEY]

  return (
    <List as="li" className={POST_LIST_BASE}>
      <Txt as="Link" href={URI} className={`${POST_LINK} ${LIST_HOVER_STYLE}`}>
        <Txt as="div" className={`${RELEASED_DATE}`}>
          {DATE}
        </Txt>
        <Txt as="div" className={POST_TITLE}>
          {TITLE}
        </Txt>
      </Txt>
    </List>
  )
}
