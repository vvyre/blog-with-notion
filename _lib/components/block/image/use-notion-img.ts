import { ExtendedImageBlockObjectResponse } from '@/_lib/types/component-props';
import { getImgUrl } from '@/utils/get-img-url';
import { useEffect, useState } from 'react';

export const useNotionImg = (block: ExtendedImageBlockObjectResponse) => {
  const [imgUrl, setImgUrl] = useState<string>(getImgUrl(block));
  const [imgError, setImgError] = useState<boolean>(false);
  const [fetchError, setFetchError] = useState<any>(null);

  async function reload() {
    setImgError(true);
  }

  useEffect(() => {
    console.log('effect');
    (async () => {
      if (imgError) {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_ROOT}/api/reload-img`, {
            body: JSON.stringify({ id: block.id }),
            method: 'POST',
          });
          const reloadedImg = await response.json();
          setImgUrl(getImgUrl(reloadedImg));
        } catch (err) {
          console.log(err);
          setFetchError(err);
        }
      }
    })();
  }, [imgError]);

  return { imgUrl, reload, imgError, fetchError };
};
