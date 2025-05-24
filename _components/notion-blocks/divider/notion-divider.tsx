import { Divider } from 'components/basics/divider/divider'
import type { NotionComponentProps } from 'types/block'

export function NotionDivider({ block }: NotionComponentProps<'divider'>) {
  block
  return <Divider />
}
