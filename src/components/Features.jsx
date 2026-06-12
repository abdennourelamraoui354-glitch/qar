import { FEATURES } from '../lib/siteContent';

export default function Features() {
  return (
    <section className="section-pad bg-white">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-bold text-sm mb-2">لماذا نحن</p>
          <h2 className="section-title">أهم ما يميز خدماتنا</h2>
          <p className="section-sub mx-auto">
            لسنا مجرد شركة تقوم بتنفيذ مشروعك — نقدم دعماً مميزاً لضمان عمل موقعك بسلاسة.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f) => (
            <article key={f.num} className="card p-6 relative overflow-hidden">
              <span className="text-5xl font-extrabold text-blue-50 absolute top-2 left-4">{f.num}</span>
              <div className="relative">
                <h3 className="font-bold text-lg text-slate-900 mb-2">{f.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
