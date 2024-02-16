import type { NotionComponentProps } from '@/_lib/types/components/component-common';
import type { Text } from '@/_lib/types/components/component-props';
import { Txt } from '../../typography/txt/txt';
import { LINK } from './text.css';

export function NotionText({ block }: NotionComponentProps<Text>) {
  const isLink = block.href;
  if (isLink)
    return (
      <Txt as="a" styleVariant={LINK} {...block.annotations}>
        {block.plain_text}
      </Txt>
    );
  else return block.plain_text;
}
