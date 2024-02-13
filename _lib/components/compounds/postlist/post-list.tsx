import { PageDataRow } from '@/_lib/types/notion-response';
import { List } from '../../list/list';
import { getTitle } from '@/utils/get-title';
import Link from 'next/link';
import { parsedSlug } from '@/utils/parsed-slug';
import { Heading } from '../../typography/heading/heading';
import { Txt } from '../../typography/txt/txt';
import { getSummary } from '@/utils/get-summary';
import { getDate } from '@/utils/get-date';
import { getTags } from '@/utils/get-tags';
import { Tag } from '../../typography/tag/tag';
import { View } from '../../layout/view/view';
import { Spacing } from '../../layout/spacing/spacing';
import { POST_BOX } from '../../layout/view/view.css';

interface PostListProps {
  pageData: PageDataRow;
}
export function PostList({ pageData }: PostListProps) {
  return (
    <List as="li">
      <View styleVariant={POST_BOX}>
        <View>
          {getTags(pageData).map(t => (
            <Tag key={t.id}>{t.name}</Tag>
          ))}
        </View>
        <Spacing size="0.5rem" />
        <View>
          <Link href={`/blog/${parsedSlug(pageData)}`}>
            <Heading size="XL">{getTitle(pageData)}</Heading>
            <Spacing size="0.5rem" />
            <Txt>{getSummary(pageData)}</Txt>
            <Spacing size="0.25rem" />
            <Txt>{getDate(pageData)}</Txt>
            <Spacing size="0.25rem" />
          </Link>
        </View>
        <Spacing size="0.75rem" />
      </View>
    </List>
  );
}
