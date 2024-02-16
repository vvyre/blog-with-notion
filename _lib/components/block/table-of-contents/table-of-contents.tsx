import type { NotionComponentProps } from '@/_lib/types/components/component-common';
import type { TableOfContents } from '@/_lib/types/components/component-props';

export function TableOfContents({ block }: NotionComponentProps<TableOfContents>) {
  console.log(block);
}
