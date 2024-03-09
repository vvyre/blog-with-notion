/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://seungyoon-yu.com',
  generateIndexSitemap: false,
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: ['https://example.com/server-sitemap.xml'],
  },
  outDir: './app/',
};
