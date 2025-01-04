'use client';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { View } from '../../basics/view/view';
import { objectKeys } from '@syyu/util';
import { vars } from '@/_lib/styles/themes.css';
import { useRandomNumber } from '@syyu/util/react';

export function RandomColorBackground({ ...props }: ComponentPropsWithoutRef<'div'>) {
  const N = objectKeys(vars.notion).length;
  const num = useRandomNumber([0, N], [], 'int');
  const backgroundColor = vars.notion[objectKeys(vars.notion)[num]];

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
