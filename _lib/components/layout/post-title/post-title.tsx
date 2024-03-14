import { Heading } from '../../typography/heading/heading';
import { getTitle } from '@/utils/get-title';
import { getDate } from '@/utils/get-date';
import { Txt } from '../../typography/txt/txt';
import { getTags } from '@/utils/get-tags';
import { Tag } from '../../typography/tag/tag';
import { View } from '../view/view';
import {
  BASE,
  TITLE,
  SUMMARY_GRID_PLACEMENT,
  DATE_GRID_PLACEMENT,
  BACK_BUTTON_PLACEMENT,
  TITLE_TEXT_PLACEMENT,
  SUMMARY,
  TAG_GRID_PLACEMENT,
  POST_TAG,
  TITLE_GRID,
} from './post-title.css';
import { getSummary } from '@/utils/get-summary';
import type { GetPageResponse } from '@notionhq/client/build/src/api-endpoints';
import { BackButton } from '../../interaction/back-button/back-button';

export function PostTitle({ ...meta }: GetPageResponse) {
  return (
    <View styleVariant={BASE}>
      <View styleVariant={TITLE_GRID}>
        <BackButton styleVariant={BACK_BUTTON_PLACEMENT} />
        <View styleVariant={TITLE_TEXT_PLACEMENT}>
          <Heading as="h1" styleVariant={TITLE}>
            {getTitle(meta)}
          </Heading>
        </View>
        <View styleVariant={SUMMARY_GRID_PLACEMENT}>
          <Txt as="p" styleVariant={SUMMARY}>
            {getSummary(meta)}
          </Txt>
        </View>
        <View styleVariant={TAG_GRID_PLACEMENT}>
          {getTags(meta).map(tag => (
            <Tag key={tag.id} styleVariant={POST_TAG}>
              {tag.name}
            </Tag>
          ))}
        </View>
        <View styleVariant={DATE_GRID_PLACEMENT}>
          <Txt color="gray" size="S">
            {getDate(meta)}
          </Txt>
        </View>
      </View>
    </View>
  );
}
