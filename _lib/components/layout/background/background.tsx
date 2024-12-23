'use client';
import { LAYOUT_BG } from '@/app/page.css';
import { View } from '../../basics/view/view';
import { useBackgroundTransition } from '@/utils/get-background-img';
import { ComponentPropsWithoutRef } from 'react';

export function BackgroundLayout({ ...props }: ComponentPropsWithoutRef<'div'>) {
  const src = useBackgroundTransition(26);

  return (
    <View
      styleVariant={props.className ?? LAYOUT_BG}
      style={{
        backgroundImage: `url('${src}')`,
      }}
      {...props}>
      {props.children}
    </View>
  );
}
