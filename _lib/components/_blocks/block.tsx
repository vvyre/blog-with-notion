import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { blockComponentMap } from './block-component-map';

export function Block({ block }: { block: BlockObjectResponse }) {
  const Component = blockComponentMap[block.type];
  if (!Component) return <div />;

  return <Component block={block} />;
}
