'use client';
import { LAYOUT_BG, LAYOUT_FILTER, OVERFLOW } from '@/app/page.css';
import { View } from '../../basics/view/view';
import { ComponentPropsWithoutRef, useContext } from 'react';
import { BackgroundContext } from '@/_lib/context/background-provider';

export function BackgroundLayout({ ...props }: ComponentPropsWithoutRef<'div'>) {
  const { src } = useContext(BackgroundContext);

  return (
    <View
      className={props.className ?? LAYOUT_BG}
      style={{
        backgroundImage: `url('${src}')`,
      }}
      {...props}>
      <View className={LAYOUT_FILTER}>
        <View className={OVERFLOW}>{props.children}</View>
      </View>
    </View>
  );
}
