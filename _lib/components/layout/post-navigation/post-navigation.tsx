import { View } from '../view/view';
import { BASE, CATEGORY_PLACEMENT, TITLE_PLACEMENT } from './post-navigation.css';
import { Txt } from '../../typography/txt/txt';
import { GetPageResponse } from '@notionhq/client/build/src/api-endpoints';
import { getTags } from '@/utils/get-tags';
import { getTitle } from '@/utils/get-title';

export function PostNavigation({ ...meta }: GetPageResponse) {
  const TAG = getTags(meta)[0].name;
  const TITLE = getTitle(meta);
  return (
    <View as="nav" styleVariant={BASE}>
      <Txt styleVariant={CATEGORY_PLACEMENT}>{TAG}</Txt>
      <Txt styleVariant={TITLE_PLACEMENT}>{TITLE}</Txt>
    </View>
  );
}
