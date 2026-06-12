import { STATS } from '../lib/siteContent';

export default function Stats() {
  return (
    <section className="section-pad bg-blue-600 text-white">
      <div className="container-narrow grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {STATS.map((s) => (
          <div key={s.label}>
            <p className="text-3xl md:text-4xl font-extrabold mb-1">{s.value}</p>
            <p className="text-blue-100 text-sm">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
