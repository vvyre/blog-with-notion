import { Block } from 'components/notion-blocks/block'
import { TraversableBlock } from 'types/block'

export default function RenderBlocks({ blocks }: { blocks: TraversableBlock[] }) {
  return blocks.map((b: TraversableBlock) => <Block key={b.id} block={b} />)
}
