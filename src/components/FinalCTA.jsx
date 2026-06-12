import { motion } from 'framer-motion';
import { ArrowRight, Mail, MessageCircle, ExternalLink, Sparkles } from 'lucide-react';
import { CONTACT, buildWhatsAppUrl } from '../lib/constants';
import { useLanguage } from '../lib/i18n/LanguageContext';
import GlowButton from './ui/GlowButton';
import { trackLead } from '../lib/tiktokPixel';

export default function FinalCTA() {
  const { t, isAr } = useLanguage();
  const c = t.cta;

  return (
    <section className="relative z-10 py-28 sm:py-40 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="relative rounded-[2rem] overflow-hidden beam-border depth-3 border-glow">
          <div className="absolute inset-0 bg-gradient-to-br from-[#6b9e8f]/25 via-[#111820]/95 to-[#0a0e14]" />
          <div className="absolute inset-0 mesh-bg opacity-60" />
          <motion.div className="absolute -top-20 -right-20 w-64 h-64 bg-[#6b9e8f]/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 7, repeat: Infinity }} />
          <motion.div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#b8a88a]/15 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 9, repeat: Infinity }} />

          <div className="relative px-8 sm:px-16 py-16 sm:py-24 text-center">
            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
              transition={{ type: 'spring', delay: 0.1 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#25D366]/15 border border-[#25D366]/30 mb-8 glow-green">
              <MessageCircle size={32} className="text-[#25D366]" />
            </motion.div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 leading-tight">
              {c.title.split('48').length > 1 ? (
                <>
                  {c.title.split('48')[0]}
                  <span className="text-gradient-accent">48</span>
                  {c.title.split('48').slice(1).join('48')}
                </>
              ) : c.title}
            </h2>
            <p className="text-[#94a3b8] text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed font-light">{c.subtitle}</p>

            <GlowButton href="#quiz" className="!px-10 !py-4 !text-base mb-12 glow-md">
              <Sparkles size={16} /> {c.button} <ArrowRight size={18} className={isAr ? 'rotate-180' : ''} />
            </GlowButton>

            <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {[
                { icon: MessageCircle, label: 'WhatsApp', value: CONTACT.whatsappDisplay, href: buildWhatsAppUrl(t.wa.default) },
                { icon: Mail, label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
                { icon: ExternalLink, label: 'Instagram', value: CONTACT.instagramHandle, href: CONTACT.instagram },
              ].map(({ icon: Icon, label, value, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  onClick={label === 'WhatsApp' ? () => trackLead({ content_name: 'final_cta_whatsapp' }) : undefined}
                  whileHover={{ y: -4 }}
                  target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 rounded-2xl glass-strong hover:bg-white/[0.06] transition-colors group border border-white/[0.06]">
                  <Icon size={20} className="text-[#8bb8a8] group-hover:text-[#a8d4c4]" />
                  <span className="text-[10px] uppercase tracking-wider text-[#64748b]">{label}</span>
                  <span className="text-sm text-[#94a3b8] group-hover:text-white">{value}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
