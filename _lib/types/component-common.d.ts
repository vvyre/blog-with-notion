import {
  BlockObjectResponseMap,
  BlockTypes,
  NotionBlock,
  NotionComponentTypesWithChildren,
  NotionPolymorphicComponentTypes,
  NotionPolymorphicComponentTypesWithChildren,
} from './block';

export type BlockComponentMap = Record<BlockTypes, ComponentType>;

export type NotionComponentProps<T extends BlockTypes> = {
  block: BlockObjectResponseMap[T];
};

export type NotionComponentPropsWithChildren<T extends BlockTypes> = {
  block: NotionComponentTypesWithChildren[T];
};

export type NotionPolymorphicComponentProps<T extends BlockTypes> = {
  block: NotionPolymorphicComponentTypes<T>;
};

export type NotionComponentPropsWithChildren<T extends BlockTypes> = {
  block: NotionPolymorphicComponentTypesWithChildren<T>;
};
