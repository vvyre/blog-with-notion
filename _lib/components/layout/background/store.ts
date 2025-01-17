import { create } from 'zustand'
import {
  backgroundImageSlice,
  BackgroundImageSliceType,
  backgroundMetaSlice,
  BackgroundMetaSliceType,
  randomBackgroundSlice,
  RandomBackgroundSliceType,
  targetElementSlice,
  TargetElementSliceType,
} from './slices'
import { devtools } from 'zustand/middleware'

export const useBackgroundStore = create<
  RandomBackgroundSliceType &
    BackgroundImageSliceType &
    BackgroundMetaSliceType &
    TargetElementSliceType
>()(
  devtools((...a) => ({
    ...randomBackgroundSlice(...a),
    ...backgroundImageSlice(...a),
    ...backgroundMetaSlice(...a),
    ...targetElementSlice(...a),
  }))
)
