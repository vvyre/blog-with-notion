import { NextApiRequest, NextApiResponse } from 'next'
import { S3 } from '@aws-sdk/client-s3';
import { aws } from '@/env'
import { NextRequest, NextResponse } from 'next/server'

const { accessKeyId, secretAccessKey, region, bucketName, bucketDirectory } =
  aws

const s3 = new S3({
  credentials: {
    accessKeyId,
    secretAccessKey,
  },

  region,
})

export default async function GET(req: NextRequest) {
  try {
    const params = {
      Bucket: bucketName,
      Prefix: bucketDirectory,
    }

    const data = await s3.listObjectsV2(params)

    const files =
      data.Contents?.map(item => ({
        key: item.Key,
        size: item.Size,
        lastModified: item.LastModified,
      })) || []

    return Response.json({ files })
  } catch (error) {
    console.error('AWS ERROR', error)
    return Response.json({ error: 'AWS ERROR' })
  }
}
