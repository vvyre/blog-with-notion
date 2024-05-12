import { BlockTypes, NotionBlock, NotionBlockWithChildren } from '@/_lib/types/block';
import { Block } from './block';
import type { NotionComponentPropsWithChildren } from '@/_lib/types/component-common';

export function ChildrenBlocks({ block }: { block: NotionBlockWithChildren }) {
  const type = block.type;
  return (
    <>
      {
        //@ts-ignore
        block[type].children.map((block: NotionBlock) => {
          return <Block block={block} />;
        })
      }
    </>
  );
}
