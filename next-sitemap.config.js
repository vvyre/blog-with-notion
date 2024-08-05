/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.brewcoldblue.com/',
  generateIndexSitemap: false,
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: ['https://www.brewcoldblue.com/server-sitemap.xml'],
  },
  outDir: './app/',
};
