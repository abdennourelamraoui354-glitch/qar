import { useLanguage } from '../lib/i18n/LanguageContext';

export default function Marquee() {
  const { t } = useLanguage();
  const items = [...t.marquee, ...t.marquee];

  return (
    <div className="relative z-10 py-4 overflow-hidden border-y border-white/[0.05] bg-[#161d27]/50">
      <div className="flex gap-8 whitespace-nowrap animate-marquee">
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-2 text-sm text-[#64748b]">
            <span className="w-1 h-1 rounded-full bg-[#6b9e8f]" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
