/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://amon-sharma.vercel.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://amon-sharma.vercel.app/sitemap.xml',
    ],
  },
  changefreq: 'weekly',
  priority: 0.7,
  lastmod: new Date().toISOString(),
  transform: async (config, path) => {
    // Custom priority and changefreq for different pages
    const customPriority = {
      '/': 1.0,
      '/about': 0.8,
      '/projects': 0.9,
      '/contact': 0.7,
    };

    const customChangefreq = {
      '/': 'weekly',
      '/about': 'monthly',
      '/projects': 'weekly',
      '/contact': 'monthly',
    };

    return {
      loc: path,
      changefreq: customChangefreq[path] || config.changefreq,
      priority: customPriority[path] || config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
