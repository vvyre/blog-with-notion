import { getPostList } from '@/fetch/notion';
import { PostList } from '@/_lib/components/compounds/post-list/post-list';
import { List } from '@/_lib/components/list/list';
import { Section } from '@/_lib/components/template/section';
import { PostListHeader } from '@/_lib/components/compounds/post-list-header/post-list-header';
import { Txt } from '@/_lib/components/typography/txt/txt';
import Head from 'next/head';
import { site_env } from '@/env';

export const revalidate = 180;

export default async function PostListPage() {
  const postList = await getPostList();

  return (
    <>
      <Section>
        <PostListHeader postListData={postList} />
        {postList.length > 0 ? (
          <List as="ul">
            {postList.map(post => (
              <PostList key={post.id} pageData={post} />
            ))}
          </List>
        ) : (
          <Txt>작성된 글이 없어요.</Txt>
        )}
      </Section>
    </>
  );
}
