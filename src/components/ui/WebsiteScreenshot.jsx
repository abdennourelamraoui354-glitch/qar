import { motion } from 'framer-motion';
import { MessageCircle, Star, MapPin, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../lib/i18n/LanguageContext';
import { PORTFOLIO_VISUALS } from '../../lib/portfolioVisuals';
import BrowserFrame from './BrowserFrame';
import MockImage from './MockImage';

function MockNav({ visual, isAr }) {
  const links = isAr ? visual.navAr : visual.nav;
  return (
    <nav className="flex items-center justify-between px-5 py-3 border-b border-black/[0.06]" style={{ background: visual.bg }}>
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-[10px] font-bold"
          style={{ background: `linear-gradient(135deg, ${visual.accent}, ${visual.accentLight})` }}>
          {visual.brand.charAt(0)}
        </div>
        <span className="text-[11px] font-bold text-gray-900 tracking-tight">{isAr ? visual.brandAr : visual.brand}</span>
      </div>
      <div className="hidden sm:flex items-center gap-4">
        {links.map((l) => (
          <span key={l} className="text-[9px] text-gray-500 font-medium hover:text-gray-800">{l}</span>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[8px] px-1.5 py-0.5 rounded bg-gray-100 text-gray-500 font-medium">EN | AR</span>
        <div className="px-2.5 py-1 rounded-full text-[9px] font-bold text-white flex items-center gap-1"
          style={{ background: visual.accent }}>
          <MessageCircle size={9} /> WhatsApp
        </div>
      </div>
    </nav>
  );
}

function MockHero({ visual, isAr }) {
  return (
    <div className="relative h-[140px] sm:h-[160px] overflow-hidden">
      <MockImage
        src={visual.hero}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        fallback={visual.heroFallback}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      <div className="relative h-full flex flex-col justify-center px-5 sm:px-6 max-w-[75%]">
        <span className="inline-flex items-center gap-1 w-fit px-2 py-0.5 rounded-full text-[8px] font-semibold text-white/90 mb-2 border border-white/20 bg-white/10 backdrop-blur-sm">
          <MapPin size={8} /> 🇶🇦 Qatar
        </span>
        <h1 className="text-white font-bold text-[15px] sm:text-[17px] leading-tight tracking-tight mb-1.5">
          {isAr ? visual.brandAr : visual.brand}
        </h1>
        <p className="text-white/75 text-[9px] sm:text-[10px] leading-relaxed mb-3 line-clamp-2">
          {isAr ? visual.taglineAr : visual.tagline}
        </p>
        <div className="flex items-center gap-2">
          <div className="px-3 py-1.5 rounded-lg bg-[#25D366] text-white text-[9px] font-bold flex items-center gap-1 shadow-lg shadow-green-900/30">
            <MessageCircle size={10} /> {isAr ? 'احجز واتساب' : 'Book on WhatsApp'}
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-white/15 backdrop-blur-sm text-white text-[9px] font-semibold border border-white/25">
            {isAr ? 'اعرف أكثر' : 'Learn more'}
          </div>
        </div>
      </div>
    </div>
  );
}

function MockStats({ visual, id }) {
  const stats = {
    realestate: [{ v: 'QAR 2.4M', l: 'From' }, { v: '38', l: 'Leads/wk' }, { v: '24', l: 'Units' }],
    salon: [{ v: '4.9★', l: 'Reviews' }, { v: '500+', l: 'Clients' }, { v: '12', l: 'Stylists' }],
    restaurant: [{ v: '4.8', l: 'Rating' }, { v: '89+', l: '/ month' }, { v: 'Open', l: 'Daily' }],
    fitness: [{ v: '4.9', l: 'Rating' }, { v: '64+', l: '/ month' }, { v: '24/7', l: 'Access' }],
  }[id] || [];

  return (
    <div className="grid grid-cols-3 gap-2 px-5 py-3" style={{ background: visual.bg }}>
      {stats.map((s) => (
        <div key={s.l} className="text-center py-2 rounded-xl border border-black/[0.05] bg-white shadow-sm">
          <p className="text-[11px] sm:text-[12px] font-bold text-gray-900">{s.v}</p>
          <p className="text-[8px] text-gray-400 uppercase tracking-wide">{s.l}</p>
        </div>
      ))}
    </div>
  );
}

function MockServices({ visual, isAr }) {
  return (
    <div className="px-5 py-4" style={{ background: visual.bg }}>
      <div className="flex items-center justify-between mb-3">
        <p className="text-[11px] font-bold text-gray-900">{isAr ? 'خدماتنا' : 'Our Services'}</p>
        <ChevronRight size={12} className="text-gray-400" />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {visual.services.map((svc) => (
          <div key={svc.name} className="rounded-xl overflow-hidden border border-black/[0.06] bg-white shadow-sm group">
            <div className="relative h-[52px] sm:h-[58px] overflow-hidden">
              <MockImage
                src={svc.img}
                alt=""
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                fallback={`linear-gradient(145deg, ${svc.tone || '#334155'}, ${svc.tone2 || '#1e293b'})`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <p className="text-[8px] sm:text-[9px] font-semibold text-gray-700 py-1.5 text-center">
              {isAr ? svc.nameAr : svc.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function MockTestimonial({ visual, isAr }) {
  return (
    <div className="mx-5 mb-4 p-3 rounded-xl border border-black/[0.05] bg-white shadow-sm">
      <div className="flex gap-0.5 mb-1.5">
        {[1, 2, 3, 4, 5].map((n) => (
          <Star key={n} size={9} className="fill-amber-400 text-amber-400" />
        ))}
      </div>
      <p className="text-[9px] text-gray-600 leading-relaxed italic">
        {isAr ? '"تجربة رائعة — حجزت عبر واتساب في دقائق."' : '"Amazing experience — booked via WhatsApp in minutes."'}
      </p>
      <p className="text-[8px] text-gray-400 mt-1.5 font-medium">— {isAr ? 'عميلة من قطر' : 'Qatar Client'}</p>
    </div>
  );
}

function FullPageMock({ projectId }) {
  const { isAr } = useLanguage();
  const visual = PORTFOLIO_VISUALS[projectId];
  if (!visual) return null;

  return (
    <div className="relative" style={{ background: visual.bg }}>
      <MockNav visual={visual} isAr={isAr} />
      <MockHero visual={visual} isAr={isAr} />
      <MockStats visual={visual} id={projectId} />
      <MockServices visual={visual} isAr={isAr} />
      <MockTestimonial visual={visual} isAr={isAr} />
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black/15 to-transparent pointer-events-none" />
    </div>
  );
}

export default function WebsiteScreenshot({ project, className }) {
  const visual = PORTFOLIO_VISUALS[project.id];

  return (
    <motion.div
      whileHover={{ scale: 1.015 }}
      transition={{ type: 'spring', stiffness: 280, damping: 24 }}
      className={className}
    >
      <div className="relative group/screenshot">
        <BrowserFrame url={project.url} glow={visual?.accent || project.theme.primary}>
          <div className="relative aspect-[16/11] sm:aspect-[16/10] overflow-hidden bg-white">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[185%] origin-top scale-[0.54] sm:scale-[0.58]">
                <FullPageMock projectId={project.id} />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent pointer-events-none opacity-0 group-hover/screenshot:opacity-100 transition-opacity duration-500" />
          </div>
        </BrowserFrame>

        <div className="absolute -bottom-3 left-[5%] right-[5%] h-6 bg-gradient-to-b from-white/[0.04] to-transparent rounded-full blur-sm opacity-60" />
      </div>
    </motion.div>
  );
}
