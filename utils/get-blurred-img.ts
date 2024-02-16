import { NotionBlock } from '@/_lib/types/block';
import { getPlaiceholder } from 'plaiceholder';

export const getBlurredImg = async (block: NotionBlock): Promise<NotionBlock> => {
  const imgUrl = block.image.type === 'external' ? block.image.external.url : block.image.file.url;

  const buffer = await fetch(imgUrl).then(async res => Buffer.from(await res.arrayBuffer()));
  const { base64 } = await getPlaiceholder(buffer);

  return {
    ...block,
    image: {
      ...block.image,
      blurDataURL: base64,
    },
  };
};
