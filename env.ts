export const notion_env = {
  api_key: process.env.NOTION_KEY || '',
  database_id: process.env.DATABASE_ID || '',
  about_id: process.env.NOTION_ABOUT_ID || '',
};

export const site_env = {
  root: process.env.NEXT_PUBLIC_ROOT || '',
  gv: process.env.GOOGLE_SITE_VERIFICATION || '',
  nv: process.env.NAVER_SITE_VERIFICATION || '',
};
