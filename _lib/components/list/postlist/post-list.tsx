import { PageDataRow } from '@/_lib/types/notion-response';
import { List } from '../list';
import { getTitle } from '@/utils/get-title';
import Link from 'next/link';
import { parsedSlug } from '@/utils/parsed-slug';
import { Heading } from '../../typography/heading/heading';
import { Txt } from '../../typography/txt/Txt';
import { getSummary } from '@/utils/get-summary';

interface PostListProps {
  pageData: PageDataRow;
}
export function PostList({ pageData }: PostListProps) {
  return (
    <Link href={`/blog/${parsedSlug(pageData)}`}>
      <List as="li">
        <Heading size="XXL">{getTitle(pageData)}</Heading>
        <Txt>{getSummary(pageData)}</Txt>
      </List>
    </Link>
  );
}
