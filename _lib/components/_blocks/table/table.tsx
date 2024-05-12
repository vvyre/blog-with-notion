import type { NotionComponentProps } from '@/_lib/types/component-common';

export function Table({ block }: NotionComponentProps<'table'>) {
  console.log(block);
}
