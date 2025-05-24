import { create } from 'zustand'
import { createScrollRefSlice, type ScrollStateSlice } from './slices'

export const useReadingPositionStore = create<ScrollStateSlice>()((...a) => ({
  ...createScrollRefSlice(...a),
}))
