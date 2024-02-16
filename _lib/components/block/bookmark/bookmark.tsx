import type { BookmarkResponse } from '@/_lib/types/components/component-props';
import type { RichText } from '@/_lib/types/block';
import { useId } from 'react';
import { View } from '../../layout/view/view';
import { Txt } from '../../typography/txt/txt';
import { BASE } from './bookmark.css';

export function Bookmark({ block }: BookmarkResponse) {
  //TODO: unfurl 패키지 적용해 클라이언트에서 북마크 미리보기 생성
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
