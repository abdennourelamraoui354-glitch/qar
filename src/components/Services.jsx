import { Globe, Layout, Search, Shield } from 'lucide-react';
import { SERVICES } from '../lib/siteContent';

const ICONS = { globe: Globe, layout: Layout, shield: Shield, search: Search };

export default function Services() {
  return (
    <section id="services" className="section-pad bg-white">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-bold text-sm mb-2">خدماتنا</p>
          <h2 className="section-title">خدمات احترافية على يد خبراء</h2>
          <p className="section-sub mx-auto">نركز على تطوير مواقع الويب فقط — تصميم، برمجة، ودعم فني.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s) => {
            const Icon = ICONS[s.icon];
            return (
              <article key={s.title} className="card p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">{s.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
