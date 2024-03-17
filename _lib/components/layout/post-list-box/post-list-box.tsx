import { ReactNode } from 'react';
import { View } from '../view/view';
import { POST_LIST_CENTERED } from './post-list-box.css';

export function PostListBox({ children }: { children: ReactNode }) {
  return (
    <View as="ul" styleVariant={POST_LIST_CENTERED}>
      {children}
    </View>
  );
}
