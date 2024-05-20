import { Heading } from '../../typography/heading/heading';
import { getTitle } from '@/utils/get-title';
import { View } from '../view/view';
import { Txt } from '../../typography/txt/txt';
import { getLastEditedTime } from '@/utils/get-last-edited-time';

import { BASE, TITLE_TEXT_PLACEMENT, TITLE, DATE_GRID_PLACEMENT, RELEASED_DATE } from '../post-title/post-title.css';
import { PageObject } from '@/_lib/types/notion-response';

export function AboutTitle({ ...meta }: PageObject) {
  return (
    <View styleVariant={BASE}>
      <View styleVariant={TITLE_TEXT_PLACEMENT}>
        <Heading as="h1" styleVariant={TITLE}>
          {getTitle(meta)}
        </Heading>
      </View>
      <View styleVariant={DATE_GRID_PLACEMENT}>
        <Txt styleVariant={RELEASED_DATE}>{`Last Updated ${getLastEditedTime(meta)}`}</Txt>
      </View>
    </View>
  );
}
