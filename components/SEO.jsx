import Head from 'next/head';

const SEO = ({ 
  title, 
  description, 
  canonical, 
  ogImage, 
  noindex = false,
  additionalMeta = [],
  structuredData = null 
}) => {
  const baseUrl = process.env.SITE_URL || 'https://amon-sharma.vercel.app';
  const fullTitle = title ? `${title} | Amon Sharma Portfolio` : 'Amon Sharma - Full Stack Developer & UI/UX Designer';
  const metaDescription = description || 'Amon Sharma is a passionate Full Stack Developer and UI/UX Designer specializing in modern web technologies.';
  const canonicalUrl = canonical ? `${baseUrl}${canonical}` : baseUrl;
  const imageUrl = ogImage || `${baseUrl}/assets/amon.jpeg`;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="robots" content={noindex ? 'noindex,nofollow' : 'index,follow'} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="Amon Sharma Portfolio" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={metaDescription} />
      <meta property="twitter:image" content={imageUrl} />
      <meta property="twitter:creator" content="@amon_sharma" />

      {/* Additional Meta Tags */}
      {additionalMeta.map((meta, index) => (
        <meta key={index} {...meta} />
      ))}

      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}

      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Performance hints */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
    </Head>
  );
};

export default SEO;
