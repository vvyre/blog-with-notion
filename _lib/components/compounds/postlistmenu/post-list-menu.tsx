import { PageDataRow } from '@/_lib/types/notion-response';
import { List } from '../../list/list';
import Flex from '../../layout/flex/flex';
import { Txt } from '../../typography/txt/txt';
import { Spacing } from '../../layout/spacing/spacing';
import { View } from '../../layout/view/view';
import { getTags } from '@/utils/get-tags';
import { Tag } from '../../typography/tag/tag';
import { CATEGORY } from './post-list-menu.css';

interface PostListMenuProps {
  postListData: PageDataRow[];
}
export function PostListMenu({ postListData }: PostListMenuProps) {
  const tagSet: Set<string> = new Set();
  postListData.forEach(post => getTags(post).forEach(tag => tagSet.add(JSON.stringify(tag))));
  const tags = Array.from(tagSet).map(str => JSON.parse(str));
  return (
    <View>
      <Spacing size="6rem" />

      <List as="ul">
        <List as="li">
          <Txt as="span" size="XXXL">
            전체
          </Txt>
        </List>
        <Flex justifyContents="flexStart" alignItems="center">
          {tags.map(tag => (
            <List key={tag.id} as="li">
              <Tag styleVariant={CATEGORY}>{tag.name}</Tag>
            </List>
          ))}{' '}
        </Flex>
      </List>

      <Spacing size="4rem" />
    </View>
  );
}
