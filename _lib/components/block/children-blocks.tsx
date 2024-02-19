import { BlockTypes, NotionBlock } from '@/_lib/types/block';
import { Block } from './block';
import { NotionComponentPropsWithChildren } from '@/_lib/types/component-common';

export function ChildrenBlocks<T extends BlockTypes>({ block }: NotionComponentPropsWithChildren<T>) {
  const type = block.type;
  return (
    <>
      {block[type].children.map((block: NotionBlock) => {
        return <Block block={block} />;
      })}
    </>
  );
}
