import { ReactNode } from 'react';
import { View } from '../../layout/view/view';

interface TagBoxProps {
  children: ReactNode;
}
export function Tagbox({ children }: TagBoxProps) {
  return <View>{children}</View>;
}
