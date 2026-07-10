export interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

export function generateMetaTags(seo: SEOProps): {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  ogImage?: string;
  ogUrl?: string;
  ogType: string;
} {
  return {
    title: seo.title,
    description: seo.description,
    ogTitle: seo.title,
    ogDescription: seo.description,
    ogImage: seo.image,
    ogUrl: seo.url,
    ogType: seo.type || 'website',
  };
}

export function updatePageMeta(seo: SEOProps) {
  // Update title
  document.title = `${seo.title} | Tech Platform`;

  // Update or create meta tags
  const updateOrCreateMeta = (name: string, content: string) => {
    let meta = document.querySelector(`meta[name="${name}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', name);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  };

  const updateOrCreateOGMeta = (property: string, content: string) => {
    let meta = document.querySelector(`meta[property="${property}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('property', property);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  };

  updateOrCreateMeta('description', seo.description);
  updateOrCreateOGMeta('og:title', seo.title);
  updateOrCreateOGMeta('og:description', seo.description);
  updateOrCreateOGMeta('og:type', seo.type || 'website');

  if (seo.image) {
    updateOrCreateOGMeta('og:image', seo.image);
  }
  if (seo.url) {
    updateOrCreateOGMeta('og:url', seo.url);
  }
}

