import type { NotionComponentProps } from '@/_lib/types/block'

export function TableOfContents({
  block,
}: NotionComponentProps<'table_of_contents'>) {
  console.log(block)
}
