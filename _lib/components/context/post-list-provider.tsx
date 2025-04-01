import { createContext, useState } from 'react'
import type { ReactNode } from 'react'
import type { PostListObject } from '@/_lib/types/notion-response'
import { noop } from '@frfla/laser'

interface PostListContextType {
  postList: Record<string, PostListObject> | null
  setPostList: Function
}

export const PostListContext = createContext<PostListContextType>({
  postList: null,
  setPostList: noop,
})

export function PostListProvider({ children }: { children: ReactNode }) {
  const [postList, setPostList] = useState<Record<
    string,
    PostListObject
  > | null>(null)

  return (
    <PostListContext.Provider value={{ postList, setPostList }}>
      {children}
    </PostListContext.Provider>
  )
}
