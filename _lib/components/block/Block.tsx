import { ComponentPropsWithoutRef } from 'react';
import { BlockTypes, NotionBlock } from '@/_lib/types/block';
import { BlockComponentMap } from '@/_lib/types/components';
import { blockComponentMap } from './block-component-map';

type BlockProps<T extends BlockTypes> = {
  block: NotionBlock<T>;
} & ComponentPropsWithoutRef<BlockComponentMap[T]>;

export const Block = <T extends BlockTypes>({ block }: BlockProps<T>) => {
  const Component = blockComponentMap[block.type];
  if (!Component) return <div />;
  else return <Component block={block} />;
};
