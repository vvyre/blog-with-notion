import { ComponentType } from 'react';
import type { CSSProp } from '@emotion/react';
import { NotionBlock } from '@/_lib/types/notion';

interface NotionPolymorphicComponentProps<T> {
  css?: CSSProp;
  block: NotionBlock<T>;
}

export interface BlockComponentMap {
  bookmark: ComponentType<NotionPolymorphicComponentProps>;
  breadcrumb: ComponentType<NotionPolymorphicComponentProps>;
  bulleted_list_item: ComponentType<NotionPolymorphicComponentProps>;
  callout: ComponentType<NotionPolymorphicComponentProps>;
  child_database: ComponentType<NotionPolymorphicComponentProps>;
  child_page: ComponentType<NotionPolymorphicComponentProps>;
  column: ComponentType<NotionPolymorphicComponentProps>;
  column_list: ComponentType<NotionPolymorphicComponentProps>;
  divider: ComponentType<NotionPolymorphicComponentProps>;
  embed: ComponentType<NotionPolymorphicComponentProps>;
  equation: ComponentType<NotionPolymorphicComponentProps>;
  file: ComponentType<NotionPolymorphicComponentProps>;
  heading_1: ComponentType<NotionPolymorphicComponentProps>;
  heading_2: ComponentType<NotionPolymorphicComponentProps>;
  heading_3: ComponentType<NotionPolymorphicComponentProps>;
  image: ComponentType<NotionPolymorphicComponentProps>;
  link_preview: ComponentType<NotionPolymorphicComponentProps>;
  link_to_page: ComponentType<NotionPolymorphicComponentProps>;
  numbered_list_item: ComponentType<NotionPolymorphicComponentProps>;
  paragraph: ComponentType<NotionPolymorphicComponentProps>;
  pdf: ComponentType<NotionPolymorphicComponentProps>;
  quote: ComponentType<NotionPolymorphicComponentProps>;
  synced_block: ComponentType<NotionPolymorphicComponentProps>;
  table: ComponentType<NotionPolymorphicComponentProps>;
  table_of_contents: ComponentType<NotionPolymorphicComponentProps>;
  table_row: ComponentType<NotionPolymorphicComponentProps>;
  template: ComponentType<NotionPolymorphicComponentProps>;
  to_do: ComponentType<NotionPolymorphicComponentProps>;
  toggle: ComponentType<NotionPolymorphicComponentProps>;
  unsupported: ComponentType<NotionPolymorphicComponentProps>;
  video: ComponentType<NotionPolymorphicComponentProps>;
}
