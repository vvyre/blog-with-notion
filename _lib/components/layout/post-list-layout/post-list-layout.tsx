'use client';
import { PostList } from '../post-list/post-list';
import { View } from '../../basics/view/view';
import { POST_LIST_CENTERED } from './post-list-layout.css';
import { PostListObject } from '@/_lib/types/notion-response';
import { PostListFallback } from '../post-list/post-list-fallback';
import { CategoryType } from '@/constants/category';

import { useContext, useEffect } from 'react';
import { PostListContext } from '@/_lib/context/post-list-provider';

export function PostListLayout({ posts, category }: { posts: PostListObject; category: CategoryType }) {
  const { postList, setPostList } = useContext(PostListContext);

  useEffect(() => {
    if (postList?.length) return;
    setPostList(posts);
  }, [posts]);

  return (
    <View as="ul" styleVariant={POST_LIST_CENTERED}>
      {postList && postList?.length > 0 ? (
        postList.map(post => <PostList category={category} key={post.id} post={post} />)
      ) : (
        <PostListFallback />
      )}
    </View>
  );
}
