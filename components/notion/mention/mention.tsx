import { NotionBlock } from 'types/block'
import { View } from 'components/common/view/view'
import { Txt } from 'components/common/typography/txt/txt'
import type { NotionComponentProps } from 'types/block'
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
