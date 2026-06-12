import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '../lib/constants';
import { trackContact } from '../lib/tiktokPixel';

export default function WhatsAppButton() {
  return (
    <a
      href={buildWhatsAppUrl('مرحباً، أريد استفساراً عن موقع ويب')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-green-500 text-white shadow-lg flex items-center justify-center hover:bg-green-600 transition hover:scale-105"
      onClick={() => trackContact({ contentName: 'Sticky WhatsApp' })}
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
