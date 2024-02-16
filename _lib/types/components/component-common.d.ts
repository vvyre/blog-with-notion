import { BlockTypes, NotionBlock } from '../block';

export interface NotionPolymorphicComponentProps<T> {
  block: NotionBlock<T>;
}

export interface NotionComponentProps<BLOCK> {
  block: BLOCK;
}

export type BlockComponentMap = Record<BlockTypes, ComponentType<NotionPolymorphicComponentProps> | ReactNode>;
