import { RichText } from '@/_lib/types/block';
import { NotionPolymorphicComponentProps } from '@/_lib/types/components';
import { useId } from 'react';
import { Txt } from '../../typography/txt/txt';
import { Heading } from '../../typography/heading/heading';

export function Callout({ block }: NotionPolymorphicComponentProps<'callout'>) {
  const id = useId();
  return (
    <>
      <Heading as="h4">{block.callout.icon.emoji}</Heading>
      {block.callout.rich_text.map((txt: RichText) => (
        <Txt key={id} as="p" richText={txt} />
      ))}
    </>
  );
}
