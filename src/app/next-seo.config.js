// This file contains the default SEO configuration for next-seo
// The DefaultSeo component will use these settings as a base

export default {
  titleTemplate: '%s | Cameron Cooke',
  defaultTitle: 'Cameron Cooke - Full-Stack Developer',
  description: 'Personal website of Cameron Cooke - Full-stack developer & tech enthusiast. Explore my projects, skills, and professional journey.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cameron0917.vercel.app/',
    siteName: 'Cameron Cooke',
    images: [
      {
        url: 'https://cameron0917.vercel.app//api/og',
        width: 1200,
        height: 630,
        alt: 'Cameron Cooke',
      },
    ],
  },
  twitter: {
    handle: '@cameron',
    site: '@cameron',
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
  ],
}; 