import { RichText } from '@/_lib/types/block';
import { useId } from 'react';
import { Txt } from '../../typography/txt/txt';
import { Heading } from '../../typography/heading/heading';
import { View } from '../../layout/view/view';
import { CALLOUT, CALLOUT_TEXT } from './callout.css';
import { CalloutResponse } from '@/_lib/types/components/component-props';

export function Callout({ block }: CalloutResponse) {
  const id = useId();
  return (
    <View styleVariant={CALLOUT}>
      <Heading as="span" size="L">
        {block.callout.icon.emoji}
      </Heading>
      {block.callout.rich_text.map((txt: RichText) => (
        <Txt key={id} as="p" richText={txt} styleVariant={CALLOUT_TEXT} />
      ))}
    </View>
  );
}
