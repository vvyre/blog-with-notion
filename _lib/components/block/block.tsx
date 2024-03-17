import { blockComponentMap } from './block-component-map';
import type { NotionBlock, NotionBlockWithChildren } from '@/_lib/types/block';

export function Block({ block }: { block: NotionBlockWithChildren | NotionBlock }) {
  const Component = blockComponentMap[block.type];
  if (!Component) return <div />;

  return <Component block={block} />;
}
