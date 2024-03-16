import { Txt } from '../../typography/txt/txt';
import { Spacing } from '../spacing/spacing';
import { View } from '../view/view';
import { getTags } from '@/utils/get-tags';
import { BASE, CATEGORY, PROFILE_TEXT_PLACEMENT } from './profile.css';
import { PostListObject } from '@/_lib/types/notion-response';
import { GetPageResponse } from '@notionhq/client/build/src/api-endpoints';
import { Flex } from '../flex/flex';
import { List } from '../../list/list';
import { Tag } from '../../typography/tag/tag';
import { meta } from '@/constants/meta';
import { ReactNode } from 'react';

interface PostListHeaderProps {
  children: ReactNode;
}
export function Profile({ children }: PostListHeaderProps) {
  return (
    <View styleVariant={BASE}>
      <View styleVariant={PROFILE_TEXT_PLACEMENT}>{children}</View>
      <Spacing size="2rem" />
    </View>
  );
}
