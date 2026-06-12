import { useEffect } from 'react';
import { initTikTokPixel, trackViewContent } from '../lib/tiktokPixel';

export default function TikTokPixel() {
  useEffect(() => {
    initTikTokPixel();
    trackViewContent({
      content_name: document.title,
      content_type: 'landing_page',
    });
  }, []);

  return null;
}
