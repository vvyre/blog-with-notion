import { blockComponentMap } from './block-component-map'
import { Empty } from 'components/common/util/empty'
import { TraversableBlock } from 'types/block'

export function Block({ block }: { block: TraversableBlock }) {
  const Component = blockComponentMap[block.type]
  if (!Component) return <Empty />
  return <Component block={block} />
}
