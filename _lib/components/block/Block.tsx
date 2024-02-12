import { Divider } from '../layout/divider/Divider';
import { ComponentPropsWithoutRef } from 'react';
import { BlockTypes, NotionBlock } from '@/_lib/types/block';
import { BlockComponentMap } from '@/_lib/types/components';
import { Paragraph } from './paragraph/paragraph';

const blockComponentMap: BlockComponentMap = {
  bookmark: Divider,
  breadcrumb: Divider,
  bulleted_list_item: Divider,
  callout: Divider,
  child_database: Divider,
  child_page: Divider,
  column: Divider,
  column_list: Divider,
  divider: Divider,
  embed: Divider,
  equation: Divider,
  file: Divider,
  heading_1: Divider,
  heading_2: Divider,
  heading_3: Divider,
  image: Divider,
  link_preview: Divider,
  link_to_page: Divider,
  numbered_list_item: Divider,
  paragraph: Paragraph,
  pdf: Divider,
  quote: Divider,
  synced_block: Divider,
  table: Divider,
  table_of_contents: Divider,
  table_row: Divider,
  template: Divider,
  to_do: Divider,
  toggle: Divider,
  unsupported: Divider,
  video: Divider,
};

type BlockProps<T extends BlockTypes> = {
  block: NotionBlock<T>;
} & ComponentPropsWithoutRef<BlockComponentMap[T]>;

export const Block = <T extends BlockTypes>({ block }: BlockProps<T>) => {
  const Component = blockComponentMap[block.type];
  if (!Component) return <div />;
  else return <Component block={block} />;
};
