import { Divider } from '../../layout/divider/divider';
import type { NotionComponentProps } from '@/_lib/types/block';

export function NotionDivider({ block }: NotionComponentProps<'divider'>) {
  return <Divider />;
}
