import { NotionPolymorphicComponentProps } from '@/_lib/types/component-common';
import { blockComponentMap } from './block-component-map';
import { BlockTypes } from '@/_lib/types/block';

export function Block<T extends BlockTypes>({ block }: NotionPolymorphicComponentProps<T>) {
  //@ts-expect-error
  const Component = blockComponentMap[block.type];
  if (!Component) return <div />;
  else return <Component block={block} />;
}
