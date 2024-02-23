import type { NotionBlock, NotionBlockWithChildren } from '@/_lib/types/block';

export const groupedBlocks = (blocks: (NotionBlock | NotionBlockWithChildren)[]) => {
  if (!blocks.length) return blocks;

  const result: (NotionBlock | NotionBlockWithChildren)[] = [];

  const target: Partial<Record<NotionBlockWithChildren['type'], boolean>> = {
    bulleted_list_item: true,
    numbered_list_item: true,
  };

  let prevBlock: NotionBlockWithChildren['type'] = blocks[0].type;

  const group: Partial<Record<keyof typeof target, (NotionBlock | NotionBlockWithChildren)[]>> = {
    bulleted_list_item: [],
    numbered_list_item: [],
  };

  blocks.forEach((block, idx) => {
    const currBlock = block.type;

    if (target[currBlock] === true) {
      group[currBlock]?.push(block);
      prevBlock = currBlock;
    } else {
      if (idx === blocks.length - 1 || (target[prevBlock] === true && prevBlock !== currBlock)) {
        //마지막 블록이거나 블록의 종류가 바뀌면 작업 진행 그룹을 삽입하고 초기화
        const key = `grouped_${prevBlock}`;
        result.push({
          [key]: group[prevBlock],
          //@ts-ignore
          type: key,
          id: '',
        });
        group[prevBlock] = [];
      }

      result.push(block);
      prevBlock = currBlock;
    }
  });

  return result;
};
