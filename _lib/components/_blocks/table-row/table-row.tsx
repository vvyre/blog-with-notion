import type { NotionComponentProps } from '@/_lib/types/block';

export function TableRow({ block }: NotionComponentProps<'table_row'>) {
  console.log(block);
}
