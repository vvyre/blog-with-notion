'use client';
import Image from 'next/image';
import Arrow from '#/img/icons/arrow_back_white.svg';
import { Btn } from '../../interaction/button/btn';
import { BACK_BTN, BASE, BTN_WRAPPER, POST_TITLE } from './navigation.css';
import { View } from '../view/view';
import { useCategory } from '@/_lib/react/use-category';
import { Txt } from '../../typography/txt/txt';
import { PageObject } from '@/_lib/types/notion-response';
import { getTitle } from '@/utils/get-title';
import { Flex } from '../flex/flex';

export function Navigation({ ...meta }: PageObject) {
  const [path] = useCategory();
  const title = getTitle(meta);
  return (
    <View styleVariant={BASE}>
      <View styleVariant={BTN_WRAPPER}>
        <Btn as="Link" href={path} styleVariant={BACK_BTN}>
          <Image alt="go to post list" unoptimized src={Arrow} />
        </Btn>
      </View>
      <Txt as="h1" styleVariant={POST_TITLE}>
        {title}
      </Txt>
    </View>
  );
}
