export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/blog',
        '/blog-details',
        '/credentials',
        '/work-details',
        '/credentials/admin'
      ],
    },
    sitemap: 'https://cameron917.vercel.app/sitemap.xml',
  }
} 