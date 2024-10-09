import type { NotionComponentProps } from '@/_lib/types/block';

export function Table({ block }: NotionComponentProps<'table'>) {
  console.log(block);
}
