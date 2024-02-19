import { ExtendedImageBlockObjectResponse } from '@/_lib/types/component-props';

export const getImgUrl = (block: ExtendedImageBlockObjectResponse): string => {
  const imageProps = block;
  return (imageProps.image.type === 'external' ? imageProps.image.external?.url : imageProps.image.file?.url) as string;
};
