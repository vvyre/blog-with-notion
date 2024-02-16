import { blockComponentMap } from './block-component-map';
import { NotionComponents } from '@/_lib/types/components/component-props';

export const Block = ({ block }: NotionComponents) => {
  const Component = blockComponentMap[block.type];
  if (!Component) return <div />;
  else return <Component block={block} />;
};
