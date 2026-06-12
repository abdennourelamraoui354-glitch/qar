import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { buildWhatsAppUrl } from '../lib/constants';
import { trackLead } from '../lib/tiktokPixel';

const LINKS = [
  { href: '#services', label: 'الخدمات' },
  { href: '#portfolio', label: 'أعمالنا' },
  { href: '#packages', label: 'الباقات' },
  { href: '#process', label: 'مراحل العمل' },
  { href: '#contact', label: 'تواصل معنا' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Nounmotion" className="h-9" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={buildWhatsAppUrl('مرحباً، أريد استفساراً عن تطوير موقع ويب')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-2.5"
            onClick={() => trackLead({ contentName: 'Navbar WhatsApp' })}
          >
            واتساب
          </a>
        </div>

        <button type="button" className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="القائمة">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-3">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="block text-slate-700 font-medium" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">
            واتساب
          </a>
        </div>
      )}
    </header>
  );
}
