import { NotionComponentProps } from '@/_lib/types/components/component-common';
import { NotionDivider } from '@/_lib/types/components/component-props';
import { Divider } from '../../layout/divider/divider';

export function NotionDivider({ block }: NotionComponentProps<NotionDivider>) {
  return <Divider />;
}
