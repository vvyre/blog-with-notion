'use client';
import { Heading } from '../../basics/typography/heading/heading';
import { getTitle } from '@/utils/get-title';
import { getDate } from '@/utils/get-date';
import { Txt } from '../../basics/typography/txt/txt';
import { View } from '../../basics/view/view';
import { BASE, TITLE, SUMMARY, RELEASED_DATE, INFO, INFO_BOX } from './post-title.css';
import { getSummary } from '@/utils/get-summary';
import { Spacing } from '../../basics/spacing/spacing';
import { PageObject } from '@/_lib/types/notion-response';
import { CurrentPostContext } from '@/_lib/context/current-post-provider';
import { useContext, useLayoutEffect } from 'react';

export function PostTitle({ ...meta }: PageObject) {
  const { setCurrentPost } = useContext(CurrentPostContext);
  const title = getTitle(meta);
  const summary = getSummary(meta);
  const rel_date = getDate(meta);

  useLayoutEffect(() => {
    setCurrentPost(meta);
  }, [meta.id]);

  return (
    <View styleVariant={BASE}>
      <View styleVariant={INFO_BOX}>
        <Heading as="h1">
          <Txt as="span" styleVariant={TITLE}>
            {title}
          </Txt>
        </Heading>
        <Spacing size="1rem" />
        <Txt as="div" styleVariant={INFO}>
          <Txt as="span" styleVariant={RELEASED_DATE}>
            {rel_date}
          </Txt>
          <Spacing size="0" />
          <Txt as="span" styleVariant={SUMMARY}>
            {summary}
          </Txt>
        </Txt>
      </View>
    </View>
  );
}
