import { MessageCircle, Mail, ExternalLink } from 'lucide-react';
import { CONTACT, buildWhatsAppUrl } from '../lib/constants';
import { useLanguage } from '../lib/i18n/LanguageContext';
import { trackLead } from '../lib/tiktokPixel';

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;
  const nav = [
    { label: t.nav.quiz, href: '#quiz' },
    { label: t.nav.packages, href: '#packages' },
    { label: t.nav.work, href: '#portfolio' },
    { label: t.process.eyebrow, href: '#process' },
    { label: t.nav.faq, href: '#faq' },
  ];

  return (
    <footer className="relative z-10 border-t border-white/[0.06] bg-[#0d1218]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <p className="font-display text-xl font-bold mb-2">
              Noun<span className="text-gradient-accent">motion</span>
            </p>
            <p className="text-[#64748b] text-sm">{t.brand.tagline}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-[#64748b] mb-3 font-semibold">{f.navigate}</p>
            <ul className="space-y-2">
              {nav.map((l) => (
                <li key={l.href}><a href={l.href} className="text-sm text-[#94a3b8] hover:text-white">{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-[#64748b] mb-3 font-semibold">{f.markets}</p>
            <ul className="space-y-2 text-sm text-[#94a3b8]">
              {f.marketsList.map((m) => <li key={m}>{m}</li>)}
            </ul>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-[#64748b] mb-3 font-semibold">{f.contact}</p>
            <ul className="space-y-2">
              <li>
                <a
                  href={buildWhatsAppUrl(t.wa.default)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackLead({ content_name: 'footer_whatsapp' })}
                  className="inline-flex items-center gap-2 text-sm text-[#25D366] hover:text-[#20bd5a]"
                >
                  <MessageCircle size={14} /> {CONTACT.whatsappDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="inline-flex items-center gap-2 text-sm text-[#94a3b8] hover:text-white">
                  <Mail size={14} /> {CONTACT.email}
                </a>
              </li>
              <li>
                <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[#94a3b8] hover:text-white">
                  <ExternalLink size={14} /> {CONTACT.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#64748b]">
          <p>© {new Date().getFullYear()} Nounmotion</p>
          <p>{f.copy}</p>
        </div>
      </div>
    </footer>
  );
}
