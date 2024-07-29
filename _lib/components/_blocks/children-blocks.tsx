import { NotionBlock } from '@/_lib/types/block';
import { Block } from './block';
import { Fragment } from 'react';

export function ChildrenBlocks({ childrenBlocks }: { childrenBlocks: NotionBlock[] }) {
  return (
    <Fragment>
      {childrenBlocks?.map((block: NotionBlock) => {
        return <Block key={block.id} block={block} />;
      })}
    </Fragment>
  );
}
