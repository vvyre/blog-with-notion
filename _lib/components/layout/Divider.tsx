import { ComponentPropsWithoutRef } from 'react';
import { NotionPolymorphicComponentProps } from '../block/types';

type DividerProps = Partial<NotionPolymorphicComponentProps<'divider'>> &
  ComponentPropsWithoutRef<'hr'>;

export function Divider({ block }: DividerProps) {
  return <hr />;
}
