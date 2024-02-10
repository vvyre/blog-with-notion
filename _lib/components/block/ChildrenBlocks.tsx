import { NotionBlock } from '@/_lib/types/block';

import { NotionPolymorphicComponentProps } from '@/_lib/types/components';
import { Block } from './Block';

export function ChildrenBlocks<T>({ block }: NotionPolymorphicComponentProps<T>) {
  return (
    <>
      {block.paragraph.children.map((block: NotionBlock) => {
        <Block block={block} />;
      })}
    </>
  );
}
