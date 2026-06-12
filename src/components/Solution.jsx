import { motion } from 'framer-motion';
import { ArrowRight, CalendarCheck, Camera, Layout, MessageCircle, Sparkles } from 'lucide-react';
import { useLanguage } from '../lib/i18n/LanguageContext';
import SectionHeader from './ui/SectionHeader';

const icons = [Camera, Layout, MessageCircle, CalendarCheck];

export default function Solution() {
  const { t, isAr } = useLanguage();
  const s = t.solution;

  return (
    <section className="relative z-10 py-20 sm:py-32 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-3xl lg:max-w-6xl mx-auto relative">
        <SectionHeader eyebrow={s.eyebrow} title={s.title} subtitle={s.subtitle} />

        {/* Mobile + tablet: single funnel card only */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden border border-[#6b9e8f]/20 depth-2 p-6 sm:p-8 bg-gradient-to-br from-[#6b9e8f]/12 to-[#0a0e14]"
        >
          <div className="flex items-center gap-2 mb-4">
            <Sparkles size={15} className="text-[#8bb8a8]" />
            <span className="text-[10px] uppercase tracking-widest text-[#8bb8a8] font-bold">Conversion Funnel</span>
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-bold mb-2 leading-tight">{s.funnelTitle}</h3>
          <p className="text-[#94a3b8] text-sm mb-6 leading-relaxed">{s.funnelSub}</p>

          <div className="space-y-2.5">
            {s.steps.map((step, i) => {
              const Icon = icons[i];
              return (
                <div key={step.label} className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.04] border border-white/[0.07]">
                  <div className="w-10 h-10 rounded-xl bg-[#6b9e8f]/15 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-[#8bb8a8]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-white">{step.label}</p>
                    <p className="text-xs text-[#64748b]">{step.desc}</p>
                  </div>
                  {i < s.steps.length - 1 && (
                    <ArrowRight size={14} className={`text-[#6b9e8f]/40 shrink-0 ${isAr ? 'rotate-180' : ''}`} />
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Desktop: optional compact horizontal steps — hidden to avoid duplicate clutter */}
      </div>
    </section>
  );
}
