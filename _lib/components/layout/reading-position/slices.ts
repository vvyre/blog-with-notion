import type { MutableRefObject, Ref, RefObject } from 'react';
import { create, StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';

export interface ScrollStateSlice {
  scrollHeightRef: RefObject<HTMLElement> | null;
  anchorRef: RefObject<HTMLElement> | null;
  setScrollHeightRef: (ref: RefObject<HTMLElement> | null) => void;
  setAnchorRef: (ref: RefObject<HTMLElement> | null) => void;
}

export const createScrollRefSlice: StateCreator<
  ScrollStateSlice,
  [['zustand/devtools', never]],
  [],
  ScrollStateSlice
> = set => ({
  scrollHeightRef: null,
  anchorRef: null,
  setScrollHeightRef: (ref: RefObject<HTMLElement> | null) => set(_ => ({ scrollHeightRef: ref })),
  setAnchorRef: (ref: RefObject<HTMLElement> | null) => set(_ => ({ anchorRef: ref })),
});
