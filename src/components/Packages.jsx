import { motion } from 'framer-motion';
import { Check, Crown, Sparkles, Zap } from 'lucide-react';
import { buildWhatsAppUrl } from '../lib/constants';
import { PACKAGE_META } from '../lib/i18n/translations';
import { useLanguage } from '../lib/i18n/LanguageContext';
import SectionHeader from './ui/SectionHeader';
import GlowButton from './ui/GlowButton';
import { cn } from '../lib/utils';

export default function Packages() {
  const { t } = useLanguage();
  const p = t.packages;
  const packages = PACKAGE_META.map((meta, i) => ({ ...meta, ...p.items[i] }));

  return (
    <section id="packages" className="relative z-10 py-20 sm:py-32 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        <SectionHeader eyebrow={p.eyebrow} title={p.title} subtitle={p.subtitle} />

        {/* Mobile: horizontal scroll — names always visible */}
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4 lg:hidden">
          {packages.map((pkg, i) => (
            <PackageCard key={pkg.id} pkg={pkg} p={p} t={t} index={i} className="snap-center shrink-0 w-[85vw] max-w-[320px]" mobile />
          ))}
        </div>

        {/* Desktop grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-5 items-stretch">
          {packages.map((pkg, i) => (
            <PackageCard key={pkg.id} pkg={pkg} p={p} t={t} index={i} className={cn(pkg.highlighted && 'lg:-mt-6 lg:scale-[1.04] z-10')} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PackageCard({ pkg, p, t, index, className, mobile }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className={cn('relative flex flex-col', className)}
    >
      <div className={cn(
        'relative flex flex-col h-full rounded-2xl overflow-visible border',
        pkg.highlighted
          ? 'border-[#6b9e8f]/35 bg-gradient-to-b from-[#6b9e8f]/12 to-[#0a0e14] depth-2'
          : pkg.premium
            ? 'border-[#b8a88a]/25 glass depth-1'
            : 'border-white/[0.08] glass depth-1',
      )}>
        {pkg.badge && (
          <div className="flex justify-center pt-4 pb-0">
            <span className={cn(
              'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold',
              pkg.highlighted ? 'bg-[#6b9e8f] text-white' : 'bg-[#b8a88a] text-[#111820]',
            )}>
              {pkg.highlighted ? <Crown size={11} /> : <Sparkles size={11} />}
              {pkg.badge}
            </span>
          </div>
        )}

        <div className={cn('flex flex-col flex-1 p-5 sm:p-6', !pkg.badge && 'pt-6')}>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#8bb8a8] mb-1">{pkg.tier}</span>
          <h3 className="font-display text-lg sm:text-xl font-bold mb-1 tracking-tight text-white leading-snug">
            {pkg.name}
          </h3>
          <p className="text-[#94a3b8] text-xs mb-4 leading-relaxed line-clamp-2">
            {p.bestFor} {pkg.bestFor}
          </p>

          <div className="mb-5">
            <div className="flex items-baseline gap-1 flex-wrap">
              <span className={cn(
                'font-display font-extrabold text-4xl sm:text-5xl',
                pkg.highlighted ? 'text-[#8bb8a8]' : pkg.premium ? 'text-[#d4c4a8]' : 'text-white',
              )}>
                {pkg.priceQar}
              </span>
              <span className="text-[#64748b] text-sm">QAR</span>
            </div>
            <p className="text-[#64748b] text-xs mt-1">{pkg.delivery}</p>
          </div>

          <ul className={cn('space-y-2 mb-5 flex-1', mobile && 'max-h-[140px] overflow-y-auto')}>
            {pkg.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-xs sm:text-sm text-[#94a3b8]">
                <div className="w-4 h-4 rounded-full bg-[#6b9e8f]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={9} className="text-[#8bb8a8]" />
                </div>
                {f}
              </li>
            ))}
          </ul>

          <GlowButton
            href={buildWhatsAppUrl(t.wa.package(pkg.name, pkg.priceQar))}
            variant={pkg.highlighted || pkg.premium ? 'primary' : 'outline'}
            className="w-full !py-3 !text-sm"
          >
            {pkg.highlighted && <Zap size={14} />}
            {pkg.cta}
          </GlowButton>
        </div>
      </div>
    </motion.div>
  );
}
