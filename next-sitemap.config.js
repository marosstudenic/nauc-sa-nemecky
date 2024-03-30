/** @type {import('next-sitemap').IConfig} */

const categories = require("./src/app/pre-koho-su-kurzy/categories.ts")

module.exports = {
  generateRobotsTxt: true,
  siteUrl: process.env.NEXT_PUBLIC_HOST_URL,
  dynamicRoutes: async () => {
    return categories.map((category) => ({
      // Add dynamic routes from the [category] folder
      url: '/pre-koho-su-kurzy/' + category.id, changefreq: 'daily', priority: 0.7,
      // Add more dynamic routes as needed
    }))
  },
};