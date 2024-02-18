import { NotionBlock } from '@/_lib/types/block';
import { getBlurredImg } from './get-blurred-img';
import { groupedBlocks } from './grouped-blocks';
import pMap from 'p-map';

export const processedBlock = async (blocks: NotionBlock[]) => {
  const IMG_PROCESSED = await pMap(
    blocks,
    async block => {
      if (block.type === 'image') return (await getBlurredImg(block)) || block;
      else return block;
    },
    {
      concurrency: 5,
    }
  );

  const LIST_GROUPPED = groupedBlocks(IMG_PROCESSED);
  return LIST_GROUPPED;
};
