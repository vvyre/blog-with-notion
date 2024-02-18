import { useId } from 'react';
import { View } from '../../layout/view/view';
import { Txt } from '../../typography/txt/txt';
import { BASE } from './bookmark.css';
import { NotionComponentProps } from '@/_lib/types/component-common';
import { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';

export function Bookmark({ block }: NotionComponentProps<'bookmark'>) {
  //TODO: unfurl 패키지 적용해 클라이언트에서 북마크 미리보기 생성
  const id = useId();
  return (
    <View styleVariant={BASE}>
      <a href={block.bookmark.url} target="_blank">
        <View as="div">
          {block.bookmark.caption.map((txt: RichTextItemResponse) => (
            <Txt key={id} as="p" richText={txt} />
          ))}
        </View>
      </a>
    </View>
  );
}
