import { Block } from './block'
import { Fragment } from 'react'
import { TraversableBlock } from 'types/block'

export function ChildrenBlocks({
  childrenBlocks,
}: {
  childrenBlocks: TraversableBlock[]
}) {
  return (
    <Fragment>
      {childrenBlocks?.map((block: TraversableBlock) => {
        return <Block key={block.id} block={block} />
      })}
    </Fragment>
  )
}
