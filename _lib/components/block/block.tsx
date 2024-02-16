import { ComponentPropsWithoutRef } from 'react';
import { BlockTypes, NotionBlock } from '@/_lib/types/block';
import { BlockComponentMap } from '@/_lib/types/components/component-common';
import { blockComponentMap } from './block-component-map';
import { NotionComponents } from '@/_lib/types/components/component-props';

type BlockProps = {
  block: NotionComponents['block'];
};

export const Block = ({ block }: NotionComponents) => {
  const Component = blockComponentMap[block.type];
  if (!Component) return <div />;
  else return <Component block={block} />;
};
