import { Fragment, useState } from 'react';
import { Txt } from '../../typography/txt/txt';
import { PostList } from '../post-list/post-list';
import { View } from '../view/view';
import { CATEGORY, NOT_SELECTED, POST_LIST_CENTERED, SELECTED } from './post-list-layout.css';
import { PostListObject } from '@/_lib/types/notion-response';
import { Btn } from '../../interaction/button/btn';
import { Flex } from '../flex/flex';
import { Spacing } from '../spacing/spacing';
// import { Category, Posts, categories, init } from '@/constants/category';
import { PostListFallback } from '../post-list/post-list-fallback';

export function PostListLayout({ postList }: { postList: PostListObject }) {
  // const POSTS: Posts = categories.reduce((acc: Posts, category) => {
  //   acc[category] = postList.filter(post => post.properties.tags.multi_select[0].name === (category as string));
  //   return acc;
  // }, init);

  // const [selected, setCategory] = useState<Category>('개발');
  return (
    <View styleVariant={POST_LIST_CENTERED}>
      {/* <Flex justifyContents="center">
        {categories.map((category, idx) => (
          <Fragment key={category}>
            {idx > 0 && <Spacing size="0.5rem" dir="right" />}
            <Btn
              styleVariant={`${category === selected ? SELECTED : NOT_SELECTED} ${CATEGORY}`}
              type="button"
              onClick={() => setCategory(category)}>
              {category}
            </Btn>
          </Fragment>
        ))}
      </Flex> */}
      {/* <Spacing size="3rem" /> */}
      <View as="ul">
        {postList?.length > 0 ? postList.map(post => <PostList key={post.id} pageData={post} />) : <PostListFallback />}
      </View>
    </View>
  );
}
