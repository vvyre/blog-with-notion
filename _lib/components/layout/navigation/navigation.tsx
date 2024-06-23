'use client';
import Image from 'next/image';
import Arrow from '#/img/icons/arrow_back_black.svg';
import { Btn } from '../../interaction/button/btn';
import { BASE } from './navigation.css';
import { View } from '../view/view';

export function Navigation() {
  return (
    <View>
      <Btn as="Link" href="/" styleVariant={BASE}>
        <Image alt="go to post list" unoptimized src={Arrow} />
      </Btn>
      {/* TODO: ADD SHUFFLE */}
    </View>
  );
}
