import { NotionPolymorphicComponentProps } from '@/_lib/types/components';
import { Divider } from '../../layout/divider/divider';

export function NotionDivider({ block }: NotionPolymorphicComponentProps<'divider'>) {
  return <Divider />;
}
