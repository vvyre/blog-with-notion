import type { NotionComponentProps } from 'types/block'

export function TableRow({ block }: NotionComponentProps<'table_row'>) {
  console.log(block)
}
