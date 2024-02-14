import { BlockTypes } from './block';

export interface NotionPolymorphicComponentProps<T> {
  block: NotionBlock<T>;
}

export type BlockComponentMap = Record<BlockTypes, ComponentType<NotionPolymorphicComponentProps> | ReactNode>;
