import { NotionPolymorphicComponentProps } from '@/_lib/types/components';
import { Divider } from '../../layout/divider/Divider';

export function NotionDivider({ block }: NotionPolymorphicComponentProps<'divider'>) {
  return <Divider />;
}
