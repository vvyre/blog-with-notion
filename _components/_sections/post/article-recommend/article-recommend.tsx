import { Tag } from 'types/block'
import { PostListObject } from 'types/notion-response'
import { getTitle } from 'utils/block-processing/get-title'
import { parsedSlug } from 'utils/block-processing/parsed-slug'
import { List } from 'components/basics/list/list'
import { BASE, POST_LIST, SECTION_TITLE, TITLE, UL } from './article-recommend.css'
import { Txt } from 'components/basics/typography/txt/txt'
import { Spacing } from 'components/basics/spacing/spacing'
import { View } from 'components/basics/view/view'
import { Heading } from 'components/basics/typography/heading/heading'
import UI from './ui'

export function ArticleRecommend({
  posts,
  targets,
  id,
}: {
  posts: PostListObject
  targets: Tag[]
  id: string
}) {
  const recommended = posts
    .filter(
      p =>
        p.id !== id &&
        p.properties.tags.multi_select.some(t =>
          targets.filter(tag => (tag.id === t.id ? true : false))
        )
    )
    .sort(() => Math.random() - 0.5)
    .slice(0, 5)

  const tags = targets.map(tags => tags.name)

  return (
    <View className={BASE}>
      <Heading as="h2" className={SECTION_TITLE}>{`${UI.recommend}${tags.join(
        ', '
      )}`}</Heading>
      <Spacing size="1rem" />
      <List className={UL}>
        {recommended.map(p => {
          const title = getTitle(p)
          const slug = parsedSlug(p)

          return (
            <List as="li" key={p.id} className={POST_LIST}>
              <Txt as="Link" href={slug} className={TITLE}>
                {title}
              </Txt>
            </List>
          )
        })}
      </List>
    </View>
  )
}
