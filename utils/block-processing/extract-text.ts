import { RichTextItemResponse } from '@notionhq/client'
import { BlockWithRichText, TraversableBlock } from 'types/block'

function hasRichText(block: TraversableBlock): block is BlockWithRichText {
  const payload: any = (block as any)[block.type]
  return payload && Array.isArray(payload.rich_text)
}

function hasChildren(block: TraversableBlock): block is TraversableBlock & {
  children: TraversableBlock[]
} {
  return block.has_children && Array.isArray((block as any).children)
}
export function extractTxt(root: TraversableBlock[]): string {
  const queue: TraversableBlock[] = [...root]
  const texts: string[] = []

  while (queue.length) {
    const block = queue.shift()!

    if (hasRichText(block)) {
      const line = (block as any)[block.type].rich_text
        .map((txt: RichTextItemResponse) => txt.plain_text)
        .join('')
      if (line.trim()) texts.push(line)
    }

    if (hasChildren(block)) {
      queue.push(...(block.children as TraversableBlock[]))
    }
  }

  return texts.join('\n')
}
