import type { GetBlockResponse } from '@notionhq/client/build/src/api-endpoints';
import loadingImg from '#/img/loading.svg';
// import { getPlaiceholder } from 'plaiceholder';

export const getBlurredImg = async (block: GetBlockResponse) => {
  if ('image' in block) {
    const imgUrl = block.image.type === 'external' ? block.image.external?.url : block.image.file?.url;
    // const buffer = await fetch(imgUrl as string).then(async res => Buffer.from(await res.arrayBuffer()));
    // const { base64 } = await getPlaiceholder(buffer);

    return {
      ...block,
      image: {
        ...block.image,
        blurDataURL: loadingImg,
      },
    };
  }
};
