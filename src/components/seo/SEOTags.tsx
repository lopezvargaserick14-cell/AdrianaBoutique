import { Helmet } from 'react-helmet-async';

interface SEOTagsProps {
  title: string;
  description: string;
  type?: 'website' | 'article' | 'product';
  url?: string;
  image?: string;
}

export default function SEOTags({
  title,
  description,
  type = 'website',
  url,
  image = 'https://www.adrianabarrera.com/logo.png'
}: SEOTagsProps) {
  const siteName = 'Adriana Barrera';
  const fullTitle = `${title} | ${siteName}`;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
