import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../lib/siteContent';

export default function Testimonials() {
  return (
    <section className="section-pad bg-slate-50">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-bold text-sm mb-2">آراء العملاء</p>
          <h2 className="section-title">هل رأيت هذا المستوى من رضا العملاء من قبل!</h2>
          <p className="section-sub mx-auto">لا تأخذ كلماتنا كأمر مسلم به — هذا ما يقوله عملاؤنا عنا.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <article key={t.name} className="card p-6">
              <Quote className="w-8 h-8 text-blue-200 mb-4" />
              <p className="text-slate-600 text-sm leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
              <div>
                <p className="font-bold text-slate-900">{t.name}</p>
                <p className="text-xs text-slate-500">{t.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
