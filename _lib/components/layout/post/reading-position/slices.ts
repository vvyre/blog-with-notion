import type { RefObject } from 'react'
import { StateCreator } from 'zustand'

export interface ScrollStateSlice {
  scrollHeightRef: RefObject<HTMLElement | null> | null
  anchorRef: RefObject<HTMLElement | null> | null
  setScrollHeightRef: (ref: RefObject<HTMLElement | null>) => void
  setAnchorRef: (ref: RefObject<HTMLElement | null>) => void
  resetRefs: () => void
}

export const createScrollRefSlice: StateCreator<
  ScrollStateSlice,
  [],
  [],
  ScrollStateSlice
> = set => ({
  scrollHeightRef: null,
  anchorRef: null,
  setScrollHeightRef: (ref: RefObject<HTMLElement | null>) =>
    set(_ => ({ scrollHeightRef: ref })),
  setAnchorRef: (ref: RefObject<HTMLElement | null>) =>
    set(_ => ({ anchorRef: ref })),
  resetRefs: () => set(_ => ({ scrollHeightRef: null, anchorRef: null })),
})
