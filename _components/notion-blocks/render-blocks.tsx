import { Block } from 'components/notion-blocks/block'
import type { EntireNotionBlockResponse } from 'types/block-object-response-map'

export default function RenderBlocks({
  blocks,
}: {
  blocks: EntireNotionBlockResponse[]
}) {
  return blocks.map((b: EntireNotionBlockResponse) => <Block key={b.id} block={b} />)
}
