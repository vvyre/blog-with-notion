import { NotionComponentProps } from '@/_lib/types/block'
import { ChildrenBlocks } from '../children-blocks'
import { BASE, SUMMARY_TXT } from './toggle.css'
import { Txt } from '@/_lib/components/basics/typography/txt/txt'
import { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'
import { View } from '@/_lib/components/basics/view/view'

export function Toggle({ block }: NotionComponentProps<'toggle'>) {
  return (
    <details className={BASE}>
      <summary>
        {block.toggle.rich_text.map((txt: RichTextItemResponse, idx: number) => (
          <Txt key={idx} as="span" richText={txt} className={SUMMARY_TXT} />
        ))}
      </summary>
      <View>{block.toggle.children && <ChildrenBlocks childrenBlocks={block.toggle.children} />}</View>
    </details>
  )
}
