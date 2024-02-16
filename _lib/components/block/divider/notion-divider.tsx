import { NotionPolymorphicComponentProps } from '@/_lib/types/components/component-common';
import { Divider } from '../../layout/divider/divider';

export function NotionDivider({ block }: NotionPolymorphicComponentProps<'divider'>) {
  return <Divider />;
}
