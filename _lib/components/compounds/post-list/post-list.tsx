import Link from 'next/link';
import { List } from '../../list/list';
import { getTitle } from '@/utils/get-title';
import { parsedSlug } from '@/utils/parsed-slug';
import { Heading } from '../../typography/heading/heading';
import { Txt } from '../../typography/txt/txt';
import { getSummary } from '@/utils/get-summary';
import { getDate } from '@/utils/get-date';
import { getTags } from '@/utils/get-tags';
import { Tag } from '../../typography/tag/tag';
import { View } from '../../layout/view/view';
import { Spacing } from '../../layout/spacing/spacing';
import { POST_BOX, POST_BOX_INNER, SMALL } from './post-list.css';
import { Flex } from '../../layout/flex/flex';
import type { GetPageResponse } from '@notionhq/client/build/src/api-endpoints';

interface PostListProps {
  pageData: GetPageResponse;
}
export function PostList({ pageData }: PostListProps) {
  return (
    <List as="li">
      <View styleVariant={POST_BOX}>
        <View styleVariant={POST_BOX_INNER}>
          <Flex justifyContents="spaceBetween" alignItems="center">
            <View>
              <View styleVariant={SMALL}>
                {getTags(pageData).map(t => (
                  <Tag key={t.id}>{t.name}</Tag>
                ))}
              </View>
              <Spacing size="0.5rem" />
              <Link href={`/blog/${parsedSlug(pageData)}`}>
                <Heading size="XL">{getTitle(pageData)}</Heading>
                <Txt size="XS">{getSummary(pageData)}</Txt>
              </Link>
              <Spacing size="0.5rem" />
              <View styleVariant={SMALL}>
                <Txt as="span" size="XS" color="gray">
                  {getDate(pageData)}
                </Txt>
              </View>
            </View>
            <Flex flexDirection="column" justifyContents="center" alignItems="flexEnd">
              <Link href={`/blog/${parsedSlug(pageData)}`}>
                <Txt size="XL">→</Txt>
              </Link>
            </Flex>
          </Flex>
          <Spacing size="0.5rem" />
        </View>
      </View>
    </List>
  );
}
