'use client';
import { vars } from '@/_lib/styles/themes.css';
import { View } from '../../basics/view/view';
import { useScrollPosition } from '@/_lib/hooks/use-scroll-position';
import { useRandomBackground } from '@/utils/get-random-background';
import { BASE, INNER } from './reading-position.css';

import { useReadingPositionStore } from './store';
import { useIsomorphicLayoutEffect } from '@syyu/util/react';
import { useEffect, useRef, useState } from 'react';

export function ReadingPosition() {
  const { scrollHeightRef, anchorRef } = useReadingPositionStore();
  const [pos, _, height] = useScrollPosition(scrollHeightRef, anchorRef);

  const correction = anchorRef?.current?.getBoundingClientRect();
  const correctionHeight = (correction?.bottom ?? 0) - (correction?.top ?? 0);

  //round, toFixed로 스크롤 끝단에서의 감성 조정
  //완전 끝까지 다 스크롤하지 않아도 글을 다 읽었으면 원을 다 채울 수 있도록
  const percentage = Number((pos / (height - correctionHeight)).toFixed(1));
  const read = Math.round(percentage * 100);
  const { backgroundColor } = useRandomBackground();

  return (
    <View
      className={BASE}
      style={{
        outline: `1.25px ${read < 100 ? 'dotted' : 'solid'} ${backgroundColor}`,
      }}>
      <View
        className={INNER}
        style={{
          height: `${read}%`,
          width: `${read}%`,
          backgroundColor: read < 100 ? vars.color.default : backgroundColor,
        }}
      />
    </View>
  );
}
