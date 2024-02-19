import type { ComponentPropsWithoutRef } from 'react';
import { Heading } from '../../typography/heading/heading';
import { Flex } from '../../layout/flex/flex';
import { Spacing } from '../../layout/spacing/spacing';
import { getTitle } from '@/utils/get-title';
import { getDate } from '@/utils/get-date';
import { Txt } from '../../typography/txt/txt';
import { getTags } from '@/utils/get-tags';
import { Tag } from '../../typography/tag/tag';
import { TITLE_TAG } from './title-tag.css';
import { View } from '../../layout/view/view';
import { PageObject } from '@/_lib/types/notion-response';
import { GetPageResponse } from '@notionhq/client/build/src/api-endpoints';
import { POST_TITLE } from './title.css';
import { getSummary } from '@/utils/get-summary';

interface TitleProps extends ComponentPropsWithoutRef<'h1'> {
  meta: GetPageResponse;
}
export function Title({ ...meta }: GetPageResponse) {
  return (
    <Flex width="fill" flexDirection="column" justifyContents="center" alignItems="flexStart">
      <View>
        {getTags(meta).map(tag => (
          <Tag key={tag.id} styleVariant={TITLE_TAG}>
            {tag.name}
          </Tag>
        ))}
      </View>
      <Spacing size="1rem" />
      <View>
        <Heading as="h1" size="XXXL" styleVariant={POST_TITLE} bold>
          {getTitle(meta)}
        </Heading>
      </View>
      <Spacing size="1rem" />
      <View>
        <Txt as="p" color="gray">
          {getSummary(meta)}
        </Txt>
      </View>
      <Spacing size="0.75rem" />

      <View>
        <Txt color="gray" size="S">
          {getDate(meta)}
        </Txt>
      </View>

      <Spacing size="4rem" />
    </Flex>
  );
}
