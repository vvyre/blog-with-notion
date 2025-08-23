import { S3 } from '@aws-sdk/client-s3'
import { aws } from 'constants/envs'

export const getBackgroundImgs = async (): Promise<{ key: string | undefined }[]> => {
  const { accessKeyId, secretAccessKey, region, bucketName, bucketDirectory } = aws

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
      })) ?? []

    return files
  } catch (error) {
    console.warn('AWS ERROR', error)
    return [{ key: '' }]
  }
}
