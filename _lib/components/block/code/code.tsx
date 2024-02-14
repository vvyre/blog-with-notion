import { View } from '../../layout/view/view';
import { Txt } from '../../typography/txt/txt';
import { CodeBlock } from './code-block';
import { RichText } from '@/_lib/types/block';

export function Code({ block }: CodeBlock) {
  return (
    <View as="div">
      <Txt as="pre" code>
        <span>language: {block.code.language}</span>
        {block.code.rich_text.map((txt: RichText) => txt.text.content)}
      </Txt>
    </View>
  );
}
