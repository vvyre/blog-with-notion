'use client';
import { PostList } from '../post-list/post-list';
import { View } from '../../basics/view/view';
import { POST_LIST_CENTERED } from './post-list-layout.css';
import { PostListObject } from '@/_lib/types/notion-response';
import { PostListFallback } from '../post-list/post-list-fallback';
import { ComponentPropsWithoutRef, useContext } from 'react';
import { PostListContext } from '@/_lib/context/post-list-provider';
import { useIsomorphicLayoutEffect } from '@syyu/util/react';

export function PostListLayout({
  posts,
  category,
  ...props
}: { posts: PostListObject; category: string } & ComponentPropsWithoutRef<'ul'>) {
  const { postList, setPostList } = useContext(PostListContext);

  /** SSR-ED Content */
  useIsomorphicLayoutEffect(() => {
    if (postList?.length) return;
    setPostList({ category, posts });
  }, [posts, category]);

  return (
    <View as="ul" className={props?.className ?? POST_LIST_CENTERED} {...props}>
      {postList?.posts && postList?.posts?.length > 0 ? (
        postList?.posts.map(post => <PostList category={category} key={post.id} post={post} />)
      ) : (
        <PostListFallback />
      )}
    </View>
  );
}
