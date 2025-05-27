'use client'
import { PostList } from '../post-list'
import { View } from 'components/basics/view/view'
import { POST_LIST_CENTERED } from './post-list-layout.css'
import { PostListObject } from 'types/notion-response'
import { PostListFallback } from '../post-list-fallback'
import { ComponentProps, useContext } from 'react'
import { PostListContext } from 'components/context/post-list-provider'
import { useIsomorphicLayoutEffect } from '@frfla/react-hooks'
import { getYear } from 'utils/block-processing/get-date'
import { PostListYear } from '../post-list-year'
import { POST_LIST_WRAPPER } from '../post-list.css'

export function PostListLayout({
  posts,
  category,
  ...props
}: {
  posts: PostListObject
  category: string
} & ComponentProps<'ul'>) {
  const { postList, setPostList } = useContext(PostListContext)

  /** SSR-ED Content */
  useIsomorphicLayoutEffect(() => {
    if (postList?.length) return
    setPostList({ category, posts })
  }, [posts, category])

  return (
    <View as="ul" className={props?.className ?? POST_LIST_CENTERED} {...props}>
      {postList?.posts && postList?.posts?.length > 0 ? (
        postList?.posts.map((post, idx) => {
          const curYear = getYear(post)
          if (!idx || curYear !== getYear(postList?.posts[idx - 1]))
            return (
              <View key={post.id} className={POST_LIST_WRAPPER}>
                <PostListYear>{curYear}</PostListYear>
                <PostList category={category} post={post} />
              </View>
            )
          return <PostList category={category} key={post.id} post={post} />
        })
      ) : (
        <PostListFallback />
      )}
    </View>
  )
}
