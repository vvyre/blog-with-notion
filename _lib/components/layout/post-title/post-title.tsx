import { Heading } from '../../typography/heading/heading';
import { getTitle } from '@/utils/get-title';
import { getDate } from '@/utils/get-date';
import { Txt } from '../../typography/txt/txt';
import { getTags } from '@/utils/get-tags';
import { View } from '../view/view';
import { BASE, TITLE, SUMMARY, DEPTH3_TEXT } from './post-title.css';
import { getSummary } from '@/utils/get-summary';
import type { GetPageResponse } from '@notionhq/client/build/src/api-endpoints';
import { Spacing } from '../spacing/spacing';

export function PostTitle({ ...meta }: GetPageResponse) {
  const title = getTitle(meta);
  const summary = getSummary(meta);
  const rel_date = getDate(meta);
  const category = getTags(meta)[0];
  return (
    <View styleVariant={BASE}>
      <Txt styleVariant={DEPTH3_TEXT}>
        {rel_date}・{category.name}
      </Txt>
      <Spacing size="0.5rem" />
      <Heading as="h1" styleVariant={TITLE}>
        {title}
      </Heading>
      <Spacing size="0.75rem" />
      <Txt as="p" styleVariant={SUMMARY}>
        {summary}
      </Txt>
    </View>
  );
}
