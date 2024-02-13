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
import { POST_BOX } from './post-list.css';
import { Tagbox } from '../../typography/tag/tagbox';

interface PostListProps {
  pageData: PageDataRow;
}
export function PostList({ pageData }: PostListProps) {
  return (
    <List as="li">
      <View styleVariant={POST_BOX}>
        <Spacing size="0.25rem" />
        <View>
          <Link href={`/blog/${parsedSlug(pageData)}`}>
            <Heading size="XL">{getTitle(pageData)}</Heading>
            <Spacing size="0.5rem" />
            <Txt>{getSummary(pageData)}</Txt>
            <Spacing size="0.5rem" />
            <Txt size="XS" color="gray">
              {getDate(pageData)}
            </Txt>
          </Link>
          <Spacing size="0.15rem" />
          <Tagbox>
            {getTags(pageData).map(t => (
              <Tag key={t.id}>{t.name}</Tag>
            ))}
          </Tagbox>
          <Spacing size="0.5rem" />
          {/*TODO: ADD THUMBNAIL*/}
        </View>
      </View>
    </List>
  );
}
