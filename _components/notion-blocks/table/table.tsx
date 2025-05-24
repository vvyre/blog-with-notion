import type { NotionComponentProps } from 'types/block'

export function Table({ block }: NotionComponentProps<'table'>) {
  console.log(block)
}
