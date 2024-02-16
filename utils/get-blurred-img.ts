import { NotionBlock } from '@/_lib/types/block';
import { NotionImageResponse } from '@/_lib/types/components/component-props';
import { getPlaiceholder } from 'plaiceholder';

export const getBlurredImg = async (block: NotionImageResponse['block']) => {
  const imgUrl = block.image.type === 'external' ? block.image.external?.url : block.image.file?.url;

  const buffer = await fetch(imgUrl as string).then(async res => Buffer.from(await res.arrayBuffer()));
  const { base64 } = await getPlaiceholder(buffer);

  return {
    ...block,
    image: {
      ...block.image,
      blurDataURL: base64,
    },
  };
};
