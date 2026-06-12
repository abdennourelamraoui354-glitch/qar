import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { useLanguage } from '../lib/i18n/LanguageContext';
import SectionHeader from './ui/SectionHeader';

export default function Testimonials() {
  const { t } = useLanguage();
  const tm = t.testimonials;

  return (
    <section className="relative z-10 py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow={tm.eyebrow} title={tm.title} subtitle={tm.subtitle} />
        <div className="grid md:grid-cols-3 gap-5">
          {tm.items.map((item, i) => (
            <motion.div key={item.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.08 }} className="flex flex-col rounded-2xl p-6 glass depth-1">
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={13} className="text-[#b8a88a] fill-[#b8a88a]" />
                ))}
              </div>
              <Quote size={20} className="text-[#6b9e8f]/30 mb-2" />
              <p className="text-[#94a3b8] text-sm leading-relaxed flex-1 mb-5">&ldquo;{item.quote}&rdquo;</p>
              <div className="pt-4 border-t border-white/[0.06]">
                <p className="font-semibold text-sm">{item.name}</p>
                <p className="text-[#64748b] text-xs">{item.role}</p>
                <p className="text-[#8bb8a8] text-[11px] mt-0.5">{item.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
