import { Tag } from '@/_lib/types/block';
import { PageObject, PostListObject } from '@/_lib/types/notion-response';
import { getTitle } from '@/utils/get-title';
import { parsedSlug } from '@/utils/parsed-slug';
import { List } from '../../basics/list/list';
import { BASE, DATE, POST_LIST, TITLE, UL } from './article-recommend.css';
import { Txt } from '../../basics/typography/txt/txt';
import { Spacing } from '../../basics/spacing/spacing';
import { View } from '../../basics/view/view';
import { Btn } from '../../basics/button/btn';
import { getDate } from '@/utils/get-date';

export function ArticleRecommend({ posts, targets, id }: { posts: PostListObject; targets: Tag[]; id: string }) {
  const recommended = posts
    .filter(
      p =>
        p.id !== id && p.properties.tags.multi_select.some(t => targets.filter(tag => (tag.id === t.id ? true : false)))
    )
    .sort(_ => Math.random() - 0.5)
    .slice(0, 5);

  return (
    <View className={BASE}>
      <Txt as="span" bold>
        비슷한 글
      </Txt>
      <Spacing size="1rem" />
      <List className={UL}>
        {recommended.map(p => {
          const title = getTitle(p);
          const slug = parsedSlug(p);
          const date = getDate(p);

          return (
            <List as="li" key={p.id}>
              <Btn as="Link" href={slug} className={POST_LIST}>
                <Txt as="span" className={TITLE}>
                  {title}
                </Txt>
                <Txt as="span" className={DATE}>
                  {date}
                </Txt>
              </Btn>
            </List>
          );
        })}
      </List>
    </View>
  );
}
