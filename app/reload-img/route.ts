import { NotionBlock } from '@/_lib/types/block';
import { getSingleBlock } from '@/fetch/notion';
import { getBlurredImg } from '@/utils/get-blurred-img';
import { NextApiRequest, NextApiResponse } from 'next';

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.query;
    const block = await getSingleBlock<NotionBlock<'image'>>(id as string);
    const processedImage = await getBlurredImg(block);

    if (block) res.status(200).json({ block: processedImage });
  } catch (err) {
    res.status(400).json({ block: null });
  }
}
