export const notion_env = {
  api_key: process.env.NOTION_KEY || '',
  database_id: process.env.NOTION_BLOG_DATABASE_ID || '',
  faq_id: process.env.NOTION_FAQ_PAGE_ID || '',
  profile_id: process.env.NOTION_PROFILE_PAGE_ID || '',
};

export const site_env = {
  root: process.env.NEXT_PUBLIC_ROOT || '',
  gv: process.env.GOOGLE_SITE_VERIFICATION || '',
  nv: process.env.NAVER_SITE_VERIFICATION || '',
  utterances: process.env.NEXT_PUBLIC_UTTERANCES || '',
};

export const isr_revalidate_period = 1200;
