import { create } from 'zustand'
import { createScrollRefSlice, type ScrollStateSlice } from './slices'
import { devtools } from 'zustand/middleware'

export const useReadingPositionStore = create<ScrollStateSlice>()(
  devtools((...a) => ({
    ...createScrollRefSlice(...a),
  }))
)
