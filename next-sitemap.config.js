/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.wyre.run/',
  generateIndexSitemap: false,
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: ['https://www.wyre.run/server-sitemap.xml'],
  },
  outDir: './app/',
}
