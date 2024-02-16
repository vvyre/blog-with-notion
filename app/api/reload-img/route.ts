import { NotionBlock } from '@/_lib/types/block';
import { NotionImageResponse } from '@/_lib/types/components/component-props';
import { getSingleBlock } from '@/fetch/notion';
import { getBlurredImg } from '@/utils/get-blurred-img';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { id } = body;
    const block = await getSingleBlock<NotionBlock>(id as string);
    const processedImage = await getBlurredImg(block as NotionImageResponse['block']);

    if (block) Response.json({ block: processedImage });
    else Response.json({ block: null });
  } catch (err) {
    Response.json({ block: null });
  }
}
