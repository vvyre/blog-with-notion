import { BlockTypes, NotionBlock } from '@/_lib/types/block';

export const groupedBlocks = (blocks: NotionBlock[]) => {
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
      group[currBlock]?.push(block);
      prevBlock = currBlock;
    } else {
      if (target[prevBlock] === true && prevBlock !== currBlock) {
        result.push({
          [`${prevBlock}s`]: group[prevBlock],
          type: `${prevBlock}s` as BlockTypes,
          id: 'ul-list-item',
        });
      }

      result.push(block);
      prevBlock = currBlock;
    }
  });

  return result;
};
