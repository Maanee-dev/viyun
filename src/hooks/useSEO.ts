import { useEffect } from 'react';

interface SeoProps {
  title?: string;
  description?: string;
}

export function useSEO({ title, description }: SeoProps) {
  useEffect(() => {
    if (title) {
      document.title = `${title} | VIYUN`;
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', `${title} | VIYUN`);
      
      const twTitle = document.querySelector('meta[property="twitter:title"]');
      if (twTitle) twTitle.setAttribute('content', `${title} | VIYUN`);
    }

    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) metaDescription.setAttribute('content', description);

      const ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) ogDescription.setAttribute('content', description);
      
      const twDescription = document.querySelector('meta[property="twitter:description"]');
      if (twDescription) twDescription.setAttribute('content', description);
    }
  }, [title, description]);
}
