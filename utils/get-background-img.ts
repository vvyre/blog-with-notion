import { S3 } from '@aws-sdk/client-s3'
import { aws } from '@/env'
import { getRandomInt } from './get-random-int'

export const getBackgroundImg = async (): Promise<[string, string]> => {
  const { accessKeyId, secretAccessKey, region, bucketName, bucketDirectory } =
    aws

  const s3 = new S3({
    credentials: {
      accessKeyId,
      secretAccessKey,
    },

    region,
  })

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

    const NUMS_OF_FILES = files.length
    const idx = getRandomInt([0, NUMS_OF_FILES])

    const src = aws.cloudfrontRoot + '/' + files[idx].key || ''
    const title = files[idx].key?.replace(aws.bucketDirectory, '') || ''

    return [src, title]
  } catch (error) {
    console.warn('AWS ERROR', error)
    return ['', '']
  }
}
