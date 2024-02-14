import { Txt } from '../../typography/txt/txt';
import { Text } from './text-block';
import { LINK } from './text.css';

export function NotionText({ block }: Text) {
  const isLink = block.href;
  if (isLink)
    return (
      <Txt as="a" styleVariant={LINK} {...block.annotations}>
        {block.plain_text}
      </Txt>
    );
  else return block.plain_text;
}
