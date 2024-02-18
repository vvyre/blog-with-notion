import { BlockTypes, NotionBlock } from '@/_lib/types/block';

export const groupedBlocks = (blocks: NotionBlock[]) => {
  const result: NotionBlock[] = [];

  const target: Record<BlockTypes, boolean> = {
    bulleted_list_item: true,
    numbered_list_item: true,
    code: false,
    embed: false,
    table: false,
    template: false,
    video: false,
    image: false,
    text: false,
    file: false,
    column: false,
    bookmark: false,
    breadcrumb: false,
    bulleted_list_items: false,
    callout: false,
    child_database: false,
    child_page: false,
    column_list: false,
    divider: false,
    equation: false,
    heading_1: false,
    heading_2: false,
    heading_3: false,
    link_preview: false,
    link_to_page: false,
    mention: false,
    numbered_list_items: false,
    paragraph: false,
    pdf: false,
    quote: false,
    synced_block: false,
    table_of_contents: false,
    table_row: false,
    to_do: false,
    toggle: false,
    unsupported: false,
    audio: false,
  };

  let prevBlock = blocks[0].type;

  const group: Record<BlockTypes, NotionBlock[]> = {
    bulleted_list_item: [],
    numbered_list_item: [],
    code: [],
    embed: [],
    table: [],
    template: [],
    video: [],
    image: [],
    text: [],
    file: [],
    column: [],
    bookmark: [],
    breadcrumb: [],
    bulleted_list_items: [],
    callout: [],
    child_database: [],
    child_page: [],
    column_list: [],
    divider: [],
    equation: [],
    heading_1: [],
    heading_2: [],
    heading_3: [],
    link_preview: [],
    link_to_page: [],
    mention: [],
    numbered_list_items: [],
    paragraph: [],
    pdf: [],
    quote: [],
    synced_block: [],
    table_of_contents: [],
    table_row: [],
    to_do: [],
    toggle: [],
    unsupported: [],
    audio: [],
  };

  blocks.forEach(block => {
    const currBlock = block.type;

    if (target[currBlock] === true) {
      group[currBlock]?.push(block);
      prevBlock = currBlock;
    } else {
      if (target[prevBlock] === true && prevBlock !== currBlock) {
        const key = `${prevBlock}s`;
        result.push({
          [key]: group[prevBlock],
          // @ts-ignore
          type: key,
          id: 'ul-list-item',
        });
      }

      result.push(block);
      prevBlock = currBlock;
    }
  });

  return result;
};
