import { BlockTypes, NotionBlock } from '@/_lib/types/block';
import { Block } from './block';
import { NotionComponents } from '@/_lib/types/components/component-props';

export function ChildrenBlocks({ block }: NotionComponents) {
  const type = block.type;
  return (
    <>
      {
        //@ts-expect-error
        block[type].children.map((block: NotionBlock) => {
          //@ts-expect-error
          return <Block block={block} />;
        })
      }
    </>
  );
}
