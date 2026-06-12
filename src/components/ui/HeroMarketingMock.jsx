import { motion } from 'framer-motion';
import { MessageCircle, Star, MapPin, ChevronRight, TrendingUp } from 'lucide-react';
import { useLanguage } from '../../lib/i18n/LanguageContext';
import MockImage from './MockImage';

const HERO_MAIN = '/hero/hero-main.jpg';
const THUMBS = [
  { img: '/hero/thumb-1.jpg', label: 'Penthouse', labelAr: 'Penthouse' },
  { img: '/hero/thumb-2.jpg', label: 'Marina View', labelAr: 'إطلالة' },
  { img: '/hero/thumb-3.jpg', label: 'Luxury Spa', labelAr: 'سبا فاخر' },
];
const ACCENT = '#4A7CAB';
const ACCENT_LIGHT = '#6B9FD4';
const FALLBACK = 'linear-gradient(135deg, #0A1628 0%, #2E6DA8 100%)';

/** Hero first-page preview — full-bleed 4K photography, delivered-site UI */
export default function HeroMarketingMock() {
  const { isAr } = useLanguage();
  const brand = isAr ? 'مارينا هايتس' : 'Marina Heights';

  return (
    <div className="text-left bg-[#F5F8FC] text-[#0C1929] overflow-hidden">
      {/* Nav */}
      <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 border-b border-black/[0.05] bg-white/95 backdrop-blur-sm">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-6 h-6 rounded-lg flex items-center justify-center text-[9px] font-bold text-white shrink-0 shadow-sm"
            style={{ background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_LIGHT})` }}>
            M
          </div>
          <span className="text-[10px] sm:text-[11px] font-bold tracking-tight truncate">{brand}</span>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="text-[8px] px-1.5 py-0.5 rounded-md bg-[#F1F5F9] text-[#64748B] font-medium">EN · AR</span>
          <span className="text-[8px] px-2 py-1 rounded-full font-bold text-white flex items-center gap-1 shadow-md"
            style={{ background: ACCENT }}>
            <MessageCircle size={9} /> WhatsApp
          </span>
        </div>
      </div>

      {/* 4K cinematic hero photo */}
      <div className="relative h-[120px] sm:h-[148px] lg:h-[160px] overflow-hidden group">
        <div className="absolute inset-0 animate-hero-zoom">
          <MockImage
            src={HERO_MAIN}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            fallback={FALLBACK}
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C1929]/92 via-[#0C1929]/50 to-[#0C1929]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C1929]/70 via-transparent to-[#0C1929]/20" />

        {/* 4K badge */}
        <div className="absolute top-2 right-2 z-10 flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-black/55 backdrop-blur-md border border-white/15">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          <span className="text-[8px] font-bold text-white tracking-wider">4K</span>
        </div>

        <div className="relative h-full flex flex-col justify-end px-3 sm:px-4 pb-3 sm:pb-4 max-w-[88%]">
          <span className="inline-flex items-center gap-1 w-fit px-2 py-0.5 rounded-full text-[8px] font-semibold text-white/95 mb-1.5 border border-white/25 bg-white/10 backdrop-blur-sm">
            <MapPin size={8} /> 🇶🇦 {isAr ? 'الخليج الغربي · الدوحة' : 'West Bay · Doha'}
          </span>
          <h2 className="text-white font-display text-[13px] sm:text-[15px] font-extrabold leading-tight tracking-tight drop-shadow-lg">
            {isAr ? 'عقارات فاخرة على الواجهة' : 'Luxury waterfront properties'}
          </h2>
          <p className="text-white/75 text-[9px] sm:text-[10px] mt-1 leading-snug">
            {isAr ? 'استفسر واحجز عبر واتساب — EN & AR' : 'Enquire & book on WhatsApp — EN & AR'}
          </p>
          <div className="flex items-center gap-2 mt-2.5">
            <span className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[#25D366] text-white text-[9px] font-bold shadow-lg shadow-green-900/30">
              <MessageCircle size={10} /> {isAr ? 'احجز واتساب' : 'Book on WhatsApp'}
            </span>
            <span className="px-2 py-1.5 rounded-lg bg-white/15 backdrop-blur-sm text-white text-[9px] font-semibold border border-white/25">
              {isAr ? 'اعرف أكثر' : 'View listings'}
            </span>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="grid grid-cols-3 gap-1.5 px-3 py-2.5 bg-[#F5F8FC]">
        {[
          { v: '4.9', l: isAr ? 'تقييم' : 'Rating' },
          { v: '38+', l: isAr ? 'استفسار/أسبوع' : 'Enquiries/wk' },
          { v: '48h', l: isAr ? 'حجز' : 'Booking' },
        ].map((s) => (
          <div key={s.l} className="text-center py-1.5 rounded-lg bg-white border border-black/[0.04] shadow-sm">
            <p className="text-[11px] font-bold text-[#0C1929]">{s.v}</p>
            <p className="text-[7px] text-[#94a3b8] uppercase tracking-wide">{s.l}</p>
          </div>
        ))}
      </div>

      {/* Real photo services */}
      <div className="px-3 sm:px-4 pb-3">
        <div className="flex items-center justify-between mb-2">
          <p className="text-[10px] font-bold text-[#0C1929]">{isAr ? 'خدماتنا' : 'Featured listings'}</p>
          <ChevronRight size={12} className="text-[#94a3b8]" />
        </div>
        <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
          {THUMBS.map((t) => (
            <div key={t.label} className="rounded-xl overflow-hidden border border-black/[0.06] bg-white shadow-sm group/card">
              <div className="relative h-[52px] sm:h-[58px] overflow-hidden">
                <MockImage
                  src={t.img}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                  fallback={FALLBACK}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <p className="absolute bottom-1 inset-x-0 text-center text-[7px] sm:text-[8px] font-bold text-white drop-shadow-md px-0.5">
                  {isAr ? t.labelAr : t.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured card + social proof */}
      <div className="mx-3 mb-3 p-2.5 rounded-xl border border-black/[0.05] bg-white shadow-sm">
        <div className="flex gap-2.5">
          <div className="w-14 h-12 rounded-lg overflow-hidden shrink-0 shadow-inner">
            <MockImage src={HERO_MAIN} alt="" className="w-full h-full object-cover" fallback={FALLBACK} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[9px] font-bold truncate">{isAr ? 'إطلالة مارينا · 3 غرف' : 'Marina View · 3 Bed'}</p>
            <p className="text-[12px] font-extrabold mt-0.5" style={{ color: ACCENT }}>QAR 2.4M</p>
            <p className="text-[8px] text-[#64748B] flex items-center gap-0.5 mt-0.5">
              <TrendingUp size={8} className="text-[#22c55e]" />
              {isAr ? 'مثال: +42 استفسار واتساب' : 'Example: +42 WhatsApp enquiries'}
            </p>
          </div>
        </div>
        <div className="flex gap-0.5 mt-2 mb-1">
          {[1, 2, 3, 4, 5].map((n) => (
            <Star key={n} size={9} className="fill-amber-400 text-amber-400" />
          ))}
        </div>
        <p className="text-[8px] text-[#64748B] italic leading-relaxed">
          {isAr ? '"حجزت عبر واتساب في دقائق — تجربة سلسة."' : '"Booked via WhatsApp in minutes — seamless experience."'}
        </p>
      </div>
    </div>
  );
}
