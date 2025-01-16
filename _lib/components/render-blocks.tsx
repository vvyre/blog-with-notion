import { Block } from '@/_lib/components/_blocks/block'
import type { EntireNotionBlockResponse } from '@/_lib/types/block-object-response-map'

export default function RenderBlocks({
  blocks,
}: {
  blocks: EntireNotionBlockResponse[]
}) {
  return blocks.map((b: EntireNotionBlockResponse) => (
    <Block key={b.id} block={b} />
  ))
}
