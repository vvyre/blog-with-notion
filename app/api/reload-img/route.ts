import { getSingleBlock } from '@/fetch/notion';
import { getBlurredImg } from '@/utils/get-blurred-img';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { id } = body;
    const block = await getSingleBlock(id as string);
    const processedBlock = await getBlurredImg(block);
    if (block) return Response.json(processedBlock);
    else return Response.json({ block: null });
  } catch (err) {
    console.log('err', err);
    return Response.json({ block: null });
  }
}
