import type { NotionComponentProps } from '@/_lib/types/components/component-common';
import type { TableRow } from '@/_lib/types/components/component-props';

export function TableRow({ block }: NotionComponentProps<TableRow>) {
  console.log(block);
}
