import { BlockTypes, NotionBlock } from '@/_lib/types/block';
import { NotionComponents } from '@/_lib/types/components/component-props';

export const groupedBlocks = (blocks: Array<NotionComponents['block']>) => {
  const result: NotionBlock[] = [];

  const target: Partial<Record<BlockTypes, boolean>> = {
    bulleted_list_item: true,
    numbered_list_item: true,
  };

  let prevBlock = blocks[0].type;

  const group: Partial<Record<BlockTypes, NotionBlock[]>> = {
    bulleted_list_item: [],
    numbered_list_item: [],
  };

  blocks.forEach(block => {
    const currBlock = block.type;

    if (target[currBlock] === true) {
      group[currBlock]?.push(block as NotionBlock);
      prevBlock = currBlock;
    } else {
      if (target[prevBlock] === true && prevBlock !== currBlock) {
        result.push({
          [`${prevBlock}s`]: group[prevBlock],
          //@ts-expect-error
          type: `${prevBlock}s` as BlockTypes,
          id: 'ul-list-item',
        });
      }

      result.push(block as NotionBlock);
      prevBlock = currBlock;
    }
  });

  return result;
};
