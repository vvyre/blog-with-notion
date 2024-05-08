'use client';
import { useState } from 'react';
import { Txt } from '../../typography/txt/txt';
import { PostList } from '../post-list/post-list';
import { View } from '../view/view';
import { CATEGORY, NOT_SELECTED, POST_LIST_CENTERED, SELECTED } from './post-list-layout.css';
import { PostListObject } from '@/_lib/types/notion-response';
import { Btn } from '../../interaction/button/btn';
import { Flex } from '../flex/flex';
import { Spacing } from '../spacing/spacing';

export type Category = '개발' | '신변잡기';

type Posts = Record<Category, PostListObject>;

export function PostListLayout({ postList }: { postList: PostListObject }) {
  const categories: Category[] = ['개발', '신변잡기'];
  const POSTS: Posts = categories.reduce(
    (acc: Posts, category) => {
      acc[category] = postList.filter(post => post.properties.tags.multi_select[0].name === (category as string));
      return acc;
    },
    { 개발: [], 신변잡기: [] }
  );

  const [selectedCategory, setCategory] = useState<Category>('개발');
  return (
    <View styleVariant={POST_LIST_CENTERED}>
      <Flex justifyContents="center">
        {categories.map((current, idx) => (
          <>
            {idx > 0 && <Spacing size="0.5rem" dir="right" />}
            <Btn
              styleVariant={`${CATEGORY} ${current === selectedCategory ? SELECTED : NOT_SELECTED}`}
              type="button"
              onClick={() => setCategory(current)}>
              {current}
            </Btn>
          </>
        ))}
      </Flex>
      <Spacing size="3rem" />
      <View as="ul">
        {POSTS[selectedCategory].length > 0 ? (
          postList.map(post => <PostList key={post.id} pageData={post} />)
        ) : (
          <Flex width="fill" justifyContents="center" alignItems="center">
            <Spacing size="10rem" />
            <Txt as="p" color="gray">
              작성된 글이 없습니다
            </Txt>
          </Flex>
        )}
      </View>
    </View>
  );
}
