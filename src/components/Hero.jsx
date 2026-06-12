import { motion } from 'framer-motion';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { useLanguage } from '../lib/i18n/LanguageContext';
import GlowButton from './ui/GlowButton';
import HeroScene from './ui/HeroScene';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const { t, isAr } = useLanguage();
  const h = t.hero;

  return (
    <section className="relative z-10 min-h-0 lg:min-h-[100svh] flex items-center pt-24 sm:pt-28 pb-12 sm:pb-20 lg:pb-24 px-4 sm:px-6 overflow-hidden">
      {/* Hero-only cinematic background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-bg opacity-80" />
        <div className="absolute inset-0 mesh-bg" />
        <div className="absolute inset-0 hero-spotlight" />
        <div className="absolute top-[15%] left-[20%] w-[500px] h-[400px] rounded-full bg-[#6b9e8f]/10 blur-[80px] animate-orb-a" />
        <div className="absolute bottom-[10%] right-[15%] w-[400px] h-[350px] rounded-full bg-[#b8a88a]/8 blur-[70px] animate-orb-b" />
      </div>

      <div className="relative max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
        {/* Copy — first on mobile */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className={`order-1 lg:order-1 text-center ${isAr ? 'lg:text-right' : 'lg:text-left'}`}
        >
          <motion.div
            variants={item}
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-strong border border-[#6b9e8f]/25 text-[#8bb8a8] text-[11px] sm:text-xs mb-5 sm:mb-6"
          >
            <Sparkles size={12} className="text-[#b8a88a]" />
            {h.eyebrow}
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-[1.85rem] sm:text-[2.75rem] lg:text-[3.15rem] font-extrabold tracking-[-0.035em] leading-[1.06] mb-5 sm:mb-6"
          >
            {h.headline}{' '}
            <span className="text-shimmer">{h.headlineHighlight}</span>{' '}
            {h.headlineEnd}
          </motion.h1>

          <motion.p
            variants={item}
            className="text-[15px] sm:text-lg text-[#94a3b8] max-w-xl mx-auto lg:mx-0 mb-6 sm:mb-7 leading-relaxed"
          >
            {h.sub}
          </motion.p>

          <motion.ul
            variants={item}
            className={`space-y-2.5 mb-7 max-w-md mx-auto ${isAr ? 'lg:mr-0' : 'lg:ml-0'} lg:mx-0`}
          >
            {h.proofBullets.map((bullet) => (
              <li key={bullet} className={`flex items-center gap-2.5 text-sm text-[#cbd5e1] ${isAr ? 'flex-row-reverse lg:justify-end' : ''}`}>
                <span className="w-5 h-5 rounded-full bg-[#6b9e8f]/15 border border-[#6b9e8f]/25 flex items-center justify-center shrink-0">
                  <Check size={11} className="text-[#8bb8a8]" />
                </span>
                {bullet}
              </li>
            ))}
          </motion.ul>

          <motion.div
            variants={item}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            className={`flex items-start gap-2.5 mb-7 p-3.5 rounded-xl glass border border-[#22c55e]/20 max-w-lg mx-auto lg:mx-0 ${isAr ? 'text-right' : 'text-left'}`}
          >
            <span className="relative flex h-2.5 w-2.5 mt-1 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-60" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#22c55e]" />
            </span>
            <p className="text-xs sm:text-[13px] text-[#94a3b8] leading-relaxed">
              <span className="text-[#64748b] font-medium">{h.tickerPrefix}</span>{' '}
              <span className="text-[#cbd5e1]">{h.ticker}</span>
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className={`flex flex-col sm:flex-row gap-3 justify-center ${isAr ? 'lg:justify-end' : 'lg:justify-start'}`}
          >
            <GlowButton href="#quiz" className="!px-8 !py-4 !text-[15px] glow-md">
              {h.ctaPrimary}{' '}
              <ArrowRight size={17} className={isAr ? 'rotate-180' : ''} />
            </GlowButton>
            <GlowButton href="#packages" variant="outline" className="!px-8 !py-4 !text-[15px]">
              {h.ctaSecondary}
            </GlowButton>
          </motion.div>
        </motion.div>

        {/* Right — visual system */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 lg:order-2 relative mt-2 lg:mt-0"
        >
          <HeroScene />
        </motion.div>
      </div>
    </section>
  );
}
