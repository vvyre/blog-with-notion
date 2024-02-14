import { NotionBlock } from '@/_lib/types/block';
import { NotionPolymorphicComponentProps } from '@/_lib/types/components';
import { Block } from './block';

export function ChildrenBlocks<T>({ block }: NotionPolymorphicComponentProps<T>) {
  const type = block.type;
  return (
    <>
      {block[type].children.map((block: NotionBlock) => {
        return <Block block={block} />;
      })}
    </>
  );
}
