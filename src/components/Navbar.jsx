import { motion } from 'framer-motion';
import { MessageCircle, Languages } from 'lucide-react';
import { buildWhatsAppUrl } from '../lib/constants';
import { useLanguage } from '../lib/i18n/LanguageContext';
import { translations } from '../lib/i18n/translations';
import GlowButton from './ui/GlowButton';
import { trackLead } from '../lib/tiktokPixel';

export default function Navbar() {
  const { t, toggle, lang, isAr } = useLanguage();
  const nav = [
    { label: t.nav.quiz, href: '#quiz' },
    { label: t.nav.packages, href: '#packages' },
    { label: t.nav.work, href: '#portfolio' },
    { label: t.nav.faq, href: '#faq' },
  ];

  return (
    <motion.header initial={{ y: -12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="fixed top-0 inset-x-0 z-50 px-4 sm:px-6">
      <nav className="max-w-7xl mx-auto mt-3 flex items-center justify-between glass-strong rounded-xl px-4 py-2.5">
        <a href="#" className="font-display text-lg font-bold">
          Noun<span className="text-gradient-accent">motion</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {nav.map((link) => (
            <a key={link.href} href={link.href} className="px-3 py-1.5 rounded-lg text-sm text-[#94a3b8] hover:text-white hover:bg-white/5">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button type="button" onClick={toggle} className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg glass text-xs text-[#94a3b8] hover:text-white" aria-label="Toggle language">
            <Languages size={14} />
            {lang === 'en' ? 'عربي' : 'EN'}
          </button>
          <GlowButton
            href={buildWhatsAppUrl(translations[lang].wa.default)}
            variant="green"
            className="!px-3 !py-2 !rounded-lg !text-xs"
            onClick={() => trackLead({ content_name: 'navbar_whatsapp' })}
          >
            <MessageCircle size={14} />
            <span className="hidden sm:inline">{t.nav.whatsapp}</span>
          </GlowButton>
        </div>
      </nav>
    </motion.header>
  );
}
