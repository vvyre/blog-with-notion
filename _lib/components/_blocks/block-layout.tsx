import { ReactNode } from 'react';
import { View } from '../layout/view/view';
import { DEFAULT_BLOCK_GRID_PLACEMENT, IMG_BLOCK_GRID_PLACEMENT } from './block-layout.css';

export function ImageBlockGridPlacement({ children }: { children: ReactNode }) {
  return <View styleVariant={IMG_BLOCK_GRID_PLACEMENT}>{children}</View>;
}
export function DefaultBlockGridPlacement({ children }: { children: ReactNode }) {
  return <View styleVariant={DEFAULT_BLOCK_GRID_PLACEMENT}>{children}</View>;
}
