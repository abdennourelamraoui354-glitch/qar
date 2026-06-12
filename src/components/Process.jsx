import { motion } from 'framer-motion';
import { useLanguage } from '../lib/i18n/LanguageContext';
import SectionHeader from './ui/SectionHeader';

export default function Process() {
  const { t } = useLanguage();
  const pr = t.process;

  return (
    <section id="process" className="relative z-10 py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeader eyebrow={pr.eyebrow} title={pr.title} subtitle={pr.subtitle} />
        <div className="relative">
          <div className="absolute left-[27px] sm:left-[31px] top-6 bottom-6 w-px bg-gradient-to-b from-[#6b9e8f]/50 to-transparent" />
          <div className="space-y-4">
            {pr.steps.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.08 }} className="relative flex gap-4 sm:gap-5">
                <div className="relative z-10 w-14 h-14 rounded-xl border border-[#6b9e8f]/25 flex items-center justify-center font-display font-bold text-[#8bb8a8] bg-[#161d27] shrink-0">
                  {i + 1}
                </div>
                <div className="flex-1 glass rounded-xl p-4 sm:p-5 depth-1">
                  <div className="flex items-start justify-between gap-3 mb-1.5">
                    <h3 className="font-display font-bold">{item.title}</h3>
                    <span className="shrink-0 px-2 py-0.5 rounded-full bg-[#6b9e8f]/10 text-[#8bb8a8] text-[10px] font-bold">{item.duration}</span>
                  </div>
                  <p className="text-sm text-[#94a3b8] leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
