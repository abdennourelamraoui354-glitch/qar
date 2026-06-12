import { Zap, Lock, Gauge, TrendingUp } from 'lucide-react';

const POINTS = [
  { icon: Zap, title: 'سرعة تحميل فائقة', desc: 'نبرمج موقعك لتحميل سريع يحافظ على الزوار ويزيد التحويلات.' },
  { icon: Lock, title: 'أمان ونسخ احتياطي', desc: 'حماية بيانات موقعك مع أفضل ممارسات الأمان والنسخ الاحتياطي.' },
  { icon: Gauge, title: 'تجربة مستخدم ممتازة', desc: 'تصميم يراعي سهولة التصفح ويحسّن معدلات التحويل من الإعلانات.' },
  { icon: TrendingUp, title: 'تحويل الزوار لعملاء', desc: 'ربط واتساب ونماذج تواصل لتحويل زوار إنستغرام إلى leads.' },
];

export default function About() {
  return (
    <section className="section-pad bg-slate-50">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-blue-600 font-bold text-sm mb-2">من نحن</p>
            <h2 className="section-title mb-4">نحن لا نصمم مواقع... نحن نبني تجارب رقمية</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              في Nounmotion نحوّل فكرتك إلى تجربة رقمية نابضة بالحياة. نصمّم مواقع إلكترونية تترك انطباعاً أول لا يُنسى،
              تجمع بين الجمال البصري والذكاء التقني — متجاوبة، سريعة، وآمنة.
            </p>
            <p className="text-slate-600 leading-relaxed">
              سواء كنت تطلق مشروعك أو تطوره، نمنحك موقعاً يعبّر عن علامتك التجارية ويساعدك على النجاح في السوق المحلي.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {POINTS.map((p) => (
              <article key={p.title} className="card p-5">
                <p.icon className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-bold text-slate-900 mb-2">{p.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
