import { Txt } from '../../typography/txt/txt';
import { Spacing } from '../../layout/spacing/spacing';
import { View } from '../../layout/view/view';
import { getTags } from '@/utils/get-tags';
import { CATEGORY } from './post-list-header.css';
import { PostListObject } from '@/_lib/types/notion-response';
import { GetPageResponse } from '@notionhq/client/build/src/api-endpoints';

interface PostListHeaderProps {
  postListData: PostListObject;
}
export function PostListHeader({ postListData }: PostListHeaderProps) {
  const tagSet: Set<string> = new Set();
  postListData.forEach(post => getTags(post as GetPageResponse).forEach(tag => tagSet.add(JSON.stringify(tag))));
  const tags = Array.from(tagSet).map(str => JSON.parse(str));
  return (
    <View>
      <Spacing size="5rem" />
      <Txt styleVariant={CATEGORY}>전체 글 ({postListData.length})</Txt>
      {/* <List as="ul">
        <Flex justifyContents="flexStart" alignItems="center">
          {tags.map(tag => (
            <List key={tag.id} as="li">
              <Tag>{tag.name}</Tag>
            </List>
          ))}
        </Flex>
      </List> */}
      <Spacing size="3rem" />
    </View>
  );
}
