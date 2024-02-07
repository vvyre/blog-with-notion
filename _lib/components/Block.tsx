import { ComponentPropsWithoutRef, ComponentType } from 'react';
import { Divider } from './Divider';

export type Block =
  | 'bookmark'
  | 'breadcrumb'
  | 'bulleted_list_item'
  | 'callout'
  | 'child_database'
  | 'child_page'
  | 'column'
  | 'column_list'
  | 'divider'
  | 'embed'
  | 'equation'
  | 'file'
  | 'heading_1'
  | 'heading_2'
  | 'heading_3'
  | 'image'
  | 'link_preview'
  | 'link_to_page'
  | 'numbered_list_item'
  | 'paragraph'
  | 'pdf'
  | 'quote'
  | 'synced_block'
  | 'table'
  | 'table_of_contents'
  | 'table_row'
  | 'template'
  | 'to_do'
  | 'toggle'
  | 'unsupported'
  | 'video';

interface BlockComponentMap {
  bookmark: ComponentType<{}>;
  breadcrumb: ComponentType<{}>;
  bulleted_list_item: ComponentType<{}>;
  callout: ComponentType<{}>;
  child_database: ComponentType<{}>;
  child_page: ComponentType<{}>;
  column: ComponentType<{}>;
  column_list: ComponentType<{}>;
  divider: ComponentType<{}>;
  embed: ComponentType<{}>;
  equation: ComponentType<{}>;
  file: ComponentType<{}>;
  heading_1: ComponentType<{}>;
  heading_2: ComponentType<{}>;
  heading_3: ComponentType<{}>;
  image: ComponentType<{}>;
  link_preview: ComponentType<{}>;
  link_to_page: ComponentType<{}>;
  numbered_list_item: ComponentType<{}>;
  paragraph: ComponentType<{}>;
  pdf: ComponentType<{}>;
  quote: ComponentType<{}>;
  synced_block: ComponentType<{}>;
  table: ComponentType<{}>;
  table_of_contents: ComponentType<{}>;
  table_row: ComponentType<{}>;
  template: ComponentType<{}>;
  to_do: ComponentType<{}>;
  toggle: ComponentType<{}>;
  unsupported: ComponentType<{}>;
  video: ComponentType<{}>;
}

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
  paragraph: Divider,
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

export type BlockProps<T = keyof BlockComponentMap> = {
  type: T;
  children?: ComponentType<{}>;
};
//& ComponentPropsWithoutRef<PropsOf<BlockComponentMap[T]>>;

export function Block({ type, children }: BlockProps<keyof BlockComponentMap>) {
  return blockComponentMap[type];
}
