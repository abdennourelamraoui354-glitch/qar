import { PORTFOLIO } from '../lib/siteContent';

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-pad bg-white">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-bold text-sm mb-2">معرض الأعمال</p>
          <h2 className="section-title">أهم أعمالنا في تطوير مواقع الويب</h2>
          <p className="section-sub mx-auto">اطلع على بعض مشاريعنا في {PORTFOLIO.length} قطاعات مختلفة.</p>
        </div>

        <div className="inline-flex mx-auto mb-8 bg-blue-50 rounded-xl p-1">
          <span className="px-5 py-2 rounded-lg bg-blue-600 text-white text-sm font-bold">تطوير مواقع الويب</span>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {PORTFOLIO.map((p) => (
            <article key={p.id} className="card overflow-hidden group hover:shadow-lg transition">
              <div className="aspect-video bg-gradient-to-br from-slate-800 to-blue-900 flex items-end p-6">
                <div>
                  <span className="text-xs font-bold text-blue-200 bg-white/10 px-2 py-1 rounded">{p.category}</span>
                  <h3 className="text-xl font-bold text-white mt-2">{p.name}</h3>
                  <p className="text-slate-300 text-sm">{p.url}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
