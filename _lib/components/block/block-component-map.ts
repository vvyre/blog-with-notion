import { BlockComponentMap } from '../../types/components';
import { BreadCrumb } from './breadcrumb/breadcrumb';
import { NotionDivider } from './divider/divider';
import { Heading_1 } from './headings/heading_1';
import { Heading_2 } from './headings/heading_2';
import { Heading_3 } from './headings/heading_3';
import { Paragraph } from './paragraph/paragraph';
import { Divider } from '../layout/divider/Divider';

export const blockComponentMap: BlockComponentMap = {
  bookmark: Divider,
  breadcrumb: BreadCrumb,
  bulleted_list_item: Divider,
  callout: Divider,
  child_database: Divider,
  child_page: Divider,
  column: Divider,
  column_list: Divider,
  divider: NotionDivider,
  embed: Divider,
  equation: Divider,
  file: Divider,
  heading_1: Heading_1,
  heading_2: Heading_2,
  heading_3: Heading_3,
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
