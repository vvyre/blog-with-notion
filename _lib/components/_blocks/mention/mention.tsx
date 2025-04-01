import { NotionBlock } from '@/_lib/types/block'
import { View } from '@/_lib/components/basics/view/view'
import { Txt } from '@/_lib/components/basics/typography/txt/txt'
import type { NotionComponentProps } from '@/_lib/types/block'
import { MentionRichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'

export function Mention({ block }: { block: MentionRichTextItemResponse }) {
  console.log('mention', block)
  return (
    <View>
      <Txt as="a" href={block.href ?? ''}>
        {block.plain_text}
      </Txt>
    </View>
  )
}
