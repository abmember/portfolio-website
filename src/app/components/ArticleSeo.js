import { ArticleJsonLd } from 'next-seo';

export default function ArticleSeo({ title, description, publishedTime, modifiedTime, url, images = [], authorName = 'Cameron Cooke' }) {
  return (
    <ArticleJsonLd
      useAppDir={true}
      url={`https://cameron917.vercel.app${url}`}
      title={title}
      images={images}
      datePublished={publishedTime}
      dateModified={modifiedTime || publishedTime}
      authorName={authorName}
      publisherName="Cameron Cooke"
      publisherLogo="https://cameron917.vercel.app/favicon.ico"
      description={description}
      isAccessibleForFree={true}
    />
  );
} 