import { PROCESS } from '../lib/siteContent';

export default function Process() {
  return (
    <section id="process" className="section-pad bg-slate-50">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-bold text-sm mb-2">مراحل العمل</p>
          <h2 className="section-title">مراحل تنفيذ مشروعك</h2>
          <p className="section-sub mx-auto">أنت على بعد خطوات قليلة من إطلاق موقع أحلامك.</p>
        </div>
        <div className="space-y-4">
          {PROCESS.map((p) => (
            <article key={p.step} className="card p-6 flex gap-6 items-start">
              <span className="shrink-0 w-12 h-12 rounded-xl bg-blue-600 text-white font-extrabold flex items-center justify-center">
                {p.step}
              </span>
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-1">{p.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
