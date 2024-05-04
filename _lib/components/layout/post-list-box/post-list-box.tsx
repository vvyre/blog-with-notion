'use client';
import { useState } from 'react';
import { Txt } from '../../typography/txt/txt';
import { PostList } from '../post-list/post-list';
import { View } from '../view/view';
import { CATEGORY, NOT_SELECTED, POST_LIST_CENTERED, SELECTED } from './post-list-box.css';
import { PostListObject } from '@/_lib/types/notion-response';
import { Btn } from '../../interaction/button/btn';
import { Flex } from '../flex/flex';
import { Spacing } from '../spacing/spacing';

type Category = '전체' | '개발' | '신변잡기' | '감상';
const categories = ['전체', '개발', '신변잡기', '감상'] as const;

export function PostListBox({ postList }: { postList: PostListObject }) {
  const [category, setCategory] = useState<Category>('전체');
  const POSTS: Record<Category, PostListObject> = {
    전체: postList,
    개발: postList.filter(
      post =>
        post.properties.tags.multi_select[0].color !== 'gray' &&
        post.properties.tags.multi_select[0].color !== 'default'
    ),
    신변잡기: postList.filter(
      post =>
        post.properties.tags.multi_select[0].color === 'gray' ||
        post.properties.tags.multi_select[0].color === 'default'
    ),
    감상: postList.filter(post => post.properties.tags.multi_select[0].color === 'yellow'),
  };

  return (
    <View styleVariant={POST_LIST_CENTERED}>
      <Flex justifyContents="center">
        {categories.map((current, idx) => (
          <>
            {idx > 0 && <Spacing size="0.5rem" dir="right" />}
            <Btn
              styleVariant={`${CATEGORY} ${current === category ? SELECTED : NOT_SELECTED}`}
              type="button"
              onClick={() => setCategory(current)}>
              {current}
            </Btn>
          </>
        ))}
      </Flex>
      <Spacing size="3rem" />
      <View as="ul">
        {POSTS[category].length > 0 ? (
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
