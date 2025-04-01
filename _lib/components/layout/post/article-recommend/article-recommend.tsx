import { Tag } from '@/_lib/types/block'
import { PostListObject } from '@/_lib/types/notion-response'
import { getTitle } from '@/_lib/utils/block-processing/get-title'
import { parsedSlug } from '@/_lib/utils/block-processing/parsed-slug'
import { List } from '@/_lib/components/basics/list/list'
import { BASE, POST_LIST, TITLE, UL } from './article-recommend.css'
import { Txt } from '@/_lib/components/basics/typography/txt/txt'
import { Spacing } from '@/_lib/components/basics/spacing/spacing'
import { View } from '@/_lib/components/basics/view/view'
import { Btn } from '@/_lib/components/basics/button/btn'
import { getDate } from '@/_lib/utils/block-processing/get-date'

export function ArticleRecommend({ posts, targets, id }: { posts: PostListObject; targets: Tag[]; id: string }) {
  const recommended = posts
    .filter(
      p =>
        p.id !== id && p.properties.tags.multi_select.some(t => targets.filter(tag => (tag.id === t.id ? true : false)))
    )
    .sort(_ => Math.random() - 0.5)
    .slice(0, 5)

  return (
    <View className={BASE}>
      <Txt as="span" bold>
        비슷한 글
      </Txt>
      <Spacing size="1rem" />
      <List className={UL}>
        {recommended.map(p => {
          const title = getTitle(p)
          const slug = parsedSlug(p)
          const date = getDate(p)

          return (
            <List as="li" key={p.id}>
              <Btn as="Link" href={slug} className={POST_LIST}>
                <Txt as="span" className={TITLE}>
                  {title}
                </Txt>
              </Btn>
            </List>
          )
        })}
      </List>
    </View>
  )
}
