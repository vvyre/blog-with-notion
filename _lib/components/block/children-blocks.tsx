import { BlockTypes, NotionBlock } from '@/_lib/types/block';
import { NotionPolymorphicComponentProps } from '@/_lib/types/components/component-common';
import { Block } from './block';

export function ChildrenBlocks<T extends BlockTypes>({ block }: NotionPolymorphicComponentProps<T>) {
  const type = block.type;
  return (
    <>
      {block[type].children.map((block: NotionBlock) => {
        return <Block block={block} />;
      })}
    </>
  );
}
