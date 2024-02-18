import { NotionImageResponse } from '@/_lib/types/components/component-props';

export const getImgUrl = (block: NotionImageResponse): string => {
  const imageProps = block?.block || block;
  return (imageProps.image.type === 'external' ? imageProps.image.external?.url : imageProps.image.file?.url) as string;
};
