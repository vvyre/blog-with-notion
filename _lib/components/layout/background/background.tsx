'use client';
import { LAYOUT_BG } from '@/app/page.css';
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
      {props.children}
    </View>
  );
}
