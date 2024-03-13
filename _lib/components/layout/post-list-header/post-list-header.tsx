import { Txt } from '../../typography/txt/txt';
import { Spacing } from '../spacing/spacing';
import { View } from '../view/view';
import { getTags } from '@/utils/get-tags';
import { BASE, CATEGORY, HEADER_TEXT } from './post-list-header.css';
import { PostListObject } from '@/_lib/types/notion-response';
import { GetPageResponse } from '@notionhq/client/build/src/api-endpoints';
import { Flex } from '../flex/flex';
import { List } from '../../list/list';
import { Tag } from '../../typography/tag/tag';
import { meta } from '@/constants/meta';
import { ReactNode } from 'react';

interface PostListHeaderProps {
  postListData: PostListObject;
  children: ReactNode;
}
export function PostListHeader({ postListData, children }: PostListHeaderProps) {
  // const tagSet: Set<string> = new Set();
  // postListData.forEach(post => getTags(post as GetPageResponse).forEach(tag => tagSet.add(JSON.stringify(tag))));
  // const tags = Array.from(tagSet).map(str => JSON.parse(str));
  return (
    <View styleVariant={BASE}>
      <Spacing size="25vh" />
      <Txt styleVariant={HEADER_TEXT}>{children}</Txt>
      <Spacing size="5rem" />
      {/* <List as="ul">
        <Flex justifyContents="flexStart" alignItems="center">
          <List as="li">
            <Tag>전체 글</Tag>
          </List>
          {tags.map(tag => (
            <List key={tag.id} as="li">
              <Tag>{tag.name}</Tag>
            </List>
          ))}
        </Flex>
      </List>
      <Spacing size="3rem" /> */}
    </View>
  );
}
