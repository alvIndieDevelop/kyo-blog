/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL || "https://kyo-sai-blog.netlify.app",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/api/*"],
  transform: async (config, path) => {
    // Higher priority for key pages
    const priorities = {
      "/": 1.0,
      "/servicios": 0.9,
      "/agenda": 0.9,
      "/blog": 0.8,
      "/about": 0.7,
      "/recursos": 0.6,
      "/contact": 0.5,
    };
    const changefreqs = {
      "/": "daily",
      "/blog": "daily",
      "/servicios": "monthly",
      "/agenda": "monthly",
      "/about": "monthly",
      "/recursos": "monthly",
    };

    return {
      loc: path,
      changefreq: changefreqs[path] || config.changefreq,
      priority: priorities[path] || (path.startsWith("/blog/") ? 0.8 : 0.7),
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
  robotsTxtOptions: {
    additionalSitemaps: [],
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
  },
};
