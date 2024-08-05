export const notion_env = {
  api_key: process.env.NOTION_KEY || '',
  database_id: process.env.NOTION_BLOG_DATABASE_ID || '',
  asdf_id: process.env.NOTION_ASDF_DATABASE_ID || '',
  about_id: process.env.NOTION_ABOUT_PAGE_ID || '',
  profile_id: process.env.NOTION_PROFILE_PAGE_ID || '',
};

export const site_env = {
  root: process.env.NEXT_PUBLIC_ROOT || '',
  engineering: (process.env.NEXT_PUBLIC_ROOT || '') + 'engineering/',
  asdf: (process.env.NEXT_PUBLIC_ROOT || '') + 'asdf/',
  gv: process.env.GOOGLE_SITE_VERIFICATION || '',
  nv: process.env.NAVER_SITE_VERIFICATION || '',
  utterances: process.env.NEXT_PUBLIC_UTTERANCES || '',
  giscus: process.env.NEXT_PUBLIC_GISCUS_REPO || '',
  giscus_id: process.env.NEXT_PUBLIC_GISCUS_ID || '',
};

export const isr_revalidate_period = 3600;
