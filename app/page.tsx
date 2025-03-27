import { getCachedPostList } from '@/_lib/utils/fetch/notion'
import { PostListLayout } from '@/_lib/components/layout/post-list-layout/post-list-layout'
import { notion_env } from '@/env'
import { BackgroundLayout } from '@/_lib/components/layout/background/background'

export const revalidate = 3600

export default async function PostListPage() {
  const postList = await getCachedPostList(notion_env.database_id)
  return (
    <BackgroundLayout>
      <PostListLayout category="engineering" posts={postList} />
    </BackgroundLayout>
  )
}
