import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ as ITEMS } from '../lib/siteContent';

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="section-pad bg-slate-50">
      <div className="container-narrow max-w-3xl">
        <div className="text-center mb-10">
          <h2 className="section-title">أسئلة شائعة</h2>
        </div>
        <div className="space-y-3">
          {ITEMS.map((item, i) => (
            <article key={item.q} className="card overflow-hidden">
              <button
                type="button"
                className="w-full flex items-center justify-between p-5 text-right font-bold text-slate-900"
                onClick={() => setOpen(open === i ? -1 : i)}
              >
                {item.q}
                <ChevronDown className={`w-5 h-5 transition ${open === i ? 'rotate-180' : ''}`} />
              </button>
              {open === i && <p className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">{item.a}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
