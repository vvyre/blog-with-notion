import { Heading } from '../../typography/heading/heading';
import { getTitle } from '@/utils/get-title';
import { getDate } from '@/utils/get-date';
import { Txt } from '../../typography/txt/txt';
import { View } from '../view/view';
import { BASE, TITLE, SUMMARY, RELEASED_DATE } from './post-title.css';
import { getSummary } from '@/utils/get-summary';
import { Spacing } from '../spacing/spacing';
import { PageObject } from '@/_lib/types/notion-response';

export function PostTitle({ ...meta }: PageObject) {
  const title = getTitle(meta);
  const summary = getSummary(meta);
  const rel_date = getDate(meta);

  return (
    <View styleVariant={BASE}>
      <Txt styleVariant={RELEASED_DATE}>{rel_date}</Txt>
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
