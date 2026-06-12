import { motion } from 'framer-motion';
import { Check, X, ArrowRight, MessageCircle } from 'lucide-react';
import { useLanguage } from '../lib/i18n/LanguageContext';
import SectionHeader from './ui/SectionHeader';
import { cn } from '../lib/utils';

function MockupCard({ type, points, title, label }) {
  const isAfter = type === 'after';
  return (
    <motion.div whileHover={{ y: -4 }} className={cn(
      'relative rounded-2xl overflow-hidden depth-1 p-6 sm:p-7',
      isAfter ? 'border border-[#6b9e8f]/20 bg-[#6b9e8f]/5' : 'glass border border-red-500/10',
    )}>
      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold mb-4 ${
        isAfter ? 'bg-[#22c55e]/10 text-[#22c55e]' : 'bg-red-500/10 text-red-400'
      }`}>
        {isAfter ? <Check size={12} /> : <X size={12} />}
        {label}
      </span>

      <div className={`rounded-xl p-3 mb-4 border ${isAfter ? 'bg-white/[0.04] border-white/10' : 'bg-black/20 border-white/5'}`}>
        <div className="flex gap-1 mb-2">
          {['#ff5f57', '#febc2e', '#28c840'].map((c) => (
            <span key={c} className="w-2 h-2 rounded-full opacity-80" style={{ backgroundColor: c }} />
          ))}
        </div>
        <div className="space-y-1.5">
          <div className={`h-1.5 rounded-full ${isAfter ? 'w-3/4 bg-white/15' : 'w-1/2 bg-white/8'}`} />
          <div className={`h-1.5 rounded-full ${isAfter ? 'w-full bg-white/8' : 'w-full bg-white/5'}`} />
        </div>
        {isAfter && (
          <div className="mt-2 h-6 w-24 rounded-md bg-[#25D366]/20 flex items-center justify-center gap-1">
            <MessageCircle size={10} className="text-[#25D366]" />
            <span className="text-[9px] text-[#25D366] font-semibold">WhatsApp</span>
          </div>
        )}
      </div>

      <h3 className="font-display text-lg font-bold mb-3">{title}</h3>
      <ul className="space-y-2">
        {points.map((pt) => (
          <li key={pt} className="flex items-center gap-2 text-sm text-[#94a3b8]">
            {isAfter ? <Check size={13} className="text-[#22c55e] shrink-0" /> : <X size={13} className="text-red-400/70 shrink-0" />}
            {pt}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function BeforeAfter() {
  const { t, isAr } = useLanguage();
  const b = t.beforeAfter;

  return (
    <section className="relative z-10 py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader eyebrow={b.eyebrow} title={b.title} subtitle={b.subtitle} />
        <div className="grid md:grid-cols-2 gap-5 relative">
          <MockupCard type="before" title={b.before.title} points={b.before.points} label={b.before.label} />
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glass items-center justify-center">
            <ArrowRight size={16} className={`text-[#6b9e8f] ${isAr ? 'rotate-180' : ''}`} />
          </div>
          <MockupCard type="after" title={b.after.title} points={b.after.points} label={b.after.label} />
        </div>
      </div>
    </section>
  );
}
