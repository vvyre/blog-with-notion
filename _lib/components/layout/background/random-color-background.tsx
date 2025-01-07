'use client';
import { useContext, type ComponentPropsWithoutRef, type ReactNode } from 'react';
import { View } from '../../basics/view/view';
import { BackgroundContext } from '@/_lib/context/background-provider';

export function RandomColorBackground({ ...props }: ComponentPropsWithoutRef<'div'>) {
  const { backgroundColor } = useContext(BackgroundContext);
  return (
    <View
      {...props}
      style={{
        backgroundColor,
      }}>
      {props.children}
    </View>
  );
}
