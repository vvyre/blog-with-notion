import type { NotionComponentProps } from '@/_lib/types/components/component-common';
import type { Table } from '@/_lib/types/components/component-props';

export function Table({ block }: NotionComponentProps<Table>) {
  console.log(block);
}
