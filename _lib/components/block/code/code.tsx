import { View } from '../../layout/view/view';
import { CodeBlock } from './code-block';
import { RichText } from '@/_lib/types/block';
import hljs from 'highlight.js';
import { CODE_BLOCK, CODE_LANGUAGE, CODE_PRE } from './code.css';
import { Txt } from '../../typography/txt/txt';
import { Flex } from '../../layout/flex/flex';
import { getCodeLanguage } from '@/utils/get-code-language';

export function Code({ block }: CodeBlock) {
  console.log(block);
  const codeHtml = hljs.highlight(block.code.rich_text.map((txt: RichText) => txt.text.content).join('\n'), {
    language: block.code.language,
  }).value;
  return (
    <View as="div" styleVariant={CODE_BLOCK}>
      <Flex justifyContents="spaceBetween" alignItems="center">
        <Txt bold size="XS" styleVariant={CODE_LANGUAGE}>
          {getCodeLanguage(block.code.language)}
        </Txt>
      </Flex>
      <pre className={CODE_PRE} dangerouslySetInnerHTML={{ __html: codeHtml }} />
    </View>
  );
}
