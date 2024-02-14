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
import { FLEX_RIGHT, POST_BOX } from './post-list.css';
import { Flex } from '../../layout/flex/flex';

interface PostListProps {
  pageData: PageDataRow;
}
export function PostList({ pageData }: PostListProps) {
  return (
    <List as="li">
      <View styleVariant={POST_BOX}>
        <View>
          <Flex justifyContents="spaceBetween" alignItems="center">
            <View>
              <Link href={`/blog/${parsedSlug(pageData)}`}>
                <Heading size="XL">{getTitle(pageData)}</Heading>
                <Txt size="XS">{getSummary(pageData)}</Txt>
              </Link>
            </View>
            <Flex flexDirection="column" justifyContents="center" alignItems="flexEnd">
              <View styleVariant={FLEX_RIGHT}>
                <Txt as="span" size="XS" color="gray">
                  {getDate(pageData)}
                </Txt>
              </View>
              <View styleVariant={FLEX_RIGHT}>
                {getTags(pageData).map(t => (
                  <Tag key={t.id}>{t.name}</Tag>
                ))}
              </View>
            </Flex>
          </Flex>
          <Spacing size="0.5rem" />
          {/*TODO: ADD THUMBNAIL*/}
        </View>
      </View>
    </List>
  );
}
