import { RichText } from '@/_lib/types/block';
import type { Bookmark } from './bookmark-block';
import { useId } from 'react';
import { View } from '../../layout/view/view';
import { Txt } from '../../typography/txt/txt';
import { BASE } from './bookmark.css';

export function Bookmark({ block }: Bookmark) {
  const id = useId();
  return (
    <View styleVariant={BASE}>
      <a href={block.bookmark.url} target="_blank">
        <View as="div">
          {block.bookmark.caption.map((txt: RichText) => (
            <Txt key={id} as="p" richText={txt} />
          ))}
        </View>
      </a>
    </View>
  );
}
