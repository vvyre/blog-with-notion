export const notion_env = {
  api_key: process.env.NOTION_KEY ?? '',
  database_id: process.env.NOTION_BLOG_DATABASE_ID ?? '',
  about_id: process.env.NOTION_ABOUT_PAGE_ID ?? '',
}

export const site_env = {
  root: process.env.NEXT_PUBLIC_ROOT ?? '',
  engineering: (process.env.NEXT_PUBLIC_ROOT ?? '') + '/engineering',
  gv: process.env.GOOGLE_SITE_VERIFICATION ?? '',
  nv: process.env.NAVER_SITE_VERIFICATION ?? '',
  giscus: process.env.NEXT_PUBLIC_GISCUS_REPO ?? '',
  giscus_id: process.env.NEXT_PUBLIC_GISCUS_ID ?? '',
}

export const aws = {
  accessKeyId: process.env.AWS_ACCESS_KEY_ID ?? '',
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY ?? '',
  region: process.env.AWS_REGION ?? '',
  bucketName: process.env.AWS_BUCKET_NAME ?? '',
  bucketDirectory: process.env.AWS_BUCKET_BACKGROUND_DIRECTORY ?? '',
  cloudfrontRoot: process.env.NEXT_PUBLIC_AWS_BUCKET_CLOUDFRONT_ROOT ?? '',
}
