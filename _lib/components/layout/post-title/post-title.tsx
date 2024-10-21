import { Heading } from '../../typography/heading/heading';
import { getTitle } from '@/utils/get-title';
import { getDate } from '@/utils/get-date';
import { Txt } from '../../typography/txt/txt';
import { View } from '../view/view';
import { BASE, TITLE, SUMMARY, RELEASED_DATE, BACKGROUND, INFO, INFO_BOX } from './post-title.css';
import { getSummary } from '@/utils/get-summary';
import { Spacing } from '../spacing/spacing';
import { PageObject } from '@/_lib/types/notion-response';

export function PostTitle({ ...meta }: PageObject) {
  const title = getTitle(meta);
  const summary = getSummary(meta);
  const rel_date = getDate(meta);

  return (
    <View styleVariant={BACKGROUND}>
      <View styleVariant={BASE}>
        <Spacing size="2.5rem" />
        <View styleVariant={INFO_BOX}>
          <Heading as="h1" styleVariant={TITLE}>
            {title}
          </Heading>
        </View>
        <Spacing size="1rem" />
        <Txt as="p" styleVariant={INFO}>
          <Txt as="span" styleVariant={RELEASED_DATE}>
            {rel_date + ' • '}
          </Txt>
          <Txt as="span" styleVariant={SUMMARY}>
            {summary}
          </Txt>
        </Txt>
      </View>
    </View>
  );
}
