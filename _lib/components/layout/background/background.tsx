'use client';
import { LAYOUT_BG } from '@/app/page.css';
import { View } from '../../basics/view/view';
import { useRandomBackgroundImg } from '@/utils/get-background-img';
import { ComponentPropsWithoutRef } from 'react';

export function BackgroundLayout({ ...props }: ComponentPropsWithoutRef<'div'>) {
  const img = useRandomBackgroundImg(26);

  return (
    <View
      stylevariant={props.className ?? LAYOUT_BG}
      style={{
        backgroundImage: `url('${img}') !important`,
      }}
      {...props}>
      {props.children}
    </View>
  );
}
