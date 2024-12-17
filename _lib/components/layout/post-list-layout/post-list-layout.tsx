'use client';
import { PostList } from '../post-list/post-list';
import { View } from '../../basics/view/view';
import { POST_LIST_CENTERED } from './post-list-layout.css';
import { PostListObject } from '@/_lib/types/notion-response';
import { PostListFallback } from '../post-list/post-list-fallback';
import { useContext, useLayoutEffect } from 'react';
import { PostListContext } from '@/_lib/context/post-list-provider';
import { useIsomorphicLayoutEffect } from '@syyu/util/react';

export function PostListLayout({ posts, category }: { posts: PostListObject; category: string }) {
  const { postList, setPostList } = useContext(PostListContext);

  /** SSR-ED Content */
  useIsomorphicLayoutEffect(() => {
    if (postList?.length) return;
    setPostList({ category, posts });
  }, [posts, category]);

  return (
    <View as="ul" styleVariant={POST_LIST_CENTERED}>
      {postList?.posts && postList?.posts?.length > 0 ? (
        postList?.posts.map(post => <PostList category={category} key={post.id} post={post} />)
      ) : (
        <PostListFallback />
      )}
    </View>
  );
}
