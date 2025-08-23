'use client'
import { View } from 'components/common/view/view'
import hljs from 'highlight.js'
import { CODE_BLOCK, CODE_LANGUAGE, CODE_PRE } from './code.css'
import { Txt } from 'components/common/typography/txt/txt'
import { Flex } from 'components/common/flex/flex'
import { getCodeLanguage } from 'utils/block-processing/get-code-language'
import type { NotionComponentProps } from 'types/block'
import { Btn } from 'components/common/button/btn'
import { useTextCopy } from '@frfla/react-hooks'
import { CopyIcon, RocketIcon } from '@radix-ui/react-icons'

export function Code({ block }: NotionComponentProps<'code'>) {
  const codeLang = getCodeLanguage(block.code.language)
  const codeText = block.code.rich_text.map(txt => txt.plain_text).join('\n')
  const codeHtml = hljs.highlight(codeText, {
    language: block.code.language,
  }).value

  const [copy, isCopied] = useTextCopy(1000)
  return (
    <View as="div" className={CODE_BLOCK}>
      <Flex justifyContent="spaceBetween" alignItems="center">
        <Txt className={CODE_LANGUAGE}>{codeLang}</Txt>
        <Btn onClick={() => copy(codeText)}>
          {isCopied ? <RocketIcon /> : <CopyIcon />}
        </Btn>
      </Flex>
      <pre className={CODE_PRE} dangerouslySetInnerHTML={{ __html: codeHtml }} />
    </View>
  )
}
