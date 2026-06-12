import { motion } from 'framer-motion';
import { Clock, MessageSquareOff, ShieldOff, TrendingDown, Trophy, Users } from 'lucide-react';
import { PROBLEM_ICONS } from '../lib/i18n/translations';
import { useLanguage } from '../lib/i18n/LanguageContext';
import SectionHeader from './ui/SectionHeader';

const icons = { users: Users, 'shield-off': ShieldOff, clock: Clock, 'message-x': MessageSquareOff, trophy: Trophy, 'trending-down': TrendingDown };

export default function Problem() {
  const { t } = useLanguage();
  const p = t.problem;

  return (
    <section className="relative z-10 py-28 sm:py-40 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow={p.eyebrow} title={p.title} subtitle={p.subtitle} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {p.items.map((item, i) => {
            const Icon = icons[PROBLEM_ICONS[i]];
            return (
              <motion.div key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="relative glass rounded-[1.25rem] p-6 sm:p-7 depth-2 card-shine border border-white/[0.06] hover:border-[#6b9e8f]/25 transition-colors overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#6b9e8f]/5 rounded-full blur-3xl group-hover:bg-[#6b9e8f]/10 transition-colors" />
                <div className="relative flex justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#6b9e8f]/12 border border-[#6b9e8f]/20 flex items-center justify-center">
                    <Icon size={20} className="text-[#8bb8a8]" />
                  </div>
                  <div className="text-right">
                    <p className="font-display text-2xl font-bold text-gradient-accent">{item.stat}</p>
                    <p className="text-[9px] text-[#64748b] uppercase tracking-wider">{item.statLabel}</p>
                  </div>
                </div>
                <h3 className="relative font-semibold mb-2 text-base">{item.title}</h3>
                <p className="relative text-sm text-[#94a3b8] leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
