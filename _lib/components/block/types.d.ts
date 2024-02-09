import type { ComponentType } from 'react';
import type { BlockTypes, NotionBlock } from '@/_lib/types/block';

export interface NotionPolymorphicComponentProps<T> {
  block: NotionBlock<T>;
}

export type BlockComponentMap = Record<
  BlockTypes,
  ComponentType<NotionPolymorphicComponentProps> | ReactNode
>;
