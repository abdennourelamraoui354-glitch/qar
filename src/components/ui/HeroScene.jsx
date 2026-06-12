import { motion } from 'framer-motion';
import {
  ArrowRight, CalendarCheck, Camera, Check, Globe, MessageCircle, X,
} from 'lucide-react';
import { useLanguage } from '../../lib/i18n/LanguageContext';
import BrowserFrame from './BrowserFrame';
import HeroMarketingMock from './HeroMarketingMock';

const floatClass = 'animate-float-soft';

function ResultCard({ value, label, demoLabel, className, delay = 0, compact = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`glass-strong border border-white/[0.1] rounded-xl shadow-lg ${compact ? 'px-2.5 py-2 text-center' : 'px-3 py-2'} ${className}`}
    >
      <div className={`relative ${compact ? '' : floatClass}`}>
        <p className={`font-display font-extrabold text-white leading-none ${compact ? 'text-sm' : 'text-base sm:text-lg'}`}>{value}</p>
        <p className={`text-[#94a3b8] mt-0.5 leading-tight ${compact ? 'text-[8px]' : 'text-[9px]'}`}>{label}</p>
        {!compact && (
          <p className="text-[7px] uppercase tracking-wider text-[#64748b] mt-1 font-semibold">{demoLabel}</p>
        )}
      </div>
    </motion.div>
  );
}

function FunnelStrip({ steps, isAr }) {
  const icons = [Camera, Globe, MessageCircle, CalendarCheck];
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.45, duration: 0.55 }}
      className="hidden lg:flex items-center justify-center gap-1.5 flex-wrap"
    >
      {steps.map((step, i) => {
        const Icon = icons[i];
        return (
          <div key={step} className="flex items-center gap-1.5">
            <div className="flex items-center gap-1 px-2 py-1 rounded-lg glass border border-white/[0.08] text-[10px] font-semibold text-[#cbd5e1]">
              <Icon size={11} className={i === 2 ? 'text-[#22c55e]' : 'text-[#8bb8a8]'} />
              {step}
            </div>
            {i < steps.length - 1 && (
              <ArrowRight size={10} className={`text-[#6b9e8f]/40 shrink-0 ${isAr ? 'rotate-180' : ''}`} />
            )}
          </div>
        );
      })}
    </motion.div>
  );
}

function BeforeAfterCard({ data, isAr }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isAr ? 20 : -20, y: 12 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ delay: 0.65, duration: 0.6 }}
      className="hidden lg:block glass-strong border border-white/[0.1] rounded-xl p-3.5 w-[220px] shadow-xl"
    >
      <p className="text-[9px] uppercase tracking-widest text-[#8bb8a8] font-bold mb-2">{data.title}</p>
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-lg bg-red-500/[0.06] border border-red-500/15 p-2">
          <p className="text-[8px] font-bold text-red-400/90 mb-1.5">{data.before.title}</p>
          <ul className="space-y-1">
            {data.before.items.map((item) => (
              <li key={item} className="flex items-start gap-1 text-[8px] text-[#94a3b8] leading-tight">
                <X size={8} className="text-red-400/70 shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg bg-[#22c55e]/[0.06] border border-[#22c55e]/20 p-2">
          <p className="text-[8px] font-bold text-[#22c55e] mb-1.5">{data.after.title}</p>
          <ul className="space-y-1">
            {data.after.items.map((item) => (
              <li key={item} className="flex items-start gap-1 text-[8px] text-[#94a3b8] leading-tight">
                <Check size={8} className="text-[#22c55e] shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default function HeroScene() {
  const { t, isAr } = useLanguage();
  const h = t.hero;
  const mobileStats = [h.resultCards[0], h.resultCards[2], h.resultCards[3]];

  return (
    <div className="relative w-full max-w-[560px] mx-auto lg:mx-0 lg:ml-auto lg:min-h-[480px]">
      {/* Desktop glow orbs */}
      <div className="hidden lg:block pointer-events-none">
        <div className="absolute top-[5%] right-[10%] w-56 h-56 rounded-full bg-[#6b9e8f]/20 blur-[60px] animate-orb-a" />
        <div className="absolute bottom-[15%] left-[5%] w-40 h-40 rounded-full bg-[#6b8cae]/15 blur-[55px] animate-orb-b" />
      </div>

      {/* Browser mockup — 4K preview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="relative z-10 mx-auto max-w-[340px] sm:max-w-[400px] lg:max-w-[440px]"
      >
        <div className="absolute -top-2 -right-2 z-30 flex items-center gap-1 px-2 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/15 shadow-lg">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          <span className="text-[9px] font-bold text-white tracking-widest">4K PREVIEW</span>
        </div>
        <BrowserFrame url="marina-heights.qa" glow="#4A7CAB">
          <div className="relative overflow-hidden bg-[#F4F7FB]">
            <HeroMarketingMock />
          </div>
        </BrowserFrame>
        <div className="absolute -bottom-2 left-[8%] right-[8%] h-5 bg-gradient-to-b from-[#6b9e8f]/10 to-transparent rounded-full blur-md pointer-events-none" />
      </motion.div>

      {/* Mobile — compact stats row, no overlap */}
      <div className="lg:hidden mt-4 px-1">
        <p className="text-[9px] uppercase tracking-wider text-[#64748b] text-center mb-2 font-semibold">{h.demoLabel}</p>
        <div className="grid grid-cols-3 gap-2">
          {mobileStats.map((card, i) => (
            <ResultCard
              key={card.label}
              value={card.value}
              label={card.label}
              demoLabel={h.demoLabel}
              compact
              delay={0.2 + i * 0.05}
            />
          ))}
        </div>
      </div>

      {/* Desktop — floating result cards */}
      {h.resultCards.map((card, i) => {
        const positions = [
          'hidden lg:block absolute top-0 -right-4 z-20',
          'hidden lg:block absolute top-[28%] -left-8 z-20',
          'hidden lg:block absolute top-[12%] left-[2%] z-20',
          'hidden lg:block absolute bottom-[38%] -right-6 z-20',
          'hidden xl:block absolute bottom-[22%] right-[8%] z-20',
        ];
        return (
          <ResultCard
            key={card.label}
            value={card.value}
            label={card.label}
            demoLabel={h.demoLabel}
            className={positions[i]}
            delay={0.35 + i * 0.06}
          />
        );
      })}

      {/* Desktop only — funnel + before/after */}
      <div className="hidden lg:block relative z-10 mt-6">
        <FunnelStrip steps={h.funnel} isAr={isAr} />
      </div>
      <div className={`hidden lg:flex relative z-10 mt-4 ${isAr ? 'justify-end' : 'justify-start'}`}>
        <BeforeAfterCard data={h.beforeAfter} isAr={isAr} />
      </div>
    </div>
  );
}
