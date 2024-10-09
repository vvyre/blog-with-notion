import { NotionBlock } from '@/_lib/types/block';
import { Block } from './block';
import { Fragment } from 'react';
import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';

export function ChildrenBlocks({ childrenBlocks }: { childrenBlocks: BlockObjectResponse[] }) {
  return (
    <Fragment>
      {childrenBlocks?.map((block: BlockObjectResponse) => {
        return <Block key={block.id} block={block} />;
      })}
    </Fragment>
  );
}
