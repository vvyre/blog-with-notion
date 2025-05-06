import { Divider } from '@/_lib/components/basics/divider/divider'
import type { NotionComponentProps } from '@/_lib/types/block'

export function NotionDivider({ block }: NotionComponentProps<'divider'>) {
  block
  return <Divider />
}
