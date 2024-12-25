'use client';
import { LAYOUT_BG } from '@/app/page.css';
import { View } from '../../basics/view/view';
import { useBackground } from '@/_lib/react/use-background';
import { ComponentPropsWithoutRef } from 'react';

export function BackgroundLayout({ ...props }: ComponentPropsWithoutRef<'div'>) {
  const src = useBackground(26);

  return (
    <View
      className={props.className ?? LAYOUT_BG}
      style={{
        backgroundImage: `url('${src}')`,
      }}
      {...props}>
      {props.children}
    </View>
  );
}
