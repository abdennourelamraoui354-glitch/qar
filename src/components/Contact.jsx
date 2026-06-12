import { useState } from 'react';
import { Send } from 'lucide-react';
import { buildWhatsAppUrl, CONTACT } from '../lib/constants';
import { MARKET } from '../lib/siteContent';
import { trackLead, trackSubmitForm } from '../lib/tiktokPixel';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: 'تطوير مواقع الويب', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    trackSubmitForm({ contentName: 'Contact Form' });
    trackLead({ contentName: 'Contact Form' });
    const text = `مرحباً Nounmotion 👋\n\nالاسم: ${form.name}\nالهاتف: ${form.phone}\nالبريد: ${form.email}\nالخدمة: ${form.service}\n\n${form.message}`;
    window.open(buildWhatsAppUrl(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="section-pad bg-blue-600">
      <div className="container-narrow grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-white">
          <p className="text-blue-200 font-bold text-sm mb-2">تواصل معنا</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">تواصل معنا وابدأ قصة نجاحك</h2>
          <p className="text-blue-100 leading-relaxed mb-6">
            املأ النموذج وسنتواصل معك عبر واتساب خلال ساعات. نخدم {MARKET.cities}.
          </p>
          <div className="space-y-2 text-sm text-blue-100">
            <p>واتساب: {CONTACT.whatsappDisplay}</p>
            <p>البريد: {CONTACT.email}</p>
            <p>إنستغرام: {CONTACT.instagramHandle}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="card p-6 md:p-8 space-y-4">
          <h3 className="font-bold text-xl text-slate-900 mb-2">ابدأ مشروعك الآن</h3>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">الاسم الكامل</label>
            <input
              required
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">رقم الهاتف</label>
            <input
              required
              type="tel"
              placeholder={MARKET.phonePlaceholder}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">البريد الإلكتروني</label>
            <input
              type="email"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">الخدمة المطلوبة</label>
            <select
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
            >
              <option>تطوير مواقع الويب</option>
              <option>تصميم واجهات المستخدم</option>
              <option>الصيانة والدعم الفني</option>
              <option>تحسين محركات البحث</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">وصف المشروع</label>
            <textarea
              rows={4}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </div>
          <button type="submit" className="btn-primary w-full">
            <Send className="w-4 h-4" />
            إرسال عبر واتساب
          </button>
        </form>
      </div>
    </section>
  );
}
