'use client';
import { ReactNode, useEffect, useRef } from 'react';
import { View } from '../../basics/view/view';
import { useReadingPositionStore } from '../reading-position/store';
import { LAYOUT_CENTERED } from '../../basics/article/article.css';

export function PostBorder({ children }: { children: ReactNode }) {
  const setScrollHeightRef = useReadingPositionStore(state => state.setScrollHeightRef);
  const setAnchorRef = useReadingPositionStore(state => state.setAnchorRef);
  const articleRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setScrollHeightRef(articleRef);
    setAnchorRef(scrollRef);
  }, [articleRef, scrollRef]);

  return (
    <View as="main" ref={scrollRef}>
      <article id="post" ref={articleRef} className={LAYOUT_CENTERED}>
        {children}
      </article>
    </View>
  );
}
