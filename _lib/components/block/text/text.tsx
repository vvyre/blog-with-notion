import { NotionComponentProps } from '@/_lib/types/component-common';
import { Txt } from '../../typography/txt/txt';

export function NotionText({ block }: NotionComponentProps<'text'>) {
  const isLink = block.href;
  if (isLink)
    return (
      <Txt as="a" {...block.annotations}>
        {block.plain_text}
      </Txt>
    );
  else return block.plain_text;
}
