import type { ComponentPropsWithoutRef } from 'react';
import { Heading } from '../../typography/heading/heading';
import { Flex } from '../../layout/flex/flex';
import { Spacing } from '../../layout/spacing/spacing';
import { PageMetaData } from '@/_lib/types/notion-response';
import { getTitle } from '@/utils/get-title';
import { getDate } from '@/utils/get-date';
import { Txt } from '../../typography/txt/txt';
import { getTags } from '@/utils/get-tags';
import { Tag } from '../../typography/tag/tag';
import { TITLE_TAG } from './title-tag.css';
import { View } from '../../layout/view/view';

interface TitleProps extends ComponentPropsWithoutRef<'h1'> {
  meta: PageMetaData;
}
export function Title({ meta }: TitleProps) {
  return (
    <Flex width="fill" flexDirection="column" justifyContents="center" alignItems="center">
      <View>
        {getTags(meta).map(tag => (
          <Tag key={tag.id} styleVariant={TITLE_TAG}>
            {tag.name}
          </Tag>
        ))}
      </View>
      <Spacing size="1rem" />
      <View>
        <Heading as="h1" size="XXXL" bold>
          {getTitle(meta)}
        </Heading>
      </View>
      <Spacing size="1rem" />
      <View>
        <Txt color="gray" size="S">
          {getDate(meta)}
        </Txt>
      </View>

      <Spacing size="4rem" />
    </Flex>
  );
}
