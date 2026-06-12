import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { buildWhatsAppUrl } from '../lib/constants';
import { MARKET } from '../lib/siteContent';
import { trackClickButton, trackLead } from '../lib/tiktokPixel';

const PROOFS = ['تسليم خلال 48 ساعة', 'تصميم متجاوب', 'ربط واتساب مباشر', `أسعار بال${MARKET.currencyLabel}`];

export default function Hero() {
  return (
    <section className="section-pad bg-gradient-to-b from-blue-50 to-slate-50 overflow-hidden">
      <div className="container-narrow grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold mb-4">
            تطوير مواقع الويب — {MARKET.country}
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
            شركة تساعدك على بناء <span className="gradient-text">تجربة رقمية ناجحة</span> تحقق أهداف مشروعك
          </h1>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            نقدم خدمات تطوير المواقع الإلكترونية الاحترافية في {MARKET.cities} — سريعة، آمنة، ومحسّنة للتحويل عبر واتساب.
          </p>
          <ul className="space-y-2 mb-8">
            {PROOFS.map((p) => (
              <li key={p} className="flex items-center gap-2 text-slate-700 text-sm">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                {p}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="btn-primary"
              onClick={() => trackClickButton({ contentName: 'Hero Start Project' })}
            >
              ابدأ مشروعك الآن
              <ArrowLeft className="w-4 h-4" />
            </a>
            <a
              href={buildWhatsAppUrl('مرحباً، أريد موقعاً احترافياً')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              onClick={() => trackLead({ contentName: 'Hero WhatsApp' })}
            >
              تواصل واتساب
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="card p-3 shadow-xl">
            <div className="rounded-xl overflow-hidden bg-slate-900 aspect-[4/3] flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-16 h-16 rounded-2xl bg-blue-600 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">N</span>
                </div>
                <p className="text-white font-bold text-xl mb-1">Nounmotion Web Studio</p>
                <p className="text-slate-400 text-sm">تطوير مواقع الويب — {MARKET.country}</p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 card px-4 py-3 shadow-lg">
            <p className="text-2xl font-extrabold text-blue-600">48h</p>
            <p className="text-xs text-slate-500">متوسط التسليم</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
