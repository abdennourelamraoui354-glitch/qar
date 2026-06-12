import { Check } from 'lucide-react';
import { buildWhatsAppUrl } from '../lib/constants';
import { MARKET, PACKAGES } from '../lib/siteContent';
import { trackClickButton, trackLead } from '../lib/tiktokPixel';

export default function Packages() {
  return (
    <section id="packages" className="section-pad bg-white">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-bold text-sm mb-2">الباقات</p>
          <h2 className="section-title">أسعار شفافة بال{MARKET.currencyLabel} ({MARKET.currency})</h2>
          <p className="section-sub mx-auto">اختر الباقة المناسبة لنشاطك في {MARKET.country}.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {PACKAGES.map((pkg) => (
            <article
              key={pkg.id}
              className={`card p-6 flex flex-col ${pkg.highlighted ? 'ring-2 ring-blue-600 shadow-lg scale-[1.02]' : ''}`}
            >
              {pkg.highlighted && (
                <span className="self-start mb-3 text-xs font-bold bg-blue-600 text-white px-2 py-1 rounded">الأكثر طلباً</span>
              )}
              <h3 className="font-bold text-xl text-slate-900">{pkg.name}</h3>
              <p className="text-sm text-slate-500 mt-1 mb-4">{pkg.desc}</p>
              <p className="text-4xl font-extrabold text-blue-600 mb-1">
                {pkg.price.toLocaleString('ar')}
                <span className="text-base font-bold text-slate-500 mr-1">{MARKET.currency}</span>
              </p>
              <ul className="space-y-2 my-6 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                    <Check className="w-4 h-4 text-blue-600 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={buildWhatsAppUrl(`مرحباً، أريد باقة ${pkg.name} (${pkg.price} ${MARKET.currency})`)}
                target="_blank"
                rel="noopener noreferrer"
                className={pkg.highlighted ? 'btn-primary w-full text-center' : 'btn-outline w-full text-center'}
                onClick={() => {
                  trackClickButton({ contentName: `Package ${pkg.id}` });
                  trackLead({ contentName: `Package ${pkg.id}` });
                }}
              >
                اطلب الباقة
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
