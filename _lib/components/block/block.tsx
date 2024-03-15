import { Wrapper } from '../util/wrapper';
import { blockComponentMap } from './block-component-map';
import type { NotionBlock, NotionBlockWithChildren } from '@/_lib/types/block';
import { DefaultBlockGridPlacement, ImageBlockGridPlacement } from './block-layout';

export function Block({ block }: { block: NotionBlockWithChildren | NotionBlock }) {
  const Component = blockComponentMap[block.type];
  if (!Component) return <div />;

  return (
    <Wrapper wrapper={block.type === 'image' ? ImageBlockGridPlacement : DefaultBlockGridPlacement}>
      <Component block={block} />
    </Wrapper>
  );
}
