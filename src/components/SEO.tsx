import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
}

export function SEO({ title, description, keywords, url }: SEOProps) {
  const fullTitle = `${title} | Creativity - Stationery & Print Hub`;
  const defaultUrl = "https://creativity-print.com";
  const pageUrl = url ? `${defaultUrl}${url}` : defaultUrl;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* OpenGraph tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />

      {/* Twitter Card tags */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      
      {/* Canonical link to prevent duplicate content issues */}
      <link rel="canonical" href={pageUrl} />
    </Helmet>
  );
}
