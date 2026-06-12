import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useLanguage } from '../lib/i18n/LanguageContext';
import SectionHeader from './ui/SectionHeader';
import { cn } from '../lib/utils';

export default function FAQ() {
  const { t } = useLanguage();
  const faq = t.faq;
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative z-10 py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeader eyebrow={faq.eyebrow} title={faq.title} subtitle={faq.subtitle} />
        <div className="space-y-2">
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div key={item.question} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className={cn('rounded-xl overflow-hidden', isOpen ? 'glass-strong border border-[#6b9e8f]/20' : 'glass')}>
                <button type="button" onClick={() => setOpen(isOpen ? -1 : i)} className="w-full flex items-center gap-3 px-5 py-4 text-left">
                  <div className={cn('w-8 h-8 rounded-lg flex items-center justify-center shrink-0', isOpen ? 'bg-[#6b9e8f]/15 text-[#8bb8a8]' : 'bg-white/5 text-[#64748b]')}>
                    <HelpCircle size={16} />
                  </div>
                  <span className="font-medium text-sm flex-1">{item.question}</span>
                  <ChevronDown size={16} className={cn('text-[#64748b] shrink-0 transition-transform', isOpen && 'rotate-180 text-[#8bb8a8]')} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <p className="px-5 pb-4 pl-16 text-[#94a3b8] text-sm leading-relaxed">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
