import { CONTACT } from '../lib/constants';
import { buildWhatsAppUrl } from '../lib/constants';
import { MARKET } from '../lib/siteContent';
import { trackLead } from '../lib/tiktokPixel';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
        <div>
          <img src="/logo.svg" alt="Nounmotion" className="h-9 mb-4 brightness-0 invert" />
          <p className="text-sm leading-relaxed">
            Nounmotion — استوديو تطوير مواقع الويب في {MARKET.country}. {MARKET.cities}.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-white mb-3">روابط</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#services" className="hover:text-white">الخدمات</a></li>
            <li><a href="#portfolio" className="hover:text-white">أعمالنا</a></li>
            <li><a href="#packages" className="hover:text-white">الباقات</a></li>
            <li><a href="#contact" className="hover:text-white">تواصل</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-3">تواصل</h4>
          <ul className="space-y-2 text-sm">
            <li>{CONTACT.whatsappDisplay}</li>
            <li>{CONTACT.email}</li>
            <li>
              <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                {CONTACT.instagramHandle}
              </a>
            </li>
          </ul>
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 btn-primary text-sm"
            onClick={() => trackLead({ contentName: 'Footer WhatsApp' })}
          >
            واتساب
          </a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 mt-10 pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Nounmotion — {CONTACT.domain}
      </div>
    </footer>
  );
}
