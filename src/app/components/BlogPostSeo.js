import Script from 'next/script';

export default function BlogPostSeo({ 
  title, 
  description, 
  url, 
  image, 
  publishedDate, 
  modifiedDate, 
  authorName = 'Cameron Cooke'
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    url: `https://cameron917.vercel.app${url || ''}`,
    image: image ? `https://cameron917.vercel.app${image}` : undefined,
    datePublished: publishedDate,
    dateModified: modifiedDate || publishedDate,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Person',
      name: 'Cameron Cooke',
      logo: {
        '@type': 'ImageObject',
        url: 'https://cameron917.vercel.app/favicon.ico',
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://cameron917.vercel.app${url || ''}`,
    }
  };

  return (
    <Script
      id="structured-data-blog-post"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      strategy="afterInteractive"
    />
  );
} 