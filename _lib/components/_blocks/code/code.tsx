'use client'
import { View } from '../../basics/view/view'
import hljs from 'highlight.js'
import { CODE_BLOCK, CODE_LANGUAGE, CODE_PRE } from './code.css'
import { Txt } from '../../basics/typography/txt/txt'
import { Flex } from '../../basics/flex/flex'
import { getCodeLanguage } from '@/utils/get-code-language'
import type { NotionComponentProps } from '@/_lib/types/block'
import { Btn } from '../../basics/button/btn'
import { useTextCopy } from '@syyu/util/react'

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
        <Btn onClick={() => copy(codeText)}>{isCopied ? '😆' : '📋'}</Btn>
      </Flex>
      <pre
        className={CODE_PRE}
        dangerouslySetInnerHTML={{ __html: codeHtml }}
      />
    </View>
  )
}
