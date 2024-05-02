'use client';
import { useState } from 'react';
import { Txt } from '../../typography/txt/txt';
import { PostList } from '../post-list/post-list';
import { View } from '../view/view';
import { CATEGORY, FALLBACK, POST_LIST_CENTERED, SELECTED } from './post-list-box.css';
import { PostListObject } from '@/_lib/types/notion-response';
import { Btn } from '../../interaction/button/btn';
import { Flex } from '../flex/flex';
import { Spacing } from '../spacing/spacing';
import { Divider } from '../divider/divider';

type Category = '전체' | '개발' | '잡기';
const categories = ['전체', '개발', '잡기'] as const;

export function PostListBox({ postList }: { postList: PostListObject }) {
  const [category, setCategory] = useState<Category>('전체');
  const POSTS = {
    전체: postList,
    개발: postList.filter(
      post =>
        post.properties.tags.multi_select[0].color !== 'gray' &&
        post.properties.tags.multi_select[0].color !== 'default'
    ),
    잡기: postList.filter(
      post =>
        post.properties.tags.multi_select[0].color === 'gray' ||
        post.properties.tags.multi_select[0].color === 'default'
    ),
  };

  return (
    <View styleVariant={POST_LIST_CENTERED}>
      <Flex justifyContents="center">
        {categories.map((current, idx) => (
          <>
            {idx > 0 && <Spacing size="0.5rem" dir="right" />}
            <Btn
              styleVariant={`${current === category ? SELECTED : ''} ${CATEGORY}`}
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
