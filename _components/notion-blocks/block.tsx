import { EntireNotionBlockResponse } from 'types/block-object-response-map'
import { blockComponentMap } from './block-component-map'
import { Empty } from '../basics/util/empty'

export function Block({ block }: { block: EntireNotionBlockResponse }) {
  const Component = blockComponentMap[block.type]
  if (!Component) return <Empty />
  return <Component block={block} />
}
