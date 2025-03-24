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

type Slices = RandomBackgroundSliceType &
  BackgroundImageSliceType &
  BackgroundMetaSliceType &
  TargetElementSliceType

export const useBackgroundStore = create<Slices>()((...a) => ({
  ...randomBackgroundSlice(...a),
  ...backgroundImageSlice(...a),
  ...backgroundMetaSlice(...a),
  ...targetElementSlice(...a),
}))
