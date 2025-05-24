import { Block } from './block'
import { Fragment } from 'react'
import { EntireNotionBlockResponse } from 'types/block-object-response-map'

export function ChildrenBlocks({
  childrenBlocks,
}: {
  childrenBlocks: EntireNotionBlockResponse[]
}) {
  return (
    <Fragment>
      {childrenBlocks?.map((block: EntireNotionBlockResponse) => {
        return <Block key={block.id} block={block} />
      })}
    </Fragment>
  )
}
