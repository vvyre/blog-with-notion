import type { PageObject } from '../_lib/types/notion-response'

export function getDate(post: PageObject) {
  const result = post.properties.date.date?.start?.slice(0, -3)
  return result ? result.split('-').join('. ') : '아직 작성 중인 글이에요.'
}

export const getYear = (post: PageObject) => getDate(post).slice(0, 4)
