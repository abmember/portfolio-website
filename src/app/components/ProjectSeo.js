import { ProductJsonLd } from 'next-seo';

export default function ProjectSeo({ name, description, images = [], url }) {
  return (
    <ProductJsonLd
      useAppDir={true}
      productName={name}
      images={images}
      description={description}
      brand="Cameron Cooke"
      offers={[]}
      aggregateRating={{
        ratingValue: '5',
        reviewCount: '1',
      }}
      mpn="project-01"
    />
  );
} 