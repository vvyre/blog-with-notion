import { Txt } from '../../typography/txt/txt';
import type { TextRichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';

export function NotionText({ block }: { block: TextRichTextItemResponse }) {
  const isLink = block.href;
  if (isLink)
    return (
      <Txt as="a" {...block.annotations}>
        {block.plain_text}
      </Txt>
    );
  else return block.plain_text;
}
